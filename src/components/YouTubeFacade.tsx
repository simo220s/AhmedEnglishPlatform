import { useState, useCallback, memo } from 'react';
import { Play } from './landing/icons';
import { trackVideoPlay } from '@/lib/analytics';

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  className?: string;
  /** Set to true for above-the-fold videos (LCP optimization) */
  priority?: boolean;
}

// Memoized component to prevent unnecessary re-renders
export const YouTubeFacade = memo(function YouTubeFacade({ 
  videoId, 
  title, 
  className = '', 
  priority = false 
}: YouTubeFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = useCallback(() => {
    trackVideoPlay();
    setIsLoaded(true);
  }, []);

  // Use local WebP from public folder for priority (LCP) images
  const thumbnailUrl = priority 
    ? '/images/youtube-thumbnail.webp'
    : `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className={`w-full h-full ${className}`}
      />
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`relative w-full h-full group cursor-pointer bg-muted ${className}`}
      aria-label={`تشغيل الفيديو: ${title}`}
      type="button"
    >
      <img
        src={thumbnailUrl}
        alt={title}
        width={480}
        height={360}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className="w-full h-full object-cover"
      />
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground fill-current mr-[-2px]" />
        </div>
      </div>
    </button>
  );
});
