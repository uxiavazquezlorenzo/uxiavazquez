import React from 'react';
import { ArrowRight, Calendar, ShieldCheck, Heart, Clock } from 'lucide-react';

interface LastCallSectionProps {
  bookingUrl: string;
  onOpenBooking: () => void;
}

export const LastCallSection: React.FC<LastCallSectionProps> = ({ bookingUrl, onOpenBooking }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#4e5b3c] text-[#f3efe8] relative overflow-hidden">
      {/* Decorative background glows */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-[#8a9b84]/20 blur-3xl rounded-full"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 bg-[#fc9246]/10 blur-3xl rounded-full"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        {/* Subtle upper badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8a9b84]/25 text-[#f3efe8] text-xs sm:text-sm font-sora-medium mb-6">
          <Heart className="w-3.5 h-3.5 text-[#fc9246]" />
          <span>Primer paso hacia tu recuperación</span>
        </div>

        {/* Título que refuerce la oferta */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sora-bold text-[#f3efe8] tracking-tight leading-tight mb-6 text-balance">
          Da hoy el primer paso para volver a sentirte fuerte en tu propio cuerpo
        </h2>

        {/* Subtítulo / Descripción persuasiva */}
        <p className="text-base sm:text-xl font-sora-regular text-[#f3efe8]/90 max-w-2xl mx-auto leading-relaxed mb-10">
          El ejercicio adaptado no es un extra: es una herramienta terapéutica indispensable durante y después del cáncer. Reserva una llamada de 20 minutos con nosotros y hablemos de cómo ayudarte.
        </p>

        {/* Botón CTA Final */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-10 py-4 sm:py-5 rounded-2xl bg-[#fc9246] hover:bg-[#e87b2e] text-white font-sora-bold text-lg sm:text-xl tracking-wide shadow-xl hover:shadow-2xl transition-all transform active:scale-[0.98] w-full sm:w-auto"
          >
            <span>Quiero hablar contigo</span>
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </a>

          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-[#f3efe8]/30 hover:border-[#f3efe8] hover:bg-[#f3efe8]/10 text-[#f3efe8] font-sora-medium text-sm sm:text-base transition-colors w-full sm:w-auto"
          >
            <Calendar className="w-4 h-4 text-[#fc9246]" />
            <span>Detalles de la sesión</span>
          </button>
        </div>

        {/* Micro-garantías */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm font-sora-regular text-[#f3efe8]/75">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#fc9246]" />
            20 minutos por videollamada o teléfono
          </span>
          <span className="text-[#8a9b84] hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#fc9246]" />
            100% Gratuito y sin ningún compromiso
          </span>
          <span className="text-[#8a9b84] hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-[#fc9246]" />
            Respeto absoluto a tu ritmo
          </span>
        </div>

      </div>
    </section>
  );
};
