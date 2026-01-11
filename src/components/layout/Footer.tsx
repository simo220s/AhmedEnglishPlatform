import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { trackFooterWhatsApp, trackFooterEmail, trackFooterTerms, trackFooterPrivacy } from '@/lib/analytics';

const currentYear = new Date().getFullYear();

export const Footer = forwardRef<HTMLElement>(function Footer(_, ref) {
  return (
    <footer ref={ref} className="bg-foreground text-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-background">
                الأستاذ أحمد
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              مدرس لغة انجليزية اون لاين معتمد من جامعة أريزونا الأمريكية. دروس خصوصية للأطفال والمراهقين عن بعد.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-labelledby="footer-quick-links">
            <h3 id="footer-quick-links" className="font-semibold text-background mb-4 text-base">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-background/70 hover:text-background text-sm transition-colors">الرئيسية</Link></li>
              <li><Link to="/tutor" className="text-background/70 hover:text-background text-sm transition-colors">تعرف على المعلم</Link></li>
              <li><Link to="/#packages" className="text-background/70 hover:text-background text-sm transition-colors">الباقات والأسعار</Link></li>
              <li><Link to="/book-trial" className="text-background/70 hover:text-background text-sm transition-colors">احجز درس تجريبي</Link></li>
            </ul>
          </nav>

          {/* Support */}
          <nav aria-labelledby="footer-support">
            <h3 id="footer-support" className="font-semibold text-background mb-4 text-base">الدعم</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-background/70 hover:text-background text-sm transition-colors">الأسئلة الشائعة</Link></li>
              <li><Link to="/privacy" onClick={trackFooterPrivacy} className="text-background/70 hover:text-background text-sm transition-colors">سياسة الخصوصية</Link></li>
              <li><Link to="/terms" onClick={trackFooterTerms} className="text-background/70 hover:text-background text-sm transition-colors">الشروط والأحكام</Link></li>
            </ul>
          </nav>

          {/* Contact */}
          <div id="contact">
            <h3 className="font-semibold text-background mb-4 text-base">تواصل معنا</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/966564084838" target="_blank" rel="noopener noreferrer" onClick={trackFooterWhatsApp} className="inline-flex items-center gap-2 text-background/70 hover:text-background text-sm transition-colors">
                  <WhatsAppIcon size={16} className="flex-shrink-0" />
                  <span dir="ltr">+966 56 408 4838</span>
                </a>
              </li>
              <li>
                <a href="mailto:saudienglishclub@gmail.com" onClick={trackFooterEmail} className="inline-flex items-center gap-2 text-background/70 hover:text-background text-sm transition-colors">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>saudienglishclub@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 space-y-4">
          <p className="text-background/60 text-xs text-center leading-relaxed max-w-3xl mx-auto">
            نقدم دورات انجليزي عن بعد للاطفال والمراهقين • تعليم اللغة الانجليزية من الصفر • معلم خصوصي بالانجليزي للمرحلة المتوسطة والثانوية
          </p>
          <p className="text-background/70 text-sm text-center">
            © {currentYear} الأستاذ أحمد. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
