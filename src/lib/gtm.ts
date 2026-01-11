/**
 * Google Tag Manager Event Tracking Utility
 * 
 * This file contains all GTM event tracking functions for the Ahmed English website.
 * All 28 conversion events are organized by category.
 */

// Extend Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Base function to push events to GTM dataLayer
 */
const pushToDataLayer = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
    console.log(`[GTM Event] ${eventName}`, eventParams || '');
  }
};

// ============================================
// HOMEPAGE EVENTS - الصفحة الرئيسية
// ============================================

/**
 * Hero Section Events
 */
export const trackHeroBookTrialClick = () => {
  pushToDataLayer('hero_book_trial_click', {
    event_category: 'engagement',
    event_label: 'Hero CTA - Desktop',
  });
};

export const trackHeroWhatsAppClick = () => {
  pushToDataLayer('hero_whatsapp_click', {
    event_category: 'engagement',
    event_label: 'Hero WhatsApp - Desktop',
  });
};

export const trackHeroMobileBookTrialClick = () => {
  pushToDataLayer('hero_mobile_book_trial_click', {
    event_category: 'engagement',
    event_label: 'Hero CTA - Mobile',
  });
};

export const trackHeroMobileWhatsAppClick = () => {
  pushToDataLayer('hero_mobile_whatsapp_click', {
    event_category: 'engagement',
    event_label: 'Hero WhatsApp - Mobile',
  });
};

export const trackHeroVideoPlay = () => {
  pushToDataLayer('hero_video_play', {
    event_category: 'engagement',
    event_label: 'YouTube Video Play',
  });
};

/**
 * Pre-Features CTA
 */
export const trackPreFeaturesBookTrialClick = () => {
  pushToDataLayer('pre_features_book_trial_click', {
    event_category: 'engagement',
    event_label: 'Pre-Features CTA',
  });
};

/**
 * Mobile CTA Section
 */
export const trackMobileCTABookTrialClick = () => {
  pushToDataLayer('mobile_cta_book_trial_click', {
    event_category: 'engagement',
    event_label: 'Mobile CTA Section',
  });
};

export const trackMobileCTAWhatsAppClick = () => {
  pushToDataLayer('mobile_cta_whatsapp_click', {
    event_category: 'engagement',
    event_label: 'Mobile CTA WhatsApp',
  });
};

/**
 * Packages Section Events
 */
export const trackPackagesTrialClick = () => {
  pushToDataLayer('packages_trial_click', {
    event_category: 'conversion',
    event_label: 'Trial Package',
    package_name: 'trial',
  });
};

export const trackPackagesBasicClick = () => {
  pushToDataLayer('packages_basic_click', {
    event_category: 'conversion',
    event_label: 'Basic Package - 4 Sessions',
    package_name: 'basic',
    sessions: 4,
  });
};

export const trackPackagesStandardClick = () => {
  pushToDataLayer('packages_standard_click', {
    event_category: 'conversion',
    event_label: 'Standard Package - 8 Sessions (Most Popular)',
    package_name: 'standard',
    sessions: 8,
  });
};

export const trackPackagesIntensiveClick = () => {
  pushToDataLayer('packages_intensive_click', {
    event_category: 'conversion',
    event_label: 'Intensive Package - 12 Sessions',
    package_name: 'intensive',
    sessions: 12,
  });
};

export const trackPackagesPremiumClick = () => {
  pushToDataLayer('packages_premium_click', {
    event_category: 'conversion',
    event_label: 'Premium Package - 20 Sessions',
    package_name: 'premium',
    sessions: 20,
  });
};

export const trackPackagesHelpWhatsAppClick = () => {
  pushToDataLayer('packages_help_whatsapp_click', {
    event_category: 'engagement',
    event_label: 'Packages Help WhatsApp',
  });
};

/**
 * CTA Section (Bottom of Homepage)
 */
export const trackCTABookTrialClick = () => {
  pushToDataLayer('cta_book_trial_click', {
    event_category: 'conversion',
    event_label: 'Bottom CTA Section',
  });
};

export const trackCTAViewPackagesClick = () => {
  pushToDataLayer('cta_view_packages_click', {
    event_category: 'engagement',
    event_label: 'View Packages Button',
  });
};

// ============================================
// HEADER NAVIGATION EVENTS - الهيدر
// ============================================

export const trackHeaderWhatsAppClick = () => {
  pushToDataLayer('header_whatsapp_click', {
    event_category: 'engagement',
    event_label: 'Header WhatsApp Icon',
  });
};

export const trackHeaderBookTrialClick = () => {
  pushToDataLayer('header_book_trial_click', {
    event_category: 'conversion',
    event_label: 'Header Book Trial Button',
  });
};

export const trackNavHomeClick = () => {
  pushToDataLayer('nav_home_click', {
    event_category: 'navigation',
    event_label: 'Home Link',
  });
};

export const trackNavAboutClick = () => {
  pushToDataLayer('nav_about_click', {
    event_category: 'navigation',
    event_label: 'About Link',
  });
};

export const trackNavPackagesClick = () => {
  pushToDataLayer('nav_packages_click', {
    event_category: 'navigation',
    event_label: 'Packages Link',
  });
};

export const trackNavContactClick = () => {
  pushToDataLayer('nav_contact_click', {
    event_category: 'navigation',
    event_label: 'Contact Link',
  });
};

// ============================================
// FLOATING WHATSAPP BUTTON - زر واتساب العائم
// ============================================

export const trackFloatingWhatsAppClick = () => {
  pushToDataLayer('floating_whatsapp_click', {
    event_category: 'engagement',
    event_label: 'Floating WhatsApp Button',
  });
};

// ============================================
// BOOKING PAGE EVENTS - صفحة الحجز
// ============================================

export const trackBookTrialPageView = () => {
  pushToDataLayer('book_trial_page_view', {
    event_category: 'page_view',
    event_label: 'Book Trial Page',
  });
};

/**
 * KEY CONVERSION EVENT - Trial Booking Completed
 * This is the most important conversion event
 */
export const trackTrialBookingCompleted = (bookingData?: {
  studentName?: string;
  parentEmail?: string;
  studentAge?: number;
}) => {
  pushToDataLayer('trial_booking_completed', {
    event_category: 'conversion',
    event_label: 'Trial Booking Completed',
    value: 1,
    ...bookingData,
  });
};

// ============================================
// CONFIRMATION PAGE EVENTS - صفحة التأكيد
// ============================================

export const trackTrialConfirmationPageView = () => {
  pushToDataLayer('trial_confirmation_page_view', {
    event_category: 'page_view',
    event_label: 'Confirmation Page - Success',
  });
};

export const trackConfirmationBackHomeClick = () => {
  pushToDataLayer('confirmation_back_home_click', {
    event_category: 'navigation',
    event_label: 'Back to Home from Confirmation',
  });
};

export const trackConfirmationWhatsAppClick = () => {
  pushToDataLayer('confirmation_whatsapp_click', {
    event_category: 'engagement',
    event_label: 'WhatsApp from Confirmation Page',
  });
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Track custom events not in the predefined list
 */
export const trackCustomEvent = (eventName: string, params?: Record<string, any>) => {
  pushToDataLayer(eventName, params);
};

/**
 * Initialize GTM tracking (call this on app mount)
 */
export const initGTM = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    console.log('[GTM] Initialized');
  }
};
