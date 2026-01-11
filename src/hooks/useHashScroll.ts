import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to handle hash-based scrolling
 * Scrolls to the element with the ID matching the URL hash
 */
export function useHashScroll() {
  const location = useLocation();

  useEffect(() => {
    // Wait for the page to render
    const timeout = setTimeout(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
      } else if (location.pathname === '/') {
        // Only scroll to top on home page navigation, instant
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.hash, location.pathname]);
}

/**
 * Scroll to an element by ID
 */
export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'auto', block: 'start' });
  }
}
