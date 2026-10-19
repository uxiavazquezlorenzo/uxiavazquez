import React from 'react';
import { Users, User, CalendarCheck, Check, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  bookingUrl: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ bookingUrl }) => {
  const services = [
    {
      type: 'Grupal',
      badge: 'Comunidad y motivación',
      headline: 'Entrenamiento online en directo en grupo',
      capacity: 'Máximo 10 personas',
      description:
        'Sesiones guiadas por videollamada donde entrenas con personas que comprenden exactamente tu proceso, con corrección técnica continua.',
      features: [
        'En directo por videollamada interactiva',
        'Grupos súper reducidos (máximo 10 personas)',
        'Adaptaciones de ejercicios en vivo para cada participante',
        'Sentimiento de comunidad, apoyo mutuo y calidez',
      ],
      recommendedFor: 'Quienes buscan motivación compartida y conectar con otros.',
      popular: false,
    },
    {
      type: 'Individual',
      badge: 'Máxima atención y personalización',
      headline: 'Entrenamiento online en directo solo contigo',
      capacity: '1 a 1 exclusivo',
      description:
        'Toda la atención del especialista enfocada al 100% en ti en tiempo real durante cada segundo de la sesión de entrenamiento.',
      features: [
        'Sesiones individuales en directo por videollamada',
        'Ajuste inmediato según tu fatiga o molestia del momento',
        'Flexibilidad horaria absoluta adaptada a tus citas médicas',
        'Supervisión y corrección postura a postura',
      ],
      recommendedFor: 'Quienes necesitan acompañamiento exclusivo y ritmo propio.',
      popular: true,
    },
    {
      type: 'Programación',
      badge: 'Flexibilidad y autonomía guiada',
      headline: 'Plan 100% diseñado para ti',
      capacity: 'A tu propio ritmo',
      description:
        'Tu rutina de entrenamiento personalizada al detalle para realizar en los momentos del día que mejor te sienten, con seguimiento continuo.',
      features: [
        'Plan semanal totalmente a medida con vídeos explicativos',
        'Contacto directo por chat para resolver dudas cuando lo necesites',
        'Revisión y ajuste periódico de cargas y sensaciones',
        'Entrena cuando quieras desde casa o donde estés',
      ],
      recommendedFor: 'Quienes prefieren autogestión de horarios con supervisión experta.',
      popular: false,
    },
  ];

  return (
    <section id="servicios" className="py-20 lg:py-24 bg-[#f3efe8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-sora-medium text-[#fc9246] tracking-wider uppercase mb-2">
            Modalidades disponibles
          </p>
          <h2 className="text-3xl sm:text-4xl font-sora-bold text-[#4e5b3c] tracking-tight text-balance">
            Elige la forma de entrenar que encaje en tu vida
          </h2>
          <p className="mt-4 text-base sm:text-lg font-sora-regular text-[#4e5b3c]/80 leading-relaxed">
            En la llamada informativa analizaremos tu caso y te aconsejaremos con total honestidad qué formato se adapta mejor a tu momento clínico y personal.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 items-stretch">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className={`relative flex flex-col justify-between p-8 rounded-2xl bg-white border transition-all duration-200 ${
                  service.popular
                    ? 'border-[#fc9246] shadow-lg ring-2 ring-[#fc9246]/20'
                    : 'border-[#8a9b84]/25 shadow-sm hover:shadow-md'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#fc9246] text-white text-[11px] font-sora-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-xs">
                    Más solicitado
                  </div>
                )}

                <div>
                  {/* Category & Capacity */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-sora-bold text-[#8a9b84] uppercase tracking-wider">
                      {service.type}
                    </span>
                    <span className="text-xs font-sora-medium px-2.5 py-0.5 rounded-full bg-[#4e5b3c]/10 text-[#4e5b3c]">
                      {service.capacity}
                    </span>
                  </div>

                  <h3 className="text-xl font-sora-bold text-[#4e5b3c] mb-3 tracking-tight">
                    {service.headline}
                  </h3>

                  <p className="text-sm font-sora-regular text-[#4e5b3c]/80 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8 pt-4 border-t border-[#8a9b84]/15">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2.5 text-xs sm:text-sm font-sora-regular text-[#4e5b3c]">
                        <div className="w-4 h-4 rounded-full bg-[#8a9b84]/25 text-[#4e5b3c] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#4e5b3c]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="p-3.5 rounded-xl bg-[#f3efe8] mb-5 text-xs font-sora-medium text-[#4e5b3c]/85">
                    <strong className="font-sora-bold text-[#4e5b3c]">Ideal para:</strong> {service.recommendedFor}
                  </div>

                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-sora-bold text-sm tracking-wide transition-all ${
                      service.popular
                        ? 'bg-[#fc9246] hover:bg-[#e87b2e] text-white shadow-sm'
                        : 'bg-[#4e5b3c] hover:bg-[#3d472f] text-white'
                    }`}
                  >
                    <span>Consultar esta opción</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-sm font-sora-regular text-[#4e5b3c]/75">
            ¿No sabes cuál es la mejor opción para ti? No te preocupes: en la primera llamada gratuita te ayudamos a decidir sin compromiso.
          </p>
        </div>

      </div>
    </section>
  );
};
