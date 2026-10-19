import React from 'react';
import { Sliders, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';

interface BenefitsSectionProps {
  bookingUrl: string;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ bookingUrl }) => {
  const benefits = [
    {
      number: '01',
      title: '1. Adaptado a ti',
      icon: Sliders,
      description:
        'Tu diagnóstico, tratamiento, efectos secundarios, condición física, experiencia previa, objetivos y contexto son diferentes. Por eso el entrenamiento también tiene que serlo.',
      highlight: 'Entrenamiento 100% individualizado a tu situación',
    },
    {
      number: '02',
      title: '2. Con supervisión profesional',
      icon: ShieldCheck,
      description:
        'No tienes que descubrir por tu cuenta qué hacer, cuánto hacer o cómo adaptar el ejercicio cuando las circunstancias cambian.',
      highlight: 'Seguridad clínica y técnica en cada movimiento',
    },
    {
      number: '03',
      title: '3. Con acompañamiento cercano',
      icon: HeartHandshake,
      description:
        'El proceso no termina cuando acaba una sesión. Escuchar, revisar, adaptar y resolver dudas también forma parte del trabajo.',
      highlight: 'Apoyo continuo antes, durante y después',
    },
  ];

  return (
    <section id="beneficios" className="py-20 lg:py-24 bg-[#f3efe8] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-sora-medium text-[#fc9246] tracking-wider uppercase mb-2">
            Metodología y compromiso
          </p>
          <h2 className="text-3xl sm:text-4xl font-sora-bold text-[#4e5b3c] tracking-tight text-balance">
            ¿Por qué un entrenamiento especializado?
          </h2>
          <p className="mt-4 text-base sm:text-lg font-sora-regular text-[#4e5b3c]/80 leading-relaxed">
            Hacer ejercicio durante o después de un proceso oncológico no consiste en «moverse un poco», sino en aplicar la dosis exacta y segura para tu cuerpo.
          </p>
        </div>

        {/* Grid de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white border border-[#8a9b84]/25 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar inside card: Icon + Number indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#4e5b3c]/10 text-[#4e5b3c] group-hover:bg-[#4e5b3c] group-hover:text-[#f3efe8] flex items-center justify-center transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-sora-bold text-[#8a9b84] tracking-widest">
                      {benefit.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-sora-bold text-[#4e5b3c] mb-3.5 tracking-tight">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base font-sora-regular text-[#4e5b3c]/85 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom subtle kicker */}
                <div className="mt-6 pt-5 border-t border-[#8a9b84]/15">
                  <span className="text-xs font-sora-medium text-[#4e5b3c]/70">
                    {benefit.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Debajo, un botón CTA centrado */}
        <div className="flex flex-col items-center justify-center text-center">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-xl bg-[#fc9246] hover:bg-[#e87b2e] text-white font-sora-bold text-base sm:text-lg tracking-wide shadow-md hover:shadow-lg transition-all transform active:scale-[0.98]"
          >
            <span>Quiero hablar contigo</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <p className="mt-3 text-xs sm:text-sm font-sora-regular text-[#4e5b3c]/70">
            Reserva una llamada de 20 min para conocer tu caso sin ningún compromiso.
          </p>
        </div>

      </div>
    </section>
  );
};
