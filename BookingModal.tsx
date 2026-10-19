import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, MessageCircle, ExternalLink, Send } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingUrl: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, bookingUrl }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    situation: '',
    serviceInterest: 'Cualquiera / Por determinar',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#8a9b84]/30 overflow-hidden text-[#4e5b3c]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header with brand color */}
        <div className="bg-[#4e5b3c] text-[#f3efe8] p-6 sm:p-7 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 text-[#f3efe8]/80 hover:text-white bg-black/10 hover:bg-black/20 rounded-full p-2 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-3 inline-block bg-[#f3efe8] p-2 px-3 rounded-xl shadow-xs">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Uxía Vázquez - Especialista en Ejercicio y Cáncer"
              className="h-7 sm:h-8 w-auto max-w-[190px] object-contain"
            />
          </div>

          <span className="text-xs font-sora-bold uppercase tracking-wider text-[#fc9246] block mb-1">
            Llamada informativa inicial
          </span>
          <h3 className="text-xl sm:text-2xl font-sora-bold text-[#f3efe8]">
            Tu primer contacto con nosotros
          </h3>
          <p className="text-xs sm:text-sm font-sora-regular text-[#f3efe8]/80 mt-1">
            20 minutos · Videollamada o teléfono · Totalmente gratuita y confidencial
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <div className="p-3 rounded-xl bg-[#f3efe8] border border-[#8a9b84]/20">
              <span className="w-6 h-6 rounded-full bg-[#4e5b3c] text-white flex items-center justify-center text-xs font-sora-bold mb-2">1</span>
              <p className="text-xs font-sora-bold text-[#4e5b3c]">Te escuchamos</p>
              <p className="text-[11px] font-sora-regular text-[#4e5b3c]/75 mt-0.5">Conocemos tu momento, fatiga y objetivos.</p>
            </div>

            <div className="p-3 rounded-xl bg-[#f3efe8] border border-[#8a9b84]/20">
              <span className="w-6 h-6 rounded-full bg-[#4e5b3c] text-white flex items-center justify-center text-xs font-sora-bold mb-2">2</span>
              <p className="text-xs font-sora-bold text-[#4e5b3c]">Propuesta clara</p>
              <p className="text-[11px] font-sora-regular text-[#4e5b3c]/75 mt-0.5">Te indicamos cómo adaptaremos el ejercicio.</p>
            </div>

            <div className="p-3 rounded-xl bg-[#f3efe8] border border-[#8a9b84]/20">
              <span className="w-6 h-6 rounded-full bg-[#fc9246] text-white flex items-center justify-center text-xs font-sora-bold mb-2">3</span>
              <p className="text-xs font-sora-bold text-[#4e5b3c]">Tú decides</p>
              <p className="text-[11px] font-sora-regular text-[#4e5b3c]/75 mt-0.5">Sin compromisos ni permanencias.</p>
            </div>
          </div>

          {/* Primary Action Button: Open Google Calendar */}
          <div className="pt-2">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-[#fc9246] hover:bg-[#e87b2e] text-white font-sora-bold text-base shadow-md hover:shadow-lg transition-all"
            >
              <Calendar className="w-5 h-5" />
              <span>Abrir agenda y elegir día/hora</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
            </a>
            <p className="text-center text-[11px] text-[#4e5b3c]/70 mt-2">
              Te llevará a nuestra agenda oficial en Google Calendar para reservar en 1 minuto.
            </p>
          </div>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-[#8a9b84]/30"></div>
            <span className="flex-shrink mx-4 text-xs font-sora-medium text-[#8a9b84]">o si lo prefieres</span>
            <div className="flex-grow border-t border-[#8a9b84]/30"></div>
          </div>

          {/* Fallback form if they prefer we reach out */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
              <p className="text-xs font-sora-medium text-[#4e5b3c]">
                Déjanos tus datos y nos pondremos en contacto contigo por WhatsApp o llamada:
              </p>

              <div>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#8a9b84]/30 focus:border-[#4e5b3c] focus:outline-hidden text-sm bg-[#f3efe8]/40"
                />
              </div>

              <div>
                <input
                  type="text"
                  required
                  placeholder="Teléfono (WhatsApp) o correo electrónico"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#8a9b84]/30 focus:border-[#4e5b3c] focus:outline-hidden text-sm bg-[#f3efe8]/40"
                />
              </div>

              <div>
                <textarea
                  rows={2}
                  placeholder="¿En qué fase estás o qué duda tienes? (opcional)"
                  value={formData.situation}
                  onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#8a9b84]/30 focus:border-[#4e5b3c] focus:outline-hidden text-sm bg-[#f3efe8]/40 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#4e5b3c] hover:bg-[#3d472f] text-white font-sora-bold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Solicitar que me contactéis</span>
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-2xl bg-[#8a9b84]/15 border border-[#8a9b84]/30 text-center">
              <CheckCircle2 className="w-8 h-8 text-[#4e5b3c] mx-auto mb-2" />
              <p className="text-sm font-sora-bold text-[#4e5b3c]">¡Gracias, {formData.name}!</p>
              <p className="text-xs font-sora-regular text-[#4e5b3c]/80 mt-1">
                Hemos recibido tu solicitud. Te escribiremos con total discreción y empatía a {formData.contact} muy pronto.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
