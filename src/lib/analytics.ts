// Google Analytics 4 Event Tracking Utility

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type EventCategory = 
  | 'hero'
  | 'header'
  | 'packages'
  | 'cta'
  | 'footer'
  | 'floating'
  | 'booking'
  | 'confirmation'
  | 'navigation';

interface TrackEventParams {
  category: EventCategory;
  action: string;
  label?: string;
  value?: number;
}

/**
 * Track a custom event in Google Analytics 4
 */
export function trackEvent({ category, action, label, value }: TrackEventParams): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// Pre-defined event trackers for common actions

// Hero Section Events
export const trackHeroBookTrial = () => trackEvent({ 
  category: 'hero', 
  action: 'hero_book_trial_click',
  label: 'Hero CTA Button - Desktop'
});

export const trackHeroWhatsApp = () => trackEvent({ 
  category: 'hero', 
  action: 'hero_whatsapp_click',
  label: 'Hero WhatsApp Button - Desktop'
});

export const trackHeroMobileBookTrial = () => trackEvent({ 
  category: 'hero', 
  action: 'hero_mobile_book_trial_click',
  label: 'Hero CTA Button - Mobile'
});

export const trackHeroMobileWhatsApp = () => trackEvent({ 
  category: 'hero', 
  action: 'hero_mobile_whatsapp_click',
  label: 'Hero WhatsApp Button - Mobile'
});

export const trackVideoPlay = () => trackEvent({ 
  category: 'hero', 
  action: 'hero_video_play',
  label: 'YouTube Video Play'
});

// Pre-Features CTA
export const trackPreFeaturesBookTrial = () => trackEvent({ 
  category: 'cta', 
  action: 'pre_features_book_trial_click',
  label: 'Pre-Features CTA Button'
});

// Mobile CTA Section
export const trackMobileCTABookTrial = () => trackEvent({ 
  category: 'cta', 
  action: 'mobile_cta_book_trial_click',
  label: 'Mobile CTA Section - Book Trial'
});

export const trackMobileCTAWhatsApp = () => trackEvent({ 
  category: 'cta', 
  action: 'mobile_cta_whatsapp_click',
  label: 'Mobile CTA Section - WhatsApp'
});

// Header Events
export const trackHeaderBookTrial = () => trackEvent({ 
  category: 'header', 
  action: 'header_book_trial_click',
  label: 'Header Book Trial Button'
});

export const trackHeaderWhatsApp = () => trackEvent({ 
  category: 'header', 
  action: 'header_whatsapp_click',
  label: 'Header WhatsApp Icon'
});

// Navigation Events
export const trackNavClick = (page: string) => trackEvent({ 
  category: 'navigation', 
  action: `nav_${page}_click`,
  label: `Navigation - ${page}`
});

// Package Events
export const trackPackageClick = (packageId: string, packageName: string) => trackEvent({ 
  category: 'packages', 
  action: `packages_${packageId}_click`,
  label: `Package - ${packageName}`
});

export const trackPackagesHelpWhatsApp = () => trackEvent({ 
  category: 'packages', 
  action: 'packages_help_whatsapp_click',
  label: 'Packages Help WhatsApp'
});

// CTA Section Events
export const trackCTABookTrial = () => trackEvent({ 
  category: 'cta', 
  action: 'cta_book_trial_click',
  label: 'CTA Section - Book Trial'
});

export const trackCTAViewPackages = () => trackEvent({ 
  category: 'cta', 
  action: 'cta_view_packages_click',
  label: 'CTA Section - View Packages'
});

// Floating WhatsApp
export const trackFloatingWhatsApp = () => trackEvent({ 
  category: 'floating', 
  action: 'floating_whatsapp_click',
  label: 'Floating WhatsApp Button'
});

// Booking Events
export const trackBookTrialPageView = () => trackEvent({ 
  category: 'booking', 
  action: 'book_trial_page_view',
  label: 'Book Trial Page View'
});

export const trackTrialBookingCompleted = () => trackEvent({ 
  category: 'booking', 
  action: 'trial_booking_completed',
  label: 'Trial Booking Completed'
});

// Confirmation Page Events
export const trackConfirmationPageView = () => trackEvent({ 
  category: 'confirmation', 
  action: 'trial_confirmation_page_view',
  label: 'Trial Confirmation Page View'
});

export const trackConfirmationBackHome = () => trackEvent({ 
  category: 'confirmation', 
  action: 'confirmation_back_home_click',
  label: 'Confirmation - Back to Home'
});

export const trackConfirmationWhatsApp = () => trackEvent({ 
  category: 'confirmation', 
  action: 'confirmation_whatsapp_click',
  label: 'Confirmation - WhatsApp Contact'
});

// Footer Events
export const trackFooterWhatsApp = () => trackEvent({ 
  category: 'footer', 
  action: 'footer_whatsapp_click',
  label: 'Footer WhatsApp Link'
});

export const trackFooterEmail = () => trackEvent({ 
  category: 'footer', 
  action: 'footer_email_click',
  label: 'Footer Email Link'
});

export const trackFooterTerms = () => trackEvent({ 
  category: 'footer', 
  action: 'footer_terms_click',
  label: 'Footer Terms Link'
});

export const trackFooterPrivacy = () => trackEvent({ 
  category: 'footer', 
  action: 'footer_privacy_click',
  label: 'Footer Privacy Link'
});
