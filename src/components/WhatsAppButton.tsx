import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export function WhatsAppButton({ 
  phoneNumber = '966564084838', 
  message = 'مرحباً، أود الاستفسار عن دروس اللغة الإنجليزية' 
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg hover:scale-110 transition-all duration-300 group"
      aria-label="تواصل معنا عبر واتساب"
    >
      <WhatsAppIcon size={28} className="text-white" />
      
      {/* Pulse ring animation */}
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring" />
      
      {/* Tooltip */}
      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-foreground text-background text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        تواصل معنا
      </span>
    </button>
  );
}
