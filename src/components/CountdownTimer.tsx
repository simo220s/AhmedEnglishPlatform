import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
  targetTime: string;
  duration?: number;
  onStatusChange?: (status: 'upcoming' | 'active' | 'completed') => void;
}

export default function CountdownTimer({
  targetDate,
  targetTime,
  duration = 60,
  onStatusChange,
}: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 });
  const [status, setStatus] = useState<'upcoming' | 'active' | 'completed'>('upcoming');

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const [year, month, day] = targetDate.split('-').map(Number);
      const [targetHours, targetMinutes] = targetTime.split(':').map(Number);
      
      const targetDateTime = new Date(year, month - 1, day, targetHours, targetMinutes);
      const now = new Date();
      const endDateTime = new Date(targetDateTime.getTime() + duration * 60 * 1000);

      const diff = targetDateTime.getTime() - now.getTime();
      const endDiff = endDateTime.getTime() - now.getTime();

      let newStatus: 'upcoming' | 'active' | 'completed' = 'upcoming';
      if (diff <= 0 && endDiff > 0) newStatus = 'active';
      else if (endDiff <= 0) newStatus = 'completed';

      if (newStatus !== status) {
        setStatus(newStatus);
        onStatusChange?.(newStatus);
      }

      if (newStatus !== 'upcoming') return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };

      const total = Math.max(0, diff);
      return {
        days: Math.floor(total / (1000 * 60 * 60 * 24)),
        hours: Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((total % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((total % (1000 * 60)) / 1000),
        total,
      };
    };

    setTimeRemaining(calculateTimeRemaining());
    const interval = setInterval(() => setTimeRemaining(calculateTimeRemaining()), 1000);
    return () => clearInterval(interval);
  }, [targetDate, targetTime, duration, status, onStatusChange]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  if (status === 'active') {
    return (
      <div className="flex items-center gap-2 text-[hsl(var(--success))]">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--success))] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[hsl(var(--success))]"></span>
        </span>
        <span className="text-sm font-bold">الحصة جارية الآن</span>
      </div>
    );
  }

  if (status === 'completed') {
    return (
      <div className="flex items-center gap-2 text-muted-foreground">
        <span className="text-sm">✓ انتهت الحصة</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-muted-foreground">
        <span className="text-sm">تبدأ خلال:</span>
      </div>
      <div className="flex items-center gap-2" dir="ltr">
        {timeRemaining.days > 0 && (
          <div className="flex flex-col items-center min-w-[50px] px-3 py-2 rounded-lg bg-accent">
            <span className="text-2xl font-bold text-primary">{formatNumber(timeRemaining.days)}</span>
            <span className="text-xs text-muted-foreground">أيام</span>
          </div>
        )}
        {(timeRemaining.days > 0 || timeRemaining.hours > 0) && (
          <div className="flex flex-col items-center min-w-[50px] px-3 py-2 rounded-lg bg-accent">
            <span className="text-2xl font-bold text-primary">{formatNumber(timeRemaining.hours)}</span>
            <span className="text-xs text-muted-foreground">ساعات</span>
          </div>
        )}
        <div className="flex flex-col items-center min-w-[50px] px-3 py-2 rounded-lg bg-accent">
          <span className="text-2xl font-bold text-primary">{formatNumber(timeRemaining.minutes)}</span>
          <span className="text-xs text-muted-foreground">دقيقة</span>
        </div>
        {timeRemaining.days === 0 && timeRemaining.hours === 0 && (
          <div className="flex flex-col items-center min-w-[50px] px-3 py-2 rounded-lg bg-accent">
            <span className="text-2xl font-bold text-primary">{formatNumber(timeRemaining.seconds)}</span>
            <span className="text-xs text-muted-foreground">ثانية</span>
          </div>
        )}
      </div>
    </div>
  );
}
