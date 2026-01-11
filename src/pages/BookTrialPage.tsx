import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Loader2 } from "lucide-react";
import GoogleMeetIcon from "@/assets/google-meet.svg";
import { trackBookTrialPageView, trackTrialBookingCompleted } from "@/lib/analytics";

const NEETOCAL = {
  organization: "americanenglish",
  id: "ea729381-1127-4843-b6e7-8801d6cd5700",
} as const;

interface NeetoCalMessageData {
  type?: string;
  source?: string;
  height?: number | string;
  url?: string;
  redirectUrl?: string;
  href?: string;
}

export default function BookTrialPage() {
  const navigate = useNavigate();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [iframeHeight, setIframeHeight] = useState(900);
  const [isLoading, setIsLoading] = useState(true);

  // Track page view on mount
  useEffect(() => {
    trackBookTrialPageView();
  }, []);

  const iframeSrc = useMemo(() => {
    const url = new URL(
      `https://${NEETOCAL.organization}.neetocal.com/embed/${NEETOCAL.id}`
    );

    // NeetoCal embed query params
    url.searchParams.set("dynamicHeight", "true");
    url.searchParams.set("isSidebarAndCoverImgHidden", "true");

    return url.toString();
  }, []);

  const onMessage = useCallback(
    (event: MessageEvent) => {
      console.log("[NeetoCal message]", event.data);

      // Verify the message comes from NeetoCal
      const isFromNeetoCal = event.origin.includes("neetocal.com");
      if (!isFromNeetoCal) return;

      const data = event.data as NeetoCalMessageData;

      // NeetoCal resize messages
      if (data?.type === "neeto-cal-height-change-event") {
        const iframe = iframeRef.current;
        if (!iframe?.contentWindow) return;
        if (event.source !== iframe.contentWindow) return;

        // Calendar is ready when we receive first height update
        if (isLoading) {
          setIsLoading(false);
        }

        const newHeight = Number(data.height);
        if (!Number.isFinite(newHeight) || newHeight <= 0) return;
        setIframeHeight(Math.ceil(newHeight));
        return;
      }

      // NeetoCal action events (what we actually need for redirect)
      const type: string | undefined = typeof data === "object" && data ? data.type : undefined;
      const source: string | undefined = typeof data === "object" && data ? data.source : undefined;

      // Some embeds send an explicit URL
      const urlFromEvent: string | undefined =
        typeof data === "object" && data ? (data.url || data.redirectUrl || data.href) : undefined;

      if (typeof urlFromEvent === "string" && urlFromEvent.includes("/trial-confirmation")) {
        trackTrialBookingCompleted();
        navigate("/trial-confirmation");
        return;
      }

      // NeetoCal often sends action events without URL; treat these as success signals.
      const successTypes = new Set([
        "booking_created",
        "booking_confirmed",
        "booking_scheduled",
        "booking_success",
        "booking_completed",
        "booking_submitted",
        "meeting_scheduled",
        "neeto-cal-booking-confirmed-event",
        "neeto-cal-booking-created-event",
        "neeto-cal-booking-success-event",
        "neeto-cal-meeting-scheduled-event",
        "booking_confirmed_event",
        "booking_created_event",
        "booking_success_event",
        "meeting_booked",
        "meeting_confirmed",
        "slot_booked",
        "appointment_confirmed",
      ]);

      // Check if this is a success event from NeetoCal
      if (type && successTypes.has(type)) {
        console.log("[NeetoCal] Booking success detected:", type);
        trackTrialBookingCompleted();
        navigate("/trial-confirmation");
        return;
      }

      // Additional fallback: if source is explicitly "neetocal" and type is in successTypes
      if (source === "neetocal" && type && successTypes.has(type)) {
        console.log("[NeetoCal] Booking success detected (with source):", type);
        trackTrialBookingCompleted();
        navigate("/trial-confirmation");
        return;
      }

      // Fallback: handle string payloads that include the path
      if (typeof data === "string" && (data as string).includes("/trial-confirmation")) {
        console.log("[NeetoCal] Redirect URL found in string payload");
        trackTrialBookingCompleted();
        navigate("/trial-confirmation");
        return;
      }

      // Additional fallback: if we get a message from NeetoCal that contains booking-related keywords
      const dataStr = JSON.stringify(data).toLowerCase();
      if (
        dataStr.includes("booking") &&
        dataStr.includes("success") &&
        !type?.includes("height")
      ) {
        console.log("[NeetoCal] Booking success detected (keyword match):", data);
        trackTrialBookingCompleted();
        navigate("/trial-confirmation");
        return;
      }
    },
    [navigate, isLoading]
  );

  useEffect(() => {
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [onMessage]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <Header />
      <main className="flex-grow py-8 md:py-12">
        <div className="container max-w-5xl px-4">
          {/* Loading or icons row */}
          <div className="flex justify-center items-center gap-6 md:gap-10 mb-8 min-h-[32px]">
            {isLoading ? (
              <div className="flex items-center gap-3 text-primary animate-pulse">
                <Loader2 className="h-6 w-6 animate-spin" />
                <span className="text-base font-bold">جاري تحميل المواعيد...</span>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <img src={GoogleMeetIcon} alt="Google Meet" className="h-6 w-6" />
                  <span className="text-sm font-medium">Google Meet</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5" />
                  <span className="text-sm font-medium">25 دقيقة</span>
                </div>
                <div className="flex items-center gap-2 text-success">
                  <span className="text-sm font-bold">مجاني</span>
                </div>
              </>
            )}
          </div>

          <Card className="shadow-card-lg border-primary/20 overflow-hidden">
            <CardContent className="p-0">
              <iframe
                ref={iframeRef}
                title="NeetoCal Booking"
                src={iframeSrc}
                style={{ height: iframeHeight }}
                className="w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation allow-top-navigation"
                allow="clipboard-write *"
              />
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
