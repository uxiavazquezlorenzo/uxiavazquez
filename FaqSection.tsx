import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Puedo entrenar si estoy actualmente recibiendo quimioterapia o radioterapia?',
      answer:
        'Sí, absolutamente. De hecho, la evidencia científica más reciente recomienda no guardar reposo absoluto a menos que exista contraindicación médica expresa. El ejercicio dosificado ayuda a tolerar mejor los tratamientos, reduce la fatiga crónica y protege tu masa muscular. Siempre ajustamos cada sesión al ciclo de tu tratamiento y tus sensaciones de ese día.',
    },
    {
      question: '¿Qué pasa si un día tengo mucha fatiga o me encuentro mal?',
      answer:
        'Precisamente por eso no te tratamos como a un paciente estándar, sino como a una persona con su realidad. Si un día tu nivel de energía es bajo o tienes efectos secundarios, adaptamos la sesión a movilidad suave, respiración o ejercicios de baja intensidad, o reubicamos la sesión. Tu bienestar manda siempre.',
    },
    {
      question: '¿Necesito comprar material de gimnasio o pesas?',
      answer:
        'No necesitas material costoso ni convertir tu casa en un gimnasio. Inicialmente solemos trabajar con el propio peso corporal, una esterilla, toallas y bandas elásticas sencillas y asequibles. Si más adelante necesitas algún elemento, te asesoramos para que sea una inversión mínima y útil.',
    },
    {
      question: '¿Cómo nos coordinamos con las recomendaciones de mi oncólogo?',
      answer:
        'La seguridad clínica es nuestra máxima prioridad. En la primera llamada te pediremos tu informe y antecedentes, y si lo deseas podemos redactar un resumen de la propuesta de ejercicio para que tu oncólogo o equipo médico le dé el visto bueno. Trabajamos a favor de la medicina, nunca al margen.',
    },
    {
      question: '¿Qué ocurre en la primera llamada de 20 minutos?',
      answer:
        'Es una conversación tranquila y cercana por videollamada o teléfono. Queremos conocerte: en qué punto de tu tratamiento estás, cuáles son tus sensaciones, tus miedos y qué te gustaría recuperar. Te explicaremos con total sinceridad si podemos ayudarte y cuál de nuestros formatos encaja mejor contigo. Sin compromiso ni presión.',
    },
  ];

  return (
    <section id="preguntas-frecuentes" className="py-20 lg:py-24 bg-[#f3efe8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4e5b3c]/10 text-[#4e5b3c] text-xs font-sora-medium mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#fc9246]" />
            <span>Respuestas claras</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sora-bold text-[#4e5b3c] tracking-tight text-balance">
            Preguntas frecuentes sobre el ejercicio y el cáncer
          </h2>
          <p className="mt-3 text-base font-sora-regular text-[#4e5b3c]/80">
            Es normal tener dudas y prudencia. Aquí resolvemos las más habituales.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-[#8a9b84]/25 overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-sora-bold text-base sm:text-lg text-[#4e5b3c] hover:text-[#fc9246] transition-colors"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8a9b84] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#fc9246]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base font-sora-regular text-[#4e5b3c]/85 leading-relaxed border-t border-[#8a9b84]/15">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
