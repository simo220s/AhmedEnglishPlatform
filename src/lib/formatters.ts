/**
 * Formatting utilities for Arabic numerals, currency, dates, etc.
 */

// Arabic-Indic numerals mapping
const arabicNumerals: Record<string, string> = {
  '0': '٠',
  '1': '١',
  '2': '٢',
  '3': '٣',
  '4': '٤',
  '5': '٥',
  '6': '٦',
  '7': '٧',
  '8': '٨',
  '9': '٩',
};

/**
 * Convert Western numerals to Arabic-Indic numerals
 * @param value - Number or string to convert
 * @returns String with Arabic-Indic numerals
 */
export function toArabicNumerals(value: number | string): string {
  return String(value)
    .split('')
    .map((char) => arabicNumerals[char] || char)
    .join('');
}

/**
 * Format number with Arabic numerals and optional thousands separator
 * @param value - Number to format
 * @param useArabicNumerals - Whether to use Arabic-Indic numerals
 * @returns Formatted string
 */
export function formatNumber(value: number, useArabicNumerals = true): string {
  const formatted = value.toLocaleString('ar-SA');
  return useArabicNumerals ? toArabicNumerals(formatted) : formatted;
}

/**
 * Format price in Saudi Riyals
 * @param amount - Amount to format
 * @param showCurrency - Whether to show currency symbol
 * @returns Formatted price string
 */
export function formatPrice(amount: number, showCurrency = true): string {
  const formatted = formatNumber(amount);
  return showCurrency ? `${formatted} ر.س` : formatted;
}

/**
 * Format percentage
 * @param value - Percentage value (0-100)
 * @returns Formatted percentage string
 */
export function formatPercentage(value: number): string {
  return `${toArabicNumerals(value)}٪`;
}

/**
 * Format duration in minutes to hours and minutes
 * @param minutes - Duration in minutes
 * @returns Formatted duration string in Arabic
 */
export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${toArabicNumerals(minutes)} دقيقة`;
  }
  
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  
  if (remainingMinutes === 0) {
    return hours === 1 ? 'ساعة واحدة' : `${toArabicNumerals(hours)} ساعات`;
  }
  
  const hourText = hours === 1 ? 'ساعة' : `${toArabicNumerals(hours)} ساعات`;
  const minuteText = `${toArabicNumerals(remainingMinutes)} دقيقة`;
  
  return `${hourText} و ${minuteText}`;
}

/**
 * Format credits count
 * @param credits - Number of credits
 * @returns Formatted credits string
 */
export function formatCredits(credits: number): string {
  if (credits === 1) return 'رصيد واحد';
  if (credits === 2) return 'رصيدان';
  if (credits <= 10) return `${toArabicNumerals(credits)} أرصدة`;
  return `${toArabicNumerals(credits)} رصيد`;
}

/**
 * Truncate text with ellipsis
 * @param text - Text to truncate
 * @param maxLength - Maximum length
 * @returns Truncated text
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}
