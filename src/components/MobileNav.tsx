import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '@/hooks/useHashScroll';

interface MobileNavProps {
  isOpen: boolean;
  onClose: (open?: boolean) => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (path: string) => {
    if (path.startsWith('/#')) {
      const sectionId = path.slice(2);
      if (location.pathname === '/') {
        scrollToSection(sectionId);
      } else {
        navigate('/');
        setTimeout(() => scrollToSection(sectionId), 150);
      }
    }
    onClose(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="md:hidden absolute top-16 left-0 right-0 w-full bg-card border-b border-border shadow-lg animate-fade-in"
      id="mobile-navigation"
      dir="rtl"
    >
      <div className="px-4 pt-2 pb-6 space-y-2">
        <Link 
          to="/" 
          onClick={() => handleLinkClick('/')}
          className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground arabic-text"
        >
          الرئيسية
        </Link>
        <Link 
          to="/tutor" 
          onClick={() => handleLinkClick('/tutor')}
          className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground arabic-text"
        >
          من نحن
        </Link>
        <Link 
          to="/#packages" 
          onClick={() => handleLinkClick('/#packages')}
          className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground arabic-text"
        >
          الباقات
        </Link>
        <Link 
          to="/#faq" 
          onClick={() => handleLinkClick('/#faq')}
          className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground arabic-text"
        >
          تواصل معنا
        </Link>

        <div className="pt-4 border-t border-border mt-2 space-y-3">
          <Button 
            asChild
            size="lg"
            className="w-full"
          >
            <Link to="/book-trial" onClick={() => handleLinkClick('/book-trial')} className="arabic-text">
              احجز الحصة التجريبية
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
