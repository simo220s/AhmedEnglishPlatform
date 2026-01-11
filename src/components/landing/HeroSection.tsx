import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, Users, Clock, Award, CheckCircle } from './icons';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { YouTubeFacade } from '@/components/YouTubeFacade';
import { 
  trackHeroBookTrial, 
  trackHeroWhatsApp, 
  trackHeroMobileBookTrial, 
  trackHeroMobileWhatsApp 
} from '@/lib/analytics';


// Generate a weekly random number between 15-30 based on current week
const getWeeklyRandomBookings = (): number => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const weekNumber = Math.floor((now.getTime() - startOfYear.getTime()) / (7 * 24 * 60 * 60 * 1000));
  // Use week number as seed for consistent random per week
  const seed = weekNumber + now.getFullYear();
  const random = Math.sin(seed) * 10000;
  return Math.floor((random - Math.floor(random)) * 16) + 15; // 15-30
};
// Memoized HeroSection to prevent unnecessary re-renders
export const HeroSection = memo(function HeroSection() {

  const weeklyBookings = useMemo(() => getWeeklyRandomBookings(), []);

  return (
    <section className="relative overflow-hidden gradient-hero py-20 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video - Shows first on mobile */}
          <div className="relative order-first lg:order-last">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <YouTubeFacade
                videoId="igqALAjMFOg"
                title="تعريف بالأستاذ أحمد"
                priority
              />
            </div>

            {/* Mobile CTA Buttons - Below video on mobile */}
            <div className="mt-6 lg:hidden space-y-3">
              <Button size="lg" asChild className="w-full text-lg" onClick={trackHeroMobileBookTrial}>
                <Link to="/book-trial">
                  احجز الحصة التجريبية
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="whatsapp" asChild className="w-full text-lg" onClick={trackHeroMobileWhatsApp}>
                <a href="https://wa.me/966564084838" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <WhatsAppIcon size={20} />
                  تواصل عبر واتساب
                </a>
              </Button>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-card-lg border border-border animate-float hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
                  <CheckCircle className="h-6 w-6 text-success" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">+{weeklyBookings} حصة محجوزة</div>
                  <div className="text-xs text-muted-foreground">هذا الأسبوع</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-last lg:order-first">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Award className="h-4 w-4" />
              <span>معتمد من جامعة أريزونا</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              <span className="block pb-2">ولدك اللي عمره بين (10-18) سنة</span>
              <span className="text-primary block">خايف يتكلم انجليزي؟</span>
            </h1>

            <p className="text-lg text-foreground/70 leading-loose max-w-xl">
              معلم انجليزي خصوصي اون لاين - معتمد من جامعة أريزونا الأمريكية مع خبرة 8+ سنوات في تعليم الأطفال والمراهقين
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">TESOL</div>
                  <div className="text-xs text-muted-foreground">معلم معتمد</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                  <Clock className="h-5 w-5 text-success" />
                </div>
                <div>
                  <div className="font-bold text-foreground">8+</div>
                  <div className="text-xs text-muted-foreground">سنوات خبرة</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                  <Users className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <div className="font-bold text-foreground">+500</div>
                  <div className="text-xs text-muted-foreground">طالب متفوق</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Desktop only */}
            <div className="hidden lg:flex flex-wrap gap-4">
              <Button size="lg" asChild className="text-lg px-8" onClick={trackHeroBookTrial}>
                <Link to="/book-trial">
                  احجز الحصة التجريبية
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="whatsapp" asChild className="text-lg px-8" onClick={trackHeroWhatsApp}>
                <a href="https://wa.me/966564084838" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <WhatsAppIcon size={20} />
                  تواصل عبر واتساب
                </a>
              </Button>
            </div>

            {/* Trust Badges - Improved contrast */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <Star className="h-4 w-4 text-warning fill-warning" />
                <span>تقييم 5 نجوم</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>ضمان استرجاع الرصيد</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <Clock className="h-4 w-4 text-primary" />
                <span>جدولة مرنة</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
});
