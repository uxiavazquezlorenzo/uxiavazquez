import React from 'react';
import { Heart, Shield } from 'lucide-react';

interface FooterProps {
  bookingUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ bookingUrl }) => {
  return (
    <footer className="bg-[#38422b] text-[#f3efe8] py-14 border-t border-[#8a9b84]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand & Mission */}
          <div className="md:col-span-6 space-y-4">
            <div className="inline-block p-2.5 sm:p-3 bg-[#f3efe8] rounded-2xl shadow-xs">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Uxía Vázquez - Especialista en Ejercicio y Cáncer"
                className="h-10 sm:h-11 w-auto max-w-[240px] object-contain"
              />
            </div>
            <p className="text-sm font-sora-regular text-[#f3efe8]/80 max-w-md leading-relaxed">
              Acompañamiento profesional y entrenamiento adaptado a personas durante y después del tratamiento oncológico. Basado en evidencia científica y con rigor humano.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-sora-bold uppercase tracking-wider text-[#fc9246]">
              Navegación
            </p>
            <ul className="space-y-1.5 text-xs sm:text-sm font-sora-regular text-[#f3efe8]/80">
              <li><a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a></li>
              <li><a href="#diferenciacion" className="hover:text-white transition-colors">Nuestra filosofía</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Modalidades de entrenamiento</a></li>
              <li><a href="#testimonios" className="hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="#preguntas-frecuentes" className="hover:text-white transition-colors">Preguntas frecuentes</a></li>
            </ul>
          </div>

          {/* Direct CTA link */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-sora-bold uppercase tracking-wider text-[#fc9246]">
              Contacto
            </p>
            <p className="text-xs sm:text-sm font-sora-regular text-[#f3efe8]/80">
              ¿Listo para comenzar o tienes alguna duda específica?
            </p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-xl bg-[#fc9246] hover:bg-[#e87b2e] text-white font-sora-bold text-xs tracking-wide transition-colors"
            >
              Quiero hablar contigo
            </a>
          </div>

        </div>

        {/* Medical disclaimer & Legal note */}
        <div className="pt-8 border-t border-[#8a9b84]/20 space-y-3 text-[11px] sm:text-xs font-sora-regular text-[#f3efe8]/60">
          <p className="leading-relaxed">
            <strong className="font-sora-bold text-[#f3efe8]/80">Aviso informativo sobre salud:</strong> Los programas de ejercicio físico oncológico adaptado son intervenciones coadyuvantes que complementan y no sustituyen los tratamientos médicos, farmacológicos o quirúrgicos prescritos por tu equipo de oncología. Toda pauta se adapta a tus informes y analíticas clínicas con supervisión de profesionales colegiados en Ciencias de la Actividad Física y del Deporte (CAFYD).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2">
            <p>© {new Date().getFullYear()} Ejercicio Físico y Cáncer. Todos los derechos reservados.</p>
            <p className="flex items-center gap-1">
              Entrenamiento con rigor científico y cercanía humana
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};
