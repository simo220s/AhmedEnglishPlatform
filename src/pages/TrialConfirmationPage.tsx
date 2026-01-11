import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle2, 
  ArrowLeft,
  Laptop,
  MessageCircle,
  Mail,
  Star,
  MessageSquare
} from 'lucide-react';
import { 
  trackConfirmationPageView, 
  trackConfirmationBackHome, 
  trackConfirmationWhatsApp 
} from '@/lib/analytics';

const staticReviews = [
  { id: 'preply-1', name: 'بتال', rating: 5, comment: 'مدرس خلوق ومتعاون جدا وشرحه جداً ممتاز درس ولدي. مناهج انترناشونال وتقدم مستواه شكراً استاذ احمد وبالتوفيق لك' },
  { id: 'preply-2', name: 'Anas', rating: 5, comment: 'شرح ممتاز وممتع لطلاب مستمتع يوسف معاه' },
  { id: 'preply-3', name: 'Najm', rating: 5, comment: 'الصراحه أستاذ أحمد إنسان متواضع وممتاز جداً في التعليم وصبور ويعلمك كل كبيره وكل صغيره تقيمي له 5 نجوم ولو فيه زياده أعطيته ❤️' },
  { id: 'preply-4', name: 'huda', rating: 5, comment: 'قدم الأستاذ أحمد مجهود جبار ومميز ورائع في هذة الدورة من ناحية الشرح والقدرة على توصيل المعنى وسلاسة أسلوبه وصبره وتحفيزه المستمر' },
  { id: 'preply-5', name: 'hadeel', rating: 5, comment: 'ماشاء لله تبارك الرحمن كان ممتاز جداً مع اخوي وجداً متفهم وطريقه شرحه وترجمة له و توصيل المعلومة ممتاز 🤍🤍' },
  { id: 'preply-6', name: 'Arej', rating: 5, comment: 'استاذ متفهم. يساعد الطالب تجربه ممتازه تحسن فيها قراتي وتحسن فيها التفهم' },
  { id: 'preply-7', name: 'Alanod', rating: 5, comment: 'شكرا أستاذ احمد ، كنت جدًا متفهم لبنتي ، وصبور معها، وشجعتها وعطيتها ثقة في نفسها رغم أنها مبتدئة' },
  { id: 'preply-8', name: 'Alaa', rating: 5, comment: 'درس ممتع جدًا وشخص متفهم عرف ايش بالضبط مشكلتي وايش قصدي وباذن الله اشترك معاه لانه كسر لي حاجز الخوف🙏🏼' },
];

function ReviewCard({ name, rating, comment }: { name: string; rating: number; comment: string }) {
  return (
    <Card className="h-full">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-bold text-primary">{name[0]}</span>
          </div>
          <span className="font-medium text-foreground">{name}</span>
          <div className="flex mr-auto">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${star <= rating ? 'text-warning fill-warning' : 'text-muted-foreground'}`}
              />
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{comment}</p>
      </CardContent>
    </Card>
  );
}

export default function TrialConfirmationPage() {
  // Track page view on mount
  useEffect(() => {
    trackConfirmationPageView();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-success/5 via-background to-primary/5">
      <Header />
      <main className="flex-grow py-12">
        <div className="container max-w-2xl px-4">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="h-20 w-20 rounded-full bg-success/10 flex items-center justify-center animate-scale-in">
                <CheckCircle2 className="h-10 w-10 text-success animate-fade-in" />
              </div>
            </div>
            <Badge className="bg-success/10 text-success border-0 mb-4 pointer-events-none">
              <CheckCircle2 className="h-4 w-4 ml-1" />
              تم الحجز بنجاح
            </Badge>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              تم حجز درسك التجريبي! 🎉
            </h1>
            <p className="text-muted-foreground">
              سيتم إرسال تفاصيل الحصة ورابط الدخول عبر البريد الإلكتروني
            </p>
          </div>

          {/* Confirmation Card */}
          <Card className="shadow-card-lg border-success/20">
            <CardContent className="p-6 md:p-8">
              {/* Email Notice */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6 text-center">
                <div className="flex items-center justify-center gap-2 text-primary mb-2">
                  <Mail className="h-5 w-5" />
                  <span className="font-semibold">تحقق من بريدك الإلكتروني</span>
                </div>
                <p className="text-muted-foreground">
                  أرسلنا لك تأكيد الحجز مع رابط الحصة على بريدك الإلكتروني
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="flex-1" onClick={trackConfirmationBackHome}>
                  <Link to="/">
                    <ArrowLeft className="ml-2 h-4 w-4" />
                    العودة للرئيسية
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="mt-6 bg-muted/30">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4">الخطوات التالية</h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">1</span>
                  <div>
                    <span className="text-foreground font-medium">تحقق من بريدك الإلكتروني</span>
                    <p className="text-sm text-muted-foreground mt-0.5">ستجد تأكيد الحجز ورابط الحصة</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">2</span>
                  <div className="flex items-center gap-2">
                    <Laptop className="h-4 w-4 text-muted-foreground" />
                    <span className="text-foreground font-medium">استخدم آيباد أو كمبيوتر للحصة</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">3</span>
                  <span className="text-foreground font-medium">انضم في الموعد واستمتع! 🎉</span>
                </li>
              </ol>
              
              {/* WhatsApp Contact */}
              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">إذا احتجت أي مساعدة، تواصل معنا:</p>
                <Button variant="outline" asChild className="w-full sm:w-auto gap-2" onClick={trackConfirmationWhatsApp}>
                  <a href="https://wa.me/966564084838" target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4 text-[hsl(var(--whatsapp))]" />
                    تواصل واتساب
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Reviews Section */}
          <div className="mt-10 space-y-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <MessageSquare className="h-7 w-7 text-primary" />
              تقييمات الطلاب
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {staticReviews.map((review) => (
                <ReviewCard
                  key={review.id}
                  name={review.name}
                  rating={review.rating}
                  comment={review.comment}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
