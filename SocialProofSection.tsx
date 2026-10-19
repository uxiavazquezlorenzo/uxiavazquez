import React from 'react';
import { Quote, Star } from 'lucide-react';
import carmenImg from '../assets/images/testimonial_carmen_1790944938327.jpg';
import javierImg from '../assets/images/testimonial_javier_1790944949854.jpg';

export const SocialProofSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Carmen V.',
      ageContext: '52 años · En tratamiento hormonal y post-cirugía',
      photo: carmenImg,
      alt: 'Foto de Carmen, participante del programa de ejercicio oncológico adaptado',
      quote:
        '«Durante la quimioterapia sentía que mi cuerpo ya no me pertenecía y que la fatiga lo dominaba todo. Encontrar este acompañamiento fue el punto de inflexión: no me trataron como a una enferma más en una camilla, sino como a una persona con ganas de volver a sentirse viva. He recuperado fuerza en los brazos, movilidad y, sobre todo, la confianza para salir a pasear y disfrutar con mi familia.»',
      outcome: 'Mayor energía diaria y recuperación funcional de movilidad',
    },
    {
      name: 'Javier M.',
      ageContext: '47 años · Post-tratamiento de colon',
      photo: javierImg,
      alt: 'Foto de Javier, participante de entrenamiento adaptado',
      quote:
        '«Tenía un miedo terrible a lesionarme o empeorar la inflamación si hacía deporte. Tener a un profesional colegiado revisando cada ejercicio y adaptando las cargas según mis analíticas de cada semana me dio una tranquilidad incalculable. Hoy me siento más fuerte que antes de la operación y el cansancio ya no me paraliza en el sofá.»',
      outcome: 'Pérdida del miedo al movimiento y superación de la astenia',
    },
  ];

  return (
    <section id="testimonios" className="py-20 lg:py-24 bg-[#f3efe8] border-t border-[#8a9b84]/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-sora-medium text-[#fc9246] tracking-wider uppercase mb-2">
            Prueba social
          </p>
          <h2 className="text-3xl sm:text-4xl font-sora-bold text-[#4e5b3c] tracking-tight text-balance">
            Historias reales de personas, no de expedientes médicos
          </h2>
          <p className="mt-4 text-base sm:text-lg font-sora-regular text-[#4e5b3c]/80 leading-relaxed">
            Descubre cómo el ejercicio adaptado ha transformado el día a día y el bienestar de quienes ya han dado el paso.
          </p>
        </div>

        {/* Dos testimonios con foto circular, nombre y opinión del cliente */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white border border-[#8a9b84]/25 shadow-sm hover:shadow-md transition-all duration-200"
            >
              {/* Decorative top quote icon */}
              <div className="absolute top-6 right-6 text-[#8a9b84]/30 pointer-events-none">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* 5-Star indicator for warmth */}
                <div className="flex items-center gap-1 text-[#fc9246] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#fc9246]" />
                  ))}
                  <span className="text-xs font-sora-medium text-[#4e5b3c]/70 ml-2">
                    Experiencia contrastada
                  </span>
                </div>

                {/* Testimonial Text */}
                <p className="text-base sm:text-lg font-sora-regular text-[#4e5b3c] leading-relaxed italic mb-8">
                  {item.quote}
                </p>
              </div>

              {/* Client Info with Circular Photo */}
              <div className="pt-6 border-t border-[#8a9b84]/20 flex items-center gap-4">
                <div className="relative shrink-0">
                  <img
                    src={item.photo}
                    alt={item.alt}
                    className="w-16 h-16 sm:w-18 sm:h-18 rounded-full object-cover border-2 border-[#fc9246] shadow-sm"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#4e5b3c] text-white flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-sora-bold text-[#4e5b3c] leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs font-sora-medium text-[#8a9b84] leading-snug">
                    {item.ageContext}
                  </p>
                  <p className="text-xs font-sora-regular text-[#4e5b3c]/75 mt-0.5">
                    {item.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Confidence note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm font-sora-medium text-[#4e5b3c]/70">
            Cada caso es único y los resultados individuales varían en función de la situación médica y la constancia de cada persona.
          </p>
        </div>

      </div>
    </section>
  );
};
