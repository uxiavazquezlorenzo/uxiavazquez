import React from 'react';
import { Award, BookOpenCheck, HeartHandshake, Sparkles, Activity, Users, Shield } from 'lucide-react';
import approachImage from '../assets/images/approach_person_not_patient_1790944960522.jpg';

export const AuthoritySection: React.FC = () => {
  return (
    <section id="diferenciacion" className="py-20 lg:py-24 bg-[#4e5b3c] text-[#f3efe8] relative overflow-hidden">
      {/* Subtle organic accents in background */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#8a9b84]/20 blur-3xl"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#fc9246]/10 blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Core Value Statement: La gran diferenciación */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8a9b84]/20 text-[#f3efe8] text-xs sm:text-sm font-sora-medium mb-4">
            <HeartHandshake className="w-4 h-4 text-[#fc9246]" />
            <span>Nuestra razón de ser</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sora-bold text-[#f3efe8] tracking-tight leading-tight mb-6 text-balance">
            No te tratamos como un paciente. <br className="hidden sm:block" />
            <span className="text-[#fc9246]">Te tratamos como una persona.</span>
          </h2>

          <p className="text-lg sm:text-xl font-sora-regular text-[#f3efe8]/90 leading-relaxed">
            Estudiamos tu caso al completo, no solo la parte física y de la enfermedad. Entendemos a la persona como un todo dentro de su contexto y buscamos la manera de que el ejercicio físico encaje en tu vida y no al revés.
          </p>
        </div>

        {/* Bloque horizontal de autoridad y métricas de confianza */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-[#3d472f]/80 border border-[#8a9b84]/30 shadow-inner mb-16">
          
          <div className="flex flex-col items-center text-center p-3">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-sora-bold text-[#fc9246] tabular-nums mb-1">
              -40%
            </span>
            <span className="text-xs sm:text-sm font-sora-bold text-[#f3efe8] mb-1">
              Fatiga oncológica
            </span>
            <span className="text-xs font-sora-regular text-[#8a9b84]">
              Reducción probada de la astenia según ensayos clínicos
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-3">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-sora-bold text-[#f3efe8] tabular-nums mb-1">
              100%
            </span>
            <span className="text-xs sm:text-sm font-sora-bold text-[#f3efe8] mb-1">
              Individualizado
            </span>
            <span className="text-xs font-sora-regular text-[#8a9b84]">
              Adaptado a tus analíticas, ciclo y energía diaria
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-3">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-sora-bold text-[#f3efe8] tabular-nums mb-1">
              CAFYD
            </span>
            <span className="text-xs sm:text-sm font-sora-bold text-[#f3efe8] mb-1">
              Colegiados y especialistas
            </span>
            <span className="text-xs font-sora-regular text-[#8a9b84]">
              Formación universitaria y posgrados en oncología
            </span>
          </div>

          <div className="flex flex-col items-center text-center p-3">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-sora-bold text-[#fc9246] tabular-nums mb-1">
              &lt;10
            </span>
            <span className="text-xs sm:text-sm font-sora-bold text-[#f3efe8] mb-1">
              Personas por grupo
            </span>
            <span className="text-xs font-sora-regular text-[#8a9b84]">
              Grupos reducidos para supervisión real y cercana
            </span>
          </div>

        </div>

        {/* Dos columnas de autoridad: Evidencia científica + Acompañamiento humano */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#8a9b84]/30 text-[#f3efe8] flex items-center justify-center shrink-0 mt-1">
                <BookOpenCheck className="w-5 h-5 text-[#fc9246]" />
              </div>
              <div>
                <h3 className="text-lg font-sora-bold text-[#f3efe8] mb-1.5">
                  Respaldado por las principales guías oncológicas
                </h3>
                <p className="text-sm font-sora-regular text-[#f3efe8]/80 leading-relaxed">
                  Instituciones como el American College of Sports Medicine (ACSM) y la Sociedad Española de Oncología Médica (SEOM) coinciden: el ejercicio dosificado mejora la tolerancia al tratamiento, preserva la masa muscular y eleva la calidad de vida.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#8a9b84]/30 text-[#f3efe8] flex items-center justify-center shrink-0 mt-1">
                <Shield className="w-5 h-5 text-[#fc9246]" />
              </div>
              <div>
                <h3 className="text-lg font-sora-bold text-[#f3efe8] mb-1.5">
                  Coordinación y respeto a los tiempos médicos
                </h3>
                <p className="text-sm font-sora-regular text-[#f3efe8]/80 leading-relaxed">
                  No interferimos con tus pautas médicas; las complementamos. Si una semana tus neutrófilos bajan o tienes náuseas, el plan se recalibra para que el ejercicio sea un aliado, nunca una carga.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#8a9b84]/30 text-[#f3efe8] flex items-center justify-center shrink-0 mt-1">
                <Users className="w-5 h-5 text-[#fc9246]" />
              </div>
              <div>
                <h3 className="text-lg font-sora-bold text-[#f3efe8] mb-1.5">
                  Espacio seguro y libre de juicios
                </h3>
                <p className="text-sm font-sora-regular text-[#f3efe8]/80 leading-relaxed">
                  Aquí no hay que demostrar nada a nadie. Celebramos cada pequeño avance, respetamos los días malos y te recordamos constantemente tu capacidad de recuperación.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border-2 border-[#8a9b84]/30 shadow-lg relative">
              <img
                src={approachImage}
                alt="Especialista en ejercicio oncológico revisando planes individualizados"
                className="w-full h-[320px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 bg-[#3d472f]/95 border-t border-[#8a9b84]/20">
                <p className="text-xs font-sora-bold uppercase tracking-wider text-[#fc9246] mb-1">
                  Enfoque holístico y personal
                </p>
                <p className="text-sm font-sora-regular text-[#f3efe8]/85 italic">
                  «El cáncer es una circunstancia por la que estás pasando, pero no define quién eres ni hasta dónde puedes llegar.»
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
