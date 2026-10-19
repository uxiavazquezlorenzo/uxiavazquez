import React from 'react';
import { ArrowRight, Calendar, CheckCircle2, ShieldCheck, HeartPulse, UserCheck } from 'lucide-react';
import heroImage from '../assets/images/hero_exercise_oncology_1790944926554.jpg';

interface HeroSectionProps {
  bookingUrl: string;
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ bookingUrl, onOpenBooking }) => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-20 overflow-hidden bg-[#f3efe8]">
      {/* Subtle organic background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 right-0 w-96 h-96 rounded-full bg-[#8a9b84]/15 blur-3xl"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-[#fc9246]/10 blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LADO IZQUIERDO: Título principal grande, subtítulo claro y CTA llamativo */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tagline / Indicator */}
            <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-sm font-sora-medium text-[#4e5b3c] tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#fc9246] animate-pulse" />
              <span>Entrenamiento oncológico online · Plazas limitadas</span>
            </div>

            {/* Título Principal Grande */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-sora-bold text-[#4e5b3c] leading-[1.12] tracking-tight mb-6 text-balance">
              Ejercicio físico <br className="hidden sm:block" />
              y cáncer
            </h1>

            {/* Subtítulo Claro */}
            <p className="text-lg sm:text-xl font-sora-medium text-[#4e5b3c]/85 leading-relaxed mb-8 max-w-xl">
              Entrenamiento adaptado durante y después del cáncer, con acompañamiento profesional y basado en evidencia científica.
            </p>

            {/* CTA Principal Llamativo */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#fc9246] hover:bg-[#e87b2e] text-white font-sora-bold text-base sm:text-lg tracking-wide shadow-md hover:shadow-lg transition-all transform active:scale-[0.98] text-center"
              >
                <span>Quiero hablar contigo</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl border border-[#4e5b3c]/25 hover:border-[#4e5b3c] text-[#4e5b3c] hover:bg-[#4e5b3c]/5 font-sora-medium text-sm sm:text-base transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#4e5b3c]" />
                <span>¿Cómo funciona la llamada?</span>
              </button>
            </div>

            {/* Microcopy de Confianza */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-sora-regular text-[#4e5b3c]/70 mt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8a9b84]" />
                Llamada de 20 min gratuita
              </span>
              <span className="text-[#8a9b84] hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8a9b84]" />
                Sin ningún tipo de compromiso
              </span>
              <span className="text-[#8a9b84] hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8a9b84]" />
                100% online y personalizado
              </span>
            </div>

          </div>

          {/* LADO DERECHO: Espacio reservado para una imagen o ilustración relevante */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative warm aura */}
              <div 
                aria-hidden="true" 
                className="absolute inset-0 bg-[#8a9b84]/20 rounded-3xl transform rotate-2 scale-[1.02]"
              />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src={heroImage}
                  alt="Persona realizando ejercicio físico adaptado durante el proceso de recuperación oncológica"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle overlay credential tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-sm border border-[#8a9b84]/25">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#4e5b3c]/10 text-[#4e5b3c] flex items-center justify-center shrink-0">
                      <HeartPulse className="w-5 h-5 text-[#4e5b3c]" />
                    </div>
                    <div>
                      <p className="text-xs font-sora-bold text-[#4e5b3c] leading-snug">
                        Entrenamiento guiado con seguridad
                      </p>
                      <p className="text-[11px] font-sora-regular text-[#4e5b3c]/70 leading-tight">
                        Especialistas en Ciencias de la Actividad Física y Oncología
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* DEBAJO: Una lista de 3 puntos destacados (beneficios rápidos) */}
        <div className="mt-14 pt-8 border-t border-[#8a9b84]/25">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Punto 1 */}
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/70 border border-[#8a9b84]/20 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-[#4e5b3c]/10 text-[#4e5b3c] flex items-center justify-center shrink-0 mt-0.5">
                <UserCheck className="w-5 h-5 text-[#4e5b3c]" />
              </div>
              <div>
                <h2 className="text-sm font-sora-bold text-[#4e5b3c] mb-1">
                  Trato humano, no de paciente
                </h2>
                <p className="text-xs sm:text-sm font-sora-regular text-[#4e5b3c]/75 leading-relaxed">
                  Te escuchamos y adaptamos el entrenamiento a tu energía, tratamiento y día a día.
                </p>
              </div>
            </div>

            {/* Punto 2 */}
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/70 border border-[#8a9b84]/20 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-[#fc9246]/15 text-[#fc9246] flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5 text-[#fc9246]" />
              </div>
              <div>
                <h2 className="text-sm font-sora-bold text-[#4e5b3c] mb-1">
                  Basado en evidencia científica
                </h2>
                <p className="text-xs sm:text-sm font-sora-regular text-[#4e5b3c]/75 leading-relaxed">
                  Protocolos validados para reducir fatiga (astenia), preservar masa muscular y ganar vitalidad.
                </p>
              </div>
            </div>

            {/* Punto 3 */}
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/70 border border-[#8a9b84]/20 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-[#8a9b84]/20 text-[#4e5b3c] flex items-center justify-center shrink-0 mt-0.5">
                <HeartPulse className="w-5 h-5 text-[#4e5b3c]" />
              </div>
              <div>
                <h2 className="text-sm font-sora-bold text-[#4e5b3c] mb-1">
                  Supervisión y contacto directo
                </h2>
                <p className="text-xs sm:text-sm font-sora-regular text-[#4e5b3c]/75 leading-relaxed">
                  Resolución de dudas constante para que jamás sientas soledad ni incertidumbre sobre qué hacer.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
