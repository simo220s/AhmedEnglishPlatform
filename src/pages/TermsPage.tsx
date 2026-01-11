import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow py-12">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              الشروط والأحكام
            </h1>
            <p className="text-muted-foreground">
              Terms and Conditions
            </p>
          </div>

          <Card>
            <CardContent className="p-6 md:p-8">
              <Tabs defaultValue="ar" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="ar">العربية</TabsTrigger>
                  <TabsTrigger value="en">English</TabsTrigger>
                </TabsList>

                <TabsContent value="ar" className="space-y-6 text-right" dir="rtl">
                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">1. مقدمة</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      مرحباً بك في منصة الأستاذ أحمد لتعليم اللغة الإنجليزية. باستخدامك لخدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. يرجى قراءتها بعناية قبل استخدام المنصة.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">2. الخدمات المقدمة</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      نقدم دروساً خصوصية لتعليم اللغة الإنجليزية عبر الإنترنت للطلاب من جميع المستويات والأعمار. تشمل خدماتنا:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                      <li>دروس فردية عبر الإنترنت</li>
                      <li>درس تجريبي مجاني</li>
                      <li>باقات حصص متنوعة</li>
                      <li>متابعة مستمرة لتقدم الطالب</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">3. التسجيل والحساب</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      للاستفادة من خدماتنا، يجب عليك إنشاء حساب وتقديم معلومات صحيحة ودقيقة. أنت مسؤول عن الحفاظ على سرية معلومات حسابك.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">4. الحجز والإلغاء</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      يمكنك حجز الدروس من خلال المنصة. في حالة الرغبة بإلغاء أو إعادة جدولة درس، يرجى إخطارنا قبل 24 ساعة على الأقل من موعد الدرس.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">5. الدفع والأسعار</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      جميع الأسعار المعروضة بالريال السعودي. يتم الدفع مقدماً عند شراء الباقات. لا يمكن استرداد المبالغ المدفوعة للحصص المستخدمة.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">6. ضمان استرجاع الرصيد</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      نلتزم بتقديم تجربة تعليمية استثنائية. لذلك نقدم ضمان استرجاع الرصيد وفقاً للشروط التالية:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li><strong className="text-foreground">الأهلية:</strong> يحق لك طلب استرجاع الرصيد المتبقي فقط إذا لم تستخدم أكثر من حصتين (2) من باقتك</li>
                      <li><strong className="text-foreground">الفترة الزمنية:</strong> يمكن تقديم طلب الاسترجاع خلال أول 30 يوماً فقط من تاريخ أول اشتراك لك</li>
                      <li><strong className="text-foreground">المبلغ المسترد:</strong> سيكون الاسترجاع جزئياً بناءً على عدد الحصص المتبقية، مع خصم رسوم معالجة إدارية</li>
                      <li><strong className="text-foreground">القرار النهائي:</strong> تحتفظ المنصة بالحق النهائي والمطلق في الموافقة أو رفض أي طلب استرجاع</li>
                      <li><strong className="text-foreground">الاشتراكات اللاحقة:</strong> بعد انتهاء الشهر الأول من اشتراكك، تصبح جميع المبيعات نهائية ولا تُسترد</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">6. سلوك المستخدم</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      يُتوقع من جميع المستخدمين الالتزام بالاحترام والأخلاق أثناء الدروس. نحتفظ بالحق في إنهاء الخدمة لأي مستخدم يخالف هذه القواعد.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">7. حقوق الملكية الفكرية</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      جميع المواد التعليمية والمحتوى المقدم عبر المنصة محمي بموجب حقوق الملكية الفكرية. لا يجوز نسخ أو توزيع أي محتوى دون إذن كتابي مسبق.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">8. تعديل الشروط</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم إخطار المستخدمين بأي تغييرات جوهرية عبر البريد الإلكتروني.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">9. التواصل</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      للاستفسارات أو الشكاوى، يمكنك التواصل معنا عبر البريد الإلكتروني أو الواتساب المذكور في الموقع.
                    </p>
                  </section>

                  <section className="pt-6 mt-6 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      باستخدامك لمنصتنا أو شرائك لأي من خدماتنا، فإنك تُقر بأنك قد قرأت وفهمت ووافقت على جميع الشروط والأحكام المذكورة أعلاه. يُعتبر استمرارك في استخدام المنصة قبولاً تاماً وغير مشروط لهذه الشروط.
                    </p>
                  </section>

                  <p className="text-sm text-muted-foreground pt-4">
                    آخر تحديث: ديسمبر 2024
                  </p>
                </TabsContent>

                <TabsContent value="en" className="space-y-6 text-left" dir="ltr">
                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Welcome to Alostath Ahmed English Learning Platform. By using our services, you agree to comply with these terms and conditions. Please read them carefully before using the platform.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">2. Services Provided</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We offer private online English lessons for students of all levels and ages. Our services include:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                      <li>One-on-one online lessons</li>
                      <li>Free trial lesson</li>
                      <li>Various class packages</li>
                      <li>Continuous progress tracking</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">3. Registration and Account</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To use our services, you must create an account and provide accurate information. You are responsible for maintaining the confidentiality of your account information.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">4. Booking and Cancellation</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You can book lessons through the platform. If you wish to cancel or reschedule a lesson, please notify us at least 24 hours before the scheduled time.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">5. Payment and Pricing</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      All prices are displayed in Saudi Riyals (SAR). Payment is required in advance when purchasing packages. Refunds are not available for used credits.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">6. Credit Refund Guarantee</h2>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      We are committed to delivering an exceptional learning experience. Therefore, we offer a credit refund guarantee under the following conditions:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li><strong className="text-foreground">Eligibility:</strong> You may request a refund of remaining credits only if you have used no more than two (2) classes from your package</li>
                      <li><strong className="text-foreground">Time Window:</strong> Refund requests may only be submitted within the first 30 days of your initial subscription</li>
                      <li><strong className="text-foreground">Refund Amount:</strong> Refunds will be partial based on remaining classes, with an administrative processing fee deducted</li>
                      <li><strong className="text-foreground">Final Decision:</strong> The platform reserves the absolute and final right to approve or deny any refund request</li>
                      <li><strong className="text-foreground">Subsequent Subscriptions:</strong> After your first month, all sales are final with no refunds</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">6. User Conduct</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      All users are expected to maintain respect and proper conduct during lessons. We reserve the right to terminate service for any user who violates these rules.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">7. Intellectual Property</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      All educational materials and content provided through the platform are protected by intellectual property rights. No content may be copied or distributed without prior written permission.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">8. Modification of Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We reserve the right to modify these terms and conditions at any time. Users will be notified of any significant changes via email.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">9. Contact Us</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      For inquiries or complaints, you can reach us via the email or WhatsApp listed on the website.
                    </p>
                  </section>

                  <section className="pt-6 mt-6 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      By using our platform or purchasing any of our services, you acknowledge that you have read, understood, and agreed to all the terms and conditions stated above. Your continued use of the platform constitutes full and unconditional acceptance of these terms.
                    </p>
                  </section>

                  <p className="text-sm text-muted-foreground pt-4">
                    Last updated: December 2024
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
