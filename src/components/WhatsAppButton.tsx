import React, { useState, useEffect } from "react";
import { MessageSquare, X, MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [showBubble, setShowBubble] = useState<boolean>(false);
  const [bubbleDismissed, setBubbleDismissed] = useState<boolean>(false);

  useEffect(() => {
    // Show the friendly popover bubble after 3 seconds of load to engage the user
    const timer = setTimeout(() => {
      if (!bubbleDismissed) {
        setShowBubble(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [bubbleDismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowBubble(false);
    setBubbleDismissed(true);
  };

  const whatsAppPhone = "972524456789";
  const preFilledText = "שלום עידן, הגעתי דרך דף הנחיתה ואשמח לקבל פרטים נוספים והצעת מחיר עבור שיפוץ הבית שלי.";
  const clickUrl = `https://wa.me/${whatsAppPhone}?text=${encodeURIComponent(preFilledText)}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3 select-none" style={{ direction: "rtl" }}>
      
      {/* Friendly popover chat message bubble */}
      {showBubble && (
        <div className="bg-white text-gray-900 p-4 rounded-2xl shadow-2xl border border-gray-100 max-w-[260px] relative animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Close button inside popover widget */}
          <button
            onClick={handleDismiss}
            className="absolute top-2.5 right-2 text-gray-400 hover:text-gray-600 cursor-pointer"
            aria-label="סגור הודעה"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="text-right pr-1">
            <span className="block text-xs font-black text-emerald-600 uppercase tracking-wider">
              זמין כעת אונליין 🟢
            </span>
            <span className="block text-sm font-bold text-gray-950 mt-1">
              שלום! כאן עידן שיפוצים 🔨
            </span>
            <span className="block text-xs text-gray-650 text-gray-600 mt-1 leading-relaxed font-light">
              איזה כיף שהגעתם. רוצים לקבל הערכת מחיר מדויקת או לשאול שאלה מהירה? שלחו לי הודעה ישירה!
            </span>
            
            <a
              href={clickUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setShowBubble(false);
                setBubbleDismissed(true);
              }}
              className="mt-3 inline-flex items-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors shadow-sm"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>דברו איתי בוואטסאפ</span>
            </a>
          </div>

          {/* Micro arrow on bottom bubble aspect */}
          <div className="absolute bottom-[-6px] left-6 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-100 pointer-events-none" />

        </div>
      )}

      {/* Primary pulsing WhatsApp Circle Button */}
      <a
        href={clickUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          setShowBubble(false);
          setBubbleDismissed(true);
        }}
        className="relative bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 sm:p-4.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-115 active:scale-95 group flex items-center justify-center border-2 border-white"
        aria-label="פנו אלינו בוואטסאפ"
        id="floating-whatsapp-trigger"
      >
        
        {/* Animated outer ring */}
        <span className="absolute inset-0 bg-[#25D366] rounded-full scale-100 opacity-60 animate-ping group-hover:hidden" />
        
        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8 shrink-0 relative z-10" />

      </a>

    </div>
  );
}
