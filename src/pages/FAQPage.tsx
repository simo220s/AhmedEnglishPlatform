import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Mail, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "ما هي مدة الحصة الواحدة؟",
    answer: "مدة الحصة الواحدة 50 دقيقة، وهي المدة المثالية للحفاظ على تركيز الطالب وتحقيق أقصى استفادة من الدرس."
  },
  {
    question: "كيف تتم الحصص؟",
    answer: "تتم الحصص عبر الإنترنت باستخدام منصات مثل Zoom أو Google Meet. ستحصل على رابط الاجتماع قبل موعد الحصة."
  },
  {
    question: "ما هي الفئات العمرية المستهدفة؟",
    answer: "نستهدف الطلاب من عمر 10 إلى 18 سنة، مع تخصيص المحتوى والأسلوب التعليمي ليناسب كل فئة عمرية."
  },
  {
    question: "هل يمكنني إلغاء أو تأجيل الحصة؟",
    answer: "نعم، يمكنك إلغاء أو تأجيل الحصة قبل 24 ساعة من موعدها دون أي رسوم إضافية. الإلغاء بعد هذه المدة قد يؤدي إلى خصم رصيد الحصة."
  },
  {
    question: "كيف يتم الدفع؟",
    answer: "نقبل الدفع عبر Apple Pay والبطاقات الائتمانية. جميع المعاملات آمنة ومشفرة."
  },
  {
    question: "هل الحصة التجريبية مجانية حقاً؟",
    answer: "نعم! الحصة التجريبية الأولى مجانية تماماً بدون أي التزامات. نريدك أن تجرب أسلوبنا التعليمي قبل اتخاذ قرارك."
  },
  {
    question: "ما هي مؤهلات الأستاذ أحمد؟",
    answer: "الأستاذ أحمد حاصل على شهادة TESOL من جامعة أريزونا الأمريكية، مع خبرة تزيد عن 8 سنوات في تعليم اللغة الإنجليزية للطلاب السعوديين."
  },
  {
    question: "كيف أتابع تقدم ابني/ابنتي؟",
    answer: "ستحصل على تقارير دورية عن مستوى الطالب وتقدمه، بالإضافة إلى ملاحظات بعد كل حصة عبر لوحة التحكم الخاصة بك."
  },
  {
    question: "هل تقدمون حصص جماعية؟",
    answer: "لا، نقدم حصص فردية فقط لضمان التركيز الكامل على الطالب وتحقيق أفضل النتائج."
  },
  {
    question: "ما هي صلاحية الرصيد؟",
    answer: "صلاحية الرصيد 28 يوماً من تاريخ الشراء."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
          <div className="container max-w-4xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              الأسئلة الشائعة
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              إجابات على أكثر الأسئلة شيوعاً حول دروسنا وطريقة العمل
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="text-right hover:no-underline py-4">
                    <span className="font-medium text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-12 bg-muted/30">
          <div className="container max-w-3xl">
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">لا تزال لديك أسئلة؟</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-center text-muted-foreground">
                  نحن هنا لمساعدتك! تواصل معنا عبر أي من الطرق التالية
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild className="gap-2">
                    <a 
                      href="https://wa.me/966564084838" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      تواصل عبر واتساب
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="gap-2">
                    <a href="mailto:saudienglishclub@gmail.com">
                      <Mail className="w-4 h-4" />
                      أرسل بريد إلكتروني
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="container max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              جاهز للبدء؟
            </h2>
            <p className="text-muted-foreground mb-6">
              احجز حصتك التجريبية المجانية الآن وابدأ رحلة تعلم اللغة الإنجليزية
            </p>
            <Button size="lg" asChild>
              <Link to="/book-trial">احجز حصة تجريبية مجانية</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
