import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/projectData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Advisor online status badge */}
      <div className="hidden sm:flex items-center bg-white text-[#000f22] px-3.5 py-1.5 rounded-full shadow-[0_10px_25px_-5px_rgba(10,37,64,0.15)] border border-[#c4c6ce]/40 animate-bounce duration-1000">
        <span className="w-2.5 h-2.5 rounded-full bg-[#a13e28] mr-2 animate-pulse"></span>
        <span className="text-[12px] font-bold">Asesores en línea</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/51${COMPANY_CONTACT.phone}?text=Hola%20Grupo%20Antark,%20deseo%20informacion%20del%20proyecto%20Residencial%20German%20Razuri`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp al 940 916 110"
        className="w-14 h-14 rounded-full bg-[#a13e28] text-white flex items-center justify-center shadow-[0_10px_25px_-5px_rgba(161,62,40,0.4)] hover:bg-[#822714] hover:scale-105 active:scale-95 transition-all group"
      >
        <MessageCircle className="w-7 h-7 group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
};
