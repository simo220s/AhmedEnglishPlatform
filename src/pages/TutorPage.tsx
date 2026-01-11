import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Award, 
  Users, 
  Clock, 
  Star, 
  BookOpen,
  Globe,
  CheckCircle,
  ArrowLeft,
  MessageSquare
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

const qualifications = [
  'بكالوريوس في اللغة الإنجليزية وآدابها',
  'شهادة TEFL (تدريس الإنجليزية كلغة أجنبية)',
  'شهادة CELTA من جامعة كامبريدج',
  '8+ سنوات خبرة في التدريس',
  'خبرة في تحضير اختبارات IELTS و TOEFL',
];

const specialties = [
  'محادثة',
  'قواعد',
  'كتابة',
  'قراءة',
  'استماع',
  'IELTS',
  'TOEFL',
  'إنجليزي أعمال',
];

const staticReviews = [
  { id: 'preply-1', name: 'بتال', date: 'October 8, 2025', rating: 5, comment: 'مدرس خلوق ومتعاون جدا وشرحه جداً ممتاز درس ولدي. مناهج انترناشونال وتقدم مستواه شكراً استاذ احمد وبالتوفيق لك' },
  { id: 'preply-2', name: 'Anas', date: 'October 1, 2025', rating: 5, comment: 'شرح ممتاز وممتع لطلاب مستمتع يوسف معاه' },
  { id: 'preply-3', name: 'Najm', date: 'September 20, 2025', rating: 5, comment: 'الصراحه أستاذ أحمد إنسان متواضع وممتاز جداً في التعليم وصبور ويعلمك كل كبيره وكل صغيره تقيمي له 5 نجوم ولو فيه زياده أعطيته ❤️' },
  { id: 'preply-4', name: 'huda', date: 'September 8, 2025', rating: 5, comment: 'قدم الأستاذ أحمد مجهود جبار ومميز ورائع في هذة الدورة من ناحية الشرح والقدرة على توصيل المعنى وسلاسة أسلوبه وصبره وتحفيزه المستمر' },
  { id: 'preply-5', name: 'hadeel', date: 'August 13, 2025', rating: 5, comment: 'ماشاء لله تبارك الرحمن كان ممتاز جداً مع اخوي وجداً متفهم وطريقه شرحه وترجمة له و توصيل المعلومة ممتاز 🤍🤍' },
  { id: 'preply-6', name: 'Arej', date: 'July 19, 2025', rating: 5, comment: 'استاذ متفهم. يساعد الطالب تجربه ممتازه تحسن فيها قراتي وتحسن فيها التفهم' },
  { id: 'preply-7', name: 'Alanod', date: 'July 17, 2025', rating: 5, comment: 'شكرا أستاذ احمد ، كنت جدًا متفهم لبنتي ، وصبور معها، وشجعتها وعطيتها ثقة في نفسها رغم أنها مبتدئة' },
  { id: 'preply-8', name: 'Alaa', date: 'March 18, 2025', rating: 5, comment: 'درس ممتع جدًا وشخص متفهم عرف ايش بالضبط مشكلتي وايش قصدي وباذن الله اشترك معاه لانه كسر لي حاجز الخوف🙏🏼' },
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

const stats = [
  { icon: Users, value: '+100', label: 'طالب' },
  { icon: Clock, value: '+2000', label: 'ساعة تدريس' },
  { icon: Star, value: '5.0', label: 'تقييم' },
  { icon: Award, value: '8+', label: 'سنوات خبرة' },
];

export default function TutorPage() {
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current) return;
    scriptLoadedRef.current = true;

    const existingScript = document.querySelector(
      'script[src="https://cdn.neetocal.com/javascript/embed.js"]'
    );

    const initNeetoCal = () => {
      if (window.neetoCal?.embed) {
        window.neetoCal.embed({
          type: "inline",
          id: "ea729381-1127-4843-b6e7-8801d6cd5700",
          organization: "americanenglish",
          elementSelector: "#inline-embed-container",
          styles: "height: 100%; width: 100%;",
          queryParams: { dynamicHeight: true },
          isSidebarAndCoverImgHidden: "true",
          shouldForwardQueryParams: "false",
        });
      }
    };

    if (existingScript) {
      initNeetoCal();
    } else {
      window.neetoCal = window.neetoCal || {
        embed: function (...args: unknown[]) {
          (window.neetoCal!.q = window.neetoCal!.q || []).push(args);
        },
        q: [],
      };

      const script = document.createElement("script");
      script.src = "https://cdn.neetocal.com/javascript/embed.js";
      script.async = true;
      script.onload = initNeetoCal;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 lg:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <Badge className="bg-primary/10 text-primary border-0">
                  <GraduationCap className="h-4 w-4 ml-1" />
                  معلم معتمد
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  الأستاذ أحمد
                </h1>
                <p className="text-xl text-muted-foreground">
                  معلم لغة إنجليزية متخصص مع خبرة تزيد عن 8 سنوات في تعليم جميع المستويات والأعمار
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 rounded-xl bg-card border border-border">
                      <stat.icon className="h-6 w-6 mx-auto text-primary mb-2" />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/book-trial">
                      احجز درس تجريبي
                      <ArrowLeft className="mr-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="whatsapp" asChild>
                    <a href="https://wa.me/966564084838" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <WhatsAppIcon size={20} />
                      تواصل عبر واتساب
                    </a>
                  </Button>
                </div>
              </div>

              {/* Video */}
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border">
                  <iframe
                    src="https://www.youtube.com/embed/igqALAjMFOg?si=XPVhE8pmAEz6RA7x"
                    title="تعريف بالأستاذ أحمد"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Bio */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">نبذة عني</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    مرحباً! أنا الأستاذ أحمد، معلم لغة إنجليزية شغوف بالتعليم ومساعدة الطلاب على تحقيق أهدافهم اللغوية. 
                    أؤمن بأن تعلم اللغة الإنجليزية يجب أن يكون ممتعاً وتفاعلياً.
                  </p>
                  <p>
                    بدأت رحلتي في التدريس منذ أكثر من 8 سنوات، وخلال هذه الفترة درّست مئات الطلاب من مختلف الأعمار 
                    والمستويات. أستخدم أساليب تعليمية حديثة ومتنوعة تناسب كل طالب على حدة.
                  </p>
                </div>
              </div>

              {/* Qualifications */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    المؤهلات والشهادات
                  </h3>
                  <ul className="space-y-3">
                    {qualifications.map((qual, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-success shrink-0" />
                        <span className="text-muted-foreground">{qual}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Specialties */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-secondary" />
                    التخصصات
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-sm py-1.5 px-3">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Teaching Approach */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-warning" />
                    أسلوب التدريس
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">تعلم تفاعلي</h4>
                      <p className="text-sm text-muted-foreground">
                        أستخدم أساليب تفاعلية تشمل المحادثات الحقيقية والألعاب التعليمية
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">منهج مخصص</h4>
                      <p className="text-sm text-muted-foreground">
                        أصمم خطة تعلم مخصصة لكل طالب بناءً على مستواه وأهدافه
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">متابعة مستمرة</h4>
                      <p className="text-sm text-muted-foreground">
                        أقدم تقارير دورية عن تقدم الطالب ودعم مستمر
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">بيئة محفزة</h4>
                      <p className="text-sm text-muted-foreground">
                        بيئة تعليمية آمنة تشجع على المحاولة والتعلم من الأخطاء
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reviews Section */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground flex items-center gap-2">
                  <MessageSquare className="h-8 w-8 text-primary" />
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

              {/* Inline Booking Calendar */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground flex items-center gap-2">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  احجز درسك الآن
                </h2>
                <Card>
                  <CardContent className="p-0 overflow-hidden">
                    <div
                      id="inline-embed-container"
                      className="w-full min-h-[600px]"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">مستعد لبدء رحلة التعلم؟</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              احجز درسك التجريبي المجاني الآن وابدأ في تحسين مستواك في اللغة الإنجليزية
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-white text-primary hover:bg-white/90">
              <Link to="/book-trial">
                احجز درس تجريبي مجاني
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

declare global {
  interface Window {
    neetoCal?: {
      embed: (...args: unknown[]) => void;
      q?: unknown[];
    };
  }
}
