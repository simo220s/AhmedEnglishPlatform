import { memo } from 'react';
import { Star } from './icons';

const testimonials = [
  {
    id: 1,
    name: 'Alaa',
    initial: 'A',
    date: 'مارس 18، 2025',
    rating: 5,
    comment: 'درس ممتع جدًا وشخص متفهم عرف ايش بالضبط مشكلتي وايش قصدي وباذن الله اشترك معاه لانه كسر لي حاجز الخوف🙏🏼 اعطاني مجال اعبر واجمع افكاري وماقاطعني او استعجلني🙏🏼',
  },
  {
    id: 2,
    name: 'Alanod',
    initial: 'A',
    date: 'يوليو 17، 2025',
    rating: 5,
    comment: 'شكرا أستاذ احمد، كنت جدًا متفهم لبنتي، وصبور معها، وشجعتها وعطيتها ثقة في نفسها رغم أنها مبتدئة. طريقتك مريحة وتفاعلية، وبنتي كانت سعيده. أشكرك على تعاملك الرائع',
  },
  {
    id: 3,
    name: 'hadeel',
    initial: 'H',
    date: 'أغسطس 13، 2025',
    rating: 5,
    comment: 'ماشاء لله تبارك الرحمن كان ممتاز جداً مع اخوي وجداً متفهم وطريقه شرحه وترجمة له و توصيل المعلومة ممتاز 🤍🤍',
  },
  {
    id: 4,
    name: 'huda',
    initial: 'H',
    date: 'سبتمبر 8، 2025',
    rating: 5,
    comment: 'قدم الأستاذ أحمد مجهود جبار ومميز ورائع في هذة الدورة من ناحية الشرح والقدرة على توصيل المعنى وسلاسة أسلوبه وصبره وتحفيزه المستمر وله القدره على تحديد مستواي في اللغه الانجليزيه وله جزيل الشكر والتحيه والتقدير، وماشاء الله عليه دايم يشجعني حتى لو غلطت وانصح فيه لصغير والكبير',
  },
  {
    id: 5,
    name: 'Najm',
    initial: 'N',
    date: 'سبتمبر 20، 2025',
    rating: 5,
    comment: 'الصراحه أستاذ أحمد إنسان متواضع وممتاز جداً في التعليم وصبور ويعلمك كل كبيره وكل صغيره تقيمي له 5 نجوم ولو فيه زياده أعطيته ❤️',
  },
  {
    id: 6,
    name: 'بتال',
    initial: 'ب',
    date: 'أكتوبر 8، 2025',
    rating: 5,
    comment: 'مدرس خلوق ومتعاون جدا وشرحه جداً ممتاز درس ولدي مناهج انترناشونال وتقدم مستواه شكراً استاذ احمد وبالتوفيق لك',
  },
];

const stats = [
  { value: '100%', label: 'دروس مخصصة' },
  { value: '+500', label: 'طالب ناجح' },
  { value: '5.0', label: 'متوسط التقييم' },
  { value: '24', label: 'شهر للطلاقة' },
];

export const TestimonialsSection = memo(function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-background" id="testimonials">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/20 text-success text-sm font-semibold">
            <Star className="h-4 w-4 fill-current" />
            ايش يقولون طلابنا
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            تقييمات طلاب وأولياء أمور
          </h2>
          <p className="text-foreground/70 text-lg">
            <span className="text-foreground font-bold">5.0 من 5</span> (+200 تقييم)
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-warning fill-current" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 text-sm">
                {testimonial.comment}
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {testimonial.initial}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-foreground/60">{testimonial.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-muted/50">
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
