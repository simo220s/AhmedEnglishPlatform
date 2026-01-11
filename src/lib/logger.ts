/**
 * Simple logger utility for consistent logging across the app
 * Provides debug, info, warn, error, and log methods
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const isDevelopment = import.meta.env.DEV;

const formatMessage = (level: LogLevel, ...args: unknown[]) => {
  const timestamp = new Date().toISOString();
  return [`[${timestamp}] [${level.toUpperCase()}]`, ...args];
};

export const logger = {
  debug: (...args: unknown[]) => {
    if (isDevelopment) {
      console.debug(...formatMessage('debug', ...args));
    }
  },
  
  info: (...args: unknown[]) => {
    if (isDevelopment) {
      console.info(...formatMessage('info', ...args));
    }
  },
  
  warn: (...args: unknown[]) => {
    console.warn(...formatMessage('warn', ...args));
  },
  
  error: (...args: unknown[]) => {
    console.error(...formatMessage('error', ...args));
  },
  
  log: (...args: unknown[]) => {
    if (isDevelopment) {
      console.log(...formatMessage('info', ...args));
    }
  },
};

export default logger;
