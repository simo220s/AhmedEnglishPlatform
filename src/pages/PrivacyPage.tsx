import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow py-12">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              سياسة الخصوصية
            </h1>
            <p className="text-muted-foreground">
              Privacy Policy
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
                      نحن في منصة الأستاذ أحمد نلتزم بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك الشخصية.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">2. المعلومات التي نجمعها</h2>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      نقوم بجمع المعلومات التالية:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>الاسم الكامل</li>
                      <li>البريد الإلكتروني</li>
                      <li>رقم الهاتف</li>
                      <li>العمر والمستوى التعليمي</li>
                      <li>سجل الدروس والتقدم الدراسي</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">3. كيف نستخدم معلوماتك</h2>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      نستخدم معلوماتك الشخصية للأغراض التالية:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>تقديم خدماتنا التعليمية</li>
                      <li>التواصل معك بشأن الدروس والمواعيد</li>
                      <li>إرسال تحديثات وعروض خاصة (بموافقتك)</li>
                      <li>تحسين جودة خدماتنا</li>
                      <li>معالجة المدفوعات</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">4. حماية البيانات</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      نتخذ إجراءات أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو الكشف أو التغيير أو الإتلاف. نستخدم تقنيات التشفير الحديثة لحماية بياناتك.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">5. مشاركة المعلومات</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة لأغراض تسويقية. قد نشارك معلوماتك فقط مع مزودي الخدمات الموثوقين الذين يساعدوننا في تشغيل المنصة.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">6. ملفات تعريف الارتباط (Cookies)</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال متصفحك.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">7. حقوقك</h2>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      لديك الحق في:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>الوصول إلى بياناتك الشخصية</li>
                      <li>تصحيح أي معلومات غير دقيقة</li>
                      <li>طلب حذف بياناتك</li>
                      <li>الاعتراض على معالجة بياناتك</li>
                      <li>سحب موافقتك في أي وقت</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">8. الاحتفاظ بالبيانات</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      نحتفظ بمعلوماتك الشخصية طالما كان حسابك نشطاً أو حسب الحاجة لتقديم خدماتنا. يمكنك طلب حذف حسابك في أي وقت.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">9. التحديثات</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات عبر البريد الإلكتروني أو من خلال إشعار على موقعنا.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">10. التواصل</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر البريد الإلكتروني أو الواتساب.
                    </p>
                  </section>

                  <p className="text-sm text-muted-foreground pt-4 border-t border-border">
                    آخر تحديث: ديسمبر 2024
                  </p>
                </TabsContent>

                <TabsContent value="en" className="space-y-6 text-left" dir="ltr">
                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      At Alostath Ahmed Platform, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      We collect the following information:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Full name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Age and educational level</li>
                      <li>Lesson history and academic progress</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      We use your personal information for the following purposes:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Providing our educational services</li>
                      <li>Communicating with you about lessons and schedules</li>
                      <li>Sending updates and special offers (with your consent)</li>
                      <li>Improving the quality of our services</li>
                      <li>Processing payments</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Protection</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We implement appropriate security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. We use modern encryption technologies to secure your data.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">5. Information Sharing</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We do not sell, rent, or share your personal information with third parties for marketing purposes. We may only share your information with trusted service providers who help us operate the platform.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">6. Cookies</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We use cookies to improve your experience on our website. You can control cookie settings through your browser.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">7. Your Rights</h2>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      You have the right to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Access your personal data</li>
                      <li>Correct any inaccurate information</li>
                      <li>Request deletion of your data</li>
                      <li>Object to the processing of your data</li>
                      <li>Withdraw your consent at any time</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">8. Data Retention</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We retain your personal information as long as your account is active or as needed to provide our services. You can request account deletion at any time.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">9. Updates</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We may update this Privacy Policy from time to time. We will notify you of any changes via email or through a notice on our website.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact Us</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have any questions about this Privacy Policy, please contact us via email or WhatsApp.
                    </p>
                  </section>

                  <p className="text-sm text-muted-foreground pt-4 border-t border-border">
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
