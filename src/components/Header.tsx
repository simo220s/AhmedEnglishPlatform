import { memo, useState, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import MobileNav from '@/components/MobileNav';
import { Menu, MessageCircle, X } from './landing/icons';
import { scrollToSection } from '@/hooks/useHashScroll';
import { trackHeaderBookTrial, trackHeaderWhatsApp, trackNavClick } from '@/lib/analytics';

const Header = memo(function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback((open?: boolean) => {
    setIsMobileMenuOpen(open !== undefined ? open : false);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, label: string) => {
    trackNavClick(label);
    if (path.startsWith('/#')) {
      e.preventDefault();
      const sectionId = path.slice(2);
      if (location.pathname === '/') {
        scrollToSection(sectionId);
      } else {
        navigate('/');
        setTimeout(() => scrollToSection(sectionId), 150);
      }
    }
  };

  const navLinks = [
    { path: '/', label: 'الرئيسية', trackLabel: 'home' },
    { path: '/tutor', label: 'من نحن', trackLabel: 'about' },
    { path: '/#packages', label: 'الباقات', trackLabel: 'packages' },
    { path: '/#contact', label: 'تواصل معنا', trackLabel: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border shadow-sm" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0"
            aria-label="الأستاذ أحمد - معلم اللغة الإنجليزية"
            onClick={() => {
              trackNavClick('logo');
              if (location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'auto' });
              }
            }}
          >
            <div className="flex flex-col">
              <h1 className="text-xl font-bold leading-tight">
                <span className="text-foreground">الأستاذ</span>{' '}
                <span className="text-primary">أحمد</span>
              </h1>
              <span className="text-xs text-muted-foreground">معلم اللغة الانجليزية</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1"
            role="navigation"
            aria-label="التنقل الرئيسي"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path, link.trackLabel)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  ${isActive(link.path) && link.path !== '/#packages' && link.path !== '/#faq'
                    ? 'bg-accent text-primary' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* WhatsApp Link */}
            <a 
              href="https://wa.me/966564084838" 
              target="_blank" 
              rel="noreferrer"
              onClick={trackHeaderWhatsApp}
              className="p-2 rounded-lg text-muted-foreground hover:text-[hsl(var(--whatsapp))] hover:bg-muted transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
            
            <Button size="sm" asChild onClick={trackHeaderBookTrial}>
              <Link to="/book-trial">احجز مجاناً</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
});

export default Header;
