import { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Sparkles, Shield } from './icons';
import { RiyalPrice } from '@/components/RiyalPrice';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { trackPackageClick, trackPackagesHelpWhatsApp } from '@/lib/analytics';

// Stripe Payment Links
const paymentLinks: Record<string, string> = {
  basic: 'https://buy.stripe.com/8x2bJ2951fsvaJT4KYbwk0s',
  standard: 'https://buy.stripe.com/7sY3cw80X8032dnelybwk0t',
  intensive: 'https://buy.stripe.com/8x2fZi6WT3JN19jb9mbwk0u',
  premium: 'https://buy.stripe.com/4gM6oIbd9fsvf09dhubwk0v',
};

interface PackageItem {
  id: string;
  nameAr: string;
  descriptionAr: string;
  monthlyPrice: number;
  classesPerMonth: number;
  pricePerClass: number;
  discountPercent?: number;
  features: string[];
  isFeatured?: boolean;
  isBestseller?: boolean;
  ctaText: string;
  badge?: string;
}

const packages: PackageItem[] = [
  {
    id: 'trial',
    nameAr: 'جلسة تجريبية',
    descriptionAr: 'جلسة تقييم مجانية مع الأستاذ أحمد',
    monthlyPrice: 0,
    classesPerMonth: 1,
    pricePerClass: 0,
    features: ['تقييم شامل لمستوى طفلك', 'خطة تعليمية مخصصة', 'بدون أي التزامات'],
    ctaText: 'احجز مجاناً',
    badge: 'مجاناً',
  },
  {
    id: 'basic',
    nameAr: 'الباقة الأساسية',
    descriptionAr: '4 حصص شهرياً',
    monthlyPrice: 280,
    classesPerMonth: 4,
    pricePerClass: 70,
    features: ['4 حصص × 50 دقيقة', 'جدول مرن', 'دعم واتساب'],
    ctaText: 'اشترك الآن',
  },
  {
    id: 'standard',
    nameAr: 'الباقة المتوسطة',
    descriptionAr: '8 حصص شهرياً',
    monthlyPrice: 400,
    classesPerMonth: 8,
    pricePerClass: 50,
    discountPercent: 29,
    features: ['8 حصص × 50 دقيقة', 'مواد تعليمية مخصصة', 'متابعة مستمرة'],
    isFeatured: true,
    isBestseller: true,
    ctaText: 'ابدأ الآن',
  },
  {
    id: 'intensive',
    nameAr: 'الباقة المكثفة',
    descriptionAr: '12 حصة شهرياً',
    monthlyPrice: 480,
    classesPerMonth: 12,
    pricePerClass: 40,
    discountPercent: 43,
    features: ['12 حصة × 50 دقيقة', 'تقارير أسبوعية', 'أولوية في الحجز'],
    ctaText: 'اشترك الآن',
  },
  {
    id: 'premium',
    nameAr: 'الباقة المتميزة',
    descriptionAr: '20 حصة شهرياً',
    monthlyPrice: 700,
    classesPerMonth: 20,
    pricePerClass: 35,
    discountPercent: 50,
    features: ['20 حصة × 50 دقيقة', 'دعم مباشر مميز', 'أولوية قصوى'],
    ctaText: 'اشترك الآن',
    badge: 'أفضل قيمة',
  },
];

export const PackagesSection = memo(function PackagesSection() {
  const handleCheckout = useCallback((pkg: PackageItem) => {
    trackPackageClick(pkg.id, pkg.nameAr);
    const link = paymentLinks[pkg.id];
    if (link) window.open(link, '_blank');
  }, []);

  const handleTrialClick = useCallback((pkg: PackageItem) => {
    trackPackageClick(pkg.id, pkg.nameAr);
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-muted/30" id="packages">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            الباقات والأسعار
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            اختر الباقة المناسبة لك
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/20 text-success text-sm font-semibold">
            <Shield className="h-4 w-4" />
            ضمان استرجاع الرصيد - 30 يوم
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl bg-card border-2 ${
                pkg.isFeatured ? 'border-primary shadow-lg scale-[1.02]' : 'border-border hover:border-primary/50'
              } p-6 transition-all duration-300 hover:shadow-lg flex flex-col`}
            >
              {pkg.isBestseller && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-secondary text-secondary-foreground px-3 py-1">
                    <Star className="h-3 w-3 ml-1 fill-current" />
                    الأكثر طلباً
                  </Badge>
                </div>
              )}

              {pkg.badge && !pkg.isBestseller && (
                <div className="absolute -top-3 right-4">
                  <Badge variant="default" className="bg-success text-success-foreground px-3 py-1">
                    {pkg.badge}
                  </Badge>
                </div>
              )}

              <div className="text-center mb-6 pt-2">
                <h3 className="font-bold text-xl text-foreground mb-2">{pkg.nameAr}</h3>
                <p className="text-sm text-foreground/70">{pkg.descriptionAr}</p>
              </div>

              <div className="text-center mb-6 pb-6 border-b border-border">
                {pkg.monthlyPrice === 0 ? (
                  <div className="text-4xl font-extrabold text-success">مجاناً</div>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-1">
                      <RiyalPrice amount={pkg.monthlyPrice} className="text-4xl font-extrabold text-foreground" />
                      <span className="text-foreground/70 text-sm">/شهر</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-foreground/80 text-sm">
                        <RiyalPrice amount={pkg.pricePerClass} className="text-sm font-bold text-foreground" /> للحصة
                      </span>
                      {pkg.discountPercent && (
                        <Badge variant="destructive" className="text-xs">وفر {pkg.discountPercent}%</Badge>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-success" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {pkg.id === 'trial' ? (
                <Button asChild className="w-full h-12 text-base" variant="outline" onClick={() => handleTrialClick(pkg)}>
                  <Link to="/book-trial">{pkg.ctaText}</Link>
                </Button>
              ) : (
                <Button
                  className="w-full h-12 text-base"
                  variant={pkg.isFeatured ? 'default' : 'outline'}
                  onClick={() => handleCheckout(pkg)}
                >
                  {pkg.ctaText}
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-card border border-border rounded-2xl p-6 max-w-md mx-auto">
            <h4 className="font-semibold text-foreground mb-2">تحتاج مساعدة في الاختيار؟</h4>
            <p className="text-sm text-foreground/70 mb-4">تحدث مع الأستاذ أحمد مباشرة</p>
            <Button variant="whatsapp" asChild className="w-full" onClick={trackPackagesHelpWhatsApp}>
              <a href="https://wa.me/966564084838" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <WhatsAppIcon size={16} />
                تواصل عبر واتساب
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});
