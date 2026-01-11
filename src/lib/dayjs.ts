/**
 * Day.js configuration with Arabic locale and required plugins
 */

import dayjs from 'dayjs';
import 'dayjs/locale/ar-sa';
import relativeTime from 'dayjs/plugin/relativeTime';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isBetween from 'dayjs/plugin/isBetween';
import duration from 'dayjs/plugin/duration';

// Extend dayjs with plugins
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);
dayjs.extend(isBetween);
dayjs.extend(duration);

// Set default locale to Arabic (Saudi Arabia)
dayjs.locale('ar-sa');

export default dayjs;

/**
 * Format date in Arabic
 * @param date - Date to format
 * @param format - Optional format string (default: 'DD MMMM YYYY')
 * @returns Formatted date string in Arabic
 */
export function formatDate(date: Date | string, format = 'DD MMMM YYYY'): string {
  return dayjs(date).format(format);
}

/**
 * Format time in Arabic
 * @param date - Date/time to format
 * @param format - Optional format string (default: 'hh:mm A')
 * @returns Formatted time string
 */
export function formatTime(date: Date | string, format = 'hh:mm A'): string {
  return dayjs(date).format(format);
}

/**
 * Format date and time together
 * @param date - Date/time to format
 * @returns Formatted date and time string
 */
export function formatDateTime(date: Date | string): string {
  return dayjs(date).format('DD MMMM YYYY - hh:mm A');
}

/**
 * Get relative time string (e.g., "منذ ٥ دقائق")
 * @param date - Date to compare
 * @returns Relative time string in Arabic
 */
export function getRelativeTime(date: Date | string): string {
  return dayjs(date).fromNow();
}

/**
 * Get Arabic day name
 * @param date - Date to get day name from
 * @returns Arabic day name
 */
export function getDayName(date: Date | string): string {
  return dayjs(date).format('dddd');
}

/**
 * Get Arabic month name
 * @param date - Date to get month name from
 * @returns Arabic month name
 */
export function getMonthName(date: Date | string): string {
  return dayjs(date).format('MMMM');
}

/**
 * Check if a date is today
 * @param date - Date to check
 * @returns True if date is today
 */
export function isToday(date: Date | string): boolean {
  return dayjs(date).isSame(dayjs(), 'day');
}

/**
 * Check if a date is in the past
 * @param date - Date to check
 * @returns True if date is in the past
 */
export function isPast(date: Date | string): boolean {
  return dayjs(date).isBefore(dayjs());
}

/**
 * Check if a date is in the future
 * @param date - Date to check
 * @returns True if date is in the future
 */
export function isFuture(date: Date | string): boolean {
  return dayjs(date).isAfter(dayjs());
}
