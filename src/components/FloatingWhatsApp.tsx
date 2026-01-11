import { forwardRef } from 'react';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { trackFloatingWhatsApp } from '@/lib/analytics';

const WHATSAPP_URL = 'https://wa.me/966564084838';

export const FloatingWhatsApp = forwardRef<HTMLDivElement>(function FloatingWhatsApp(_, ref) {
  return (
    <div ref={ref} className="fixed bottom-6 left-6 z-50">
      {/* Pulse animation ring */}
      <div className="absolute inset-0 rounded-full bg-whatsapp opacity-75 animate-ping" />
      
      {/* Main button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackFloatingWhatsApp}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp hover:bg-whatsapp/90 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        aria-label="تواصل معنا عبر واتساب"
      >
        <WhatsAppIcon size={32} className="text-white" />
      </a>
    </div>
  );
});

FloatingWhatsApp.displayName = 'FloatingWhatsApp';

export default FloatingWhatsApp;
