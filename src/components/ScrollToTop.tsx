import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component that resets scroll position on route changes.
 * Place this component inside your Router to enable automatic scroll reset.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Reset scroll position to top on route change - use layout effect for immediate execution
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
