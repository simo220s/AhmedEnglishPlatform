import { memo } from 'react';
import { Users, Video, MessageSquare, BookOpen } from './icons';

const features = [
  {
    icon: Video,
    title: 'دروس اون لاين عن بعد',
    description: 'حصص مباشرة عبر الفيديو من بيتك - تعلم الانجليزية بدون تنقل',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Users,
    title: 'مدرس خصوصي لكل طالب',
    description: 'حصص فردية مخصصة لاحتياجات ولدك مع متابعة شخصية',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
  {
    icon: BookOpen,
    title: 'مناهج للأطفال والمراهقين',
    description: 'مناهج مصممة خصيصاً لكل فئة عمرية ومستوى - من الصفر للمتقدم',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: MessageSquare,
    title: 'تواصل مباشر مع المعلم',
    description: 'تواصل مباشر عبر المنصة والواتساب لمتابعة تقدم ولدك',
    color: 'text-warning',
    bgColor: 'bg-warning/10',
  },
];

export const FeaturesSection = memo(function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 bg-background" id="features">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            لماذا تختار دوراتنا؟
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            منصة تعليم انجليزي متكاملة للأطفال
          </h2>
          <p className="text-foreground/70 text-lg">
            دورات انجليزي اون لاين مع أفضل الأدوات ومعلم متخصص
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor} mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
