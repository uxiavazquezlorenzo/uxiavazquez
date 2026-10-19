import React from 'react';
import { Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
  bookingUrl: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, bookingUrl }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#f3efe8]/95 backdrop-blur-md border-b border-[#8a9b84]/20 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Zone: Official Logo */}
        <a 
          href="#" 
          className="group flex items-center py-2 transition-opacity hover:opacity-95"
          aria-label="Uxía Vázquez - Especialista en Ejercicio y Cáncer"
        >
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Uxía Vázquez - Especialista en Ejercicio y Cáncer"
            className="h-7 sm:h-8 md:h-9 w-auto max-w-[160px] sm:max-w-[210px] object-contain"
          />
        </a>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-sora-medium text-[#4e5b3c]">
          <a href="#beneficios" className="hover:text-[#fc9246] transition-colors">
            Beneficios
          </a>
          <a href="#diferenciacion" className="hover:text-[#fc9246] transition-colors">
            Por qué nosotros
          </a>
          <a href="#servicios" className="hover:text-[#fc9246] transition-colors">
            Servicios
          </a>
          <a href="#testimonios" className="hover:text-[#fc9246] transition-colors">
            Testimonios
          </a>
          <a href="#preguntas-frecuentes" className="hover:text-[#fc9246] transition-colors">
            Dudas
          </a>
        </nav>

        {/* CTA Zone */}
        <div className="flex items-center gap-3">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              // Also support modal option or direct calendar click
            }}
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#fc9246] hover:bg-[#e87b2e] text-white font-sora-bold text-xs sm:text-sm tracking-wide shadow-sm hover:shadow-md transition-all active:scale-[0.98] whitespace-nowrap"
          >
            <span>Quiero hablar contigo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
