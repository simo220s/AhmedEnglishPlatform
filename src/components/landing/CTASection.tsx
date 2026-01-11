import { memo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sparkles } from './icons';
import { scrollToSection } from '@/hooks/useHashScroll';
import { trackCTABookTrial, trackCTAViewPackages } from '@/lib/analytics';

export const CTASection = memo(function CTASection() {
  const location = useLocation();
  const navigate = useNavigate();

  const handlePackagesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackCTAViewPackages();
    if (location.pathname === '/') {
      scrollToSection('packages');
    } else {
      navigate('/');
      setTimeout(() => scrollToSection('packages'), 150);
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-primary relative overflow-hidden" id="faq">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            ابدأ رحلتك اليوم
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            مستعد يتحسن مستوى ولدك بالانجليزي؟
          </h2>

          <p className="text-lg text-white/90 max-w-xl mx-auto">
            احجز درسك التجريبي المجاني الحين واكتشف كيف نقدر نساعدك
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-lg px-8 bg-white text-primary hover:bg-white/90"
              onClick={trackCTABookTrial}
            >
              <Link to="/book-trial">
                احجز درس تجريبي مجاني
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handlePackagesClick}
              className="text-lg px-8 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              عرض الباقات
            </Button>
          </div>

          <p className="text-white/70 text-sm">
            لا يتطلب بطاقة ائتمان • إلغاء في أي وقت
          </p>
        </div>
      </div>
    </section>
  );
});
