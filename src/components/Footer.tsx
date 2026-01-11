import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand Section */}
          <div>
            <div className="flex items-center space-x-3 space-x-reverse mb-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-md">
                <span className="text-primary-foreground font-bold text-xl arabic-text" aria-hidden="true">أ</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold arabic-text">
                  الأستاذ أحمد
                </span>
                <span className="text-xs text-muted-foreground arabic-text">
                  معلم اللغة الإنجليزية
                </span>
              </div>
            </div>
            <p className="text-muted-foreground arabic-text leading-relaxed text-sm">
              معلم لغة إنجليزية معتمد من جامعة أريزونا الأمريكية بشهادة TESOL. خبرة أكثر من 8 سنوات في تعليم الأطفال والمراهقين السعوديين من عمر 10-18 سنة.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 arabic-text">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-muted-foreground hover:text-background transition-colors text-sm arabic-text"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link 
                  to="/tutor" 
                  className="text-muted-foreground hover:text-background transition-colors text-sm arabic-text"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link 
                  to="/#packages" 
                  className="text-muted-foreground hover:text-background transition-colors text-sm arabic-text"
                >
                  الباقات
                </Link>
              </li>
              <li>
                <Link 
                  to="/#faq" 
                  className="text-muted-foreground hover:text-background transition-colors text-sm arabic-text"
                >
                  تواصل معنا
                </Link>
              </li>
              <li>
                <Link 
                  to="/signup" 
                  className="text-muted-foreground hover:text-background transition-colors text-sm arabic-text"
                >
                  التسجيل
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 arabic-text">تواصل معنا</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://wa.me/966564084838" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 space-x-reverse text-muted-foreground hover:text-background transition-colors text-sm"
                  aria-label="تواصل عبر واتساب"
                >
                  <WhatsAppIcon size={20} className="flex-shrink-0" />
                  <span className="arabic-text">واتساب</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:saudienglishclub@gmail.com" 
                  className="flex items-center space-x-3 space-x-reverse text-muted-foreground hover:text-background transition-colors text-sm"
                  aria-label="البريد الإلكتروني"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="arabic-text">saudienglishclub@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-muted mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm arabic-text">
            © {currentYear} الأستاذ أحمد. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
