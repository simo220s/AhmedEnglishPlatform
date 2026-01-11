import { lazy, Suspense, memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { HeroSection } from '@/components/landing/HeroSection';
import { useHashScroll } from '@/hooks/useHashScroll';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from '@/components/landing/icons';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { 
  trackPreFeaturesBookTrial, 
  trackMobileCTABookTrial, 
  trackMobileCTAWhatsApp 
} from '@/lib/analytics';

// Lazy load below-the-fold sections
const FeaturesSection = lazy(() => import('@/components/landing/FeaturesSection').then(m => ({ default: m.FeaturesSection })));
const PackagesSection = lazy(() => import('@/components/landing/PackagesSection').then(m => ({ default: m.PackagesSection })));
const TestimonialsSection = lazy(() => import('@/components/landing/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const CTASection = lazy(() => import('@/components/landing/CTASection').then(m => ({ default: m.CTASection })));

// Minimal skeleton - no animation to reduce CPU
const SectionSkeleton = memo(() => (
  <div className="py-20 lg:py-32">
    <div className="container">
      <div className="h-8 bg-muted/50 rounded w-1/3 mx-auto mb-8" />
      <div className="h-4 bg-muted/50 rounded w-2/3 mx-auto" />
    </div>
  </div>
));
SectionSkeleton.displayName = 'SectionSkeleton';

// Memoized CTA sections
const PreFeaturesCTA = memo(() => (
  <div className="py-10 bg-gradient-to-b from-background to-muted/30">
    <div className="container text-center">
      <Button size="lg" asChild className="text-lg px-10 shadow-lg" onClick={trackPreFeaturesBookTrial}>
        <Link to="/book-trial">
          احجز حصة ولدك التجريبية
          <ArrowLeft className="mr-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  </div>
));
PreFeaturesCTA.displayName = 'PreFeaturesCTA';

const MobileCTASection = memo(() => (
  <div className="lg:hidden py-8 bg-muted/30">
    <div className="container space-y-3">
      <Button size="lg" asChild className="w-full text-lg" onClick={trackMobileCTABookTrial}>
        <Link to="/book-trial">
          احجز الحصة التجريبية
          <ArrowLeft className="mr-2 h-5 w-5" />
        </Link>
      </Button>
      <Button size="lg" variant="whatsapp" asChild className="w-full text-lg" onClick={trackMobileCTAWhatsApp}>
        <a href="https://wa.me/966564084838" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
          <WhatsAppIcon size={20} />
          تواصل عبر واتساب
        </a>
      </Button>
    </div>
  </div>
));
MobileCTASection.displayName = 'MobileCTASection';

const Index = () => {
  useHashScroll();

  // Preload below-the-fold sections after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      // Trigger preloading of lazy components
      import('@/components/landing/FeaturesSection');
      import('@/components/landing/PackagesSection');
      import('@/components/landing/TestimonialsSection');
      import('@/components/landing/CTASection');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PreFeaturesCTA />
        <Suspense fallback={<SectionSkeleton />}>
          <FeaturesSection />
        </Suspense>
        <MobileCTASection />
        <Suspense fallback={<SectionSkeleton />}>
          <PackagesSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <CTASection />
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
