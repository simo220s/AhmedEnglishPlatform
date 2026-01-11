import { useState, useEffect, useRef, type ReactNode } from 'react';

interface LazyLoadProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
  className?: string;
}

export default function LazyLoad({
  children,
  fallback = null,
  rootMargin = '50px',
  threshold = 0.1,
  once = true,
  className = ''
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            setHasLoaded(true);
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [rootMargin, threshold, once]);

  const shouldRender = hasLoaded || isVisible;

  return (
    <div ref={elementRef} className={className}>
      {shouldRender ? children : fallback}
    </div>
  );
}

export function LazySection({ children, className = '', ...props }: Omit<LazyLoadProps, 'fallback'>) {
  return (
    <LazyLoad
      fallback={<div className={`min-h-[200px] bg-muted animate-pulse rounded-lg ${className}`} />}
      className={className}
      {...props}
    >
      {children}
    </LazyLoad>
  );
}
