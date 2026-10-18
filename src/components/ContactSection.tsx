import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle, ExternalLink } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/projectData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    interest: 'Quiero postular al Bono Techo Propio',
    notes: '',
    terms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.terms) return;

    setSubmitted(true);

    const message = `Hola Grupo Antark, mi nombre es ${formData.fullName}. Mi teléfono es ${formData.phone}. Estoy interesado en: ${formData.interest}. Mensaje: ${formData.notes || 'Deseo recibir asesoría para Residencial Germán Rázuri'}`;
    const url = `https://wa.me/51${COMPANY_CONTACT.phone}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp after a brief confirmation moment
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 700);
  };

  return (
    <section id="contacto" className="w-full py-20 bg-[#f7f9fb] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info Block */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-[14px] text-[#a13e28] font-bold uppercase tracking-wider">
                Sala de Ventas & Atención
              </span>
              <h2 className="font-['Outfit',sans-serif] text-[32px] sm:text-[40px] text-[#000f22] font-bold tracking-tight leading-tight">
                Estamos para Guiar tu Inversión Familiar
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#43474d] leading-relaxed">
                Visítanos en nuestra oficina principal o contáctanos de forma inmediata vía WhatsApp. Nuestros asesores
                te orientarán en cada etapa.
              </p>
            </div>

            <div className="space-y-6">
              {/* Office */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#eceef0] flex items-center justify-center shrink-0 border border-[#c4c6ce]/30">
                  <MapPin className="w-6 h-6 text-[#a13e28]" />
                </div>
                <div>
                  <span className="font-['Outfit',sans-serif] text-[16px] text-[#000f22] font-bold block">
                    Oficina Comercial
                  </span>
                  <span className="text-[14px] text-[#43474d] leading-relaxed block">
                    {COMPANY_CONTACT.address}
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#eceef0] flex items-center justify-center shrink-0 border border-[#c4c6ce]/30">
                  <Phone className="w-6 h-6 text-[#a13e28]" />
                </div>
                <div>
                  <span className="font-['Outfit',sans-serif] text-[16px] text-[#000f22] font-bold block">
                    Teléfono / WhatsApp
                  </span>
                  <a
                    href={`https://wa.me/51${COMPANY_CONTACT.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] text-[#a13e28] font-bold hover:underline inline-flex items-center gap-1.5"
                  >
                    {COMPANY_CONTACT.phoneDisplay}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#eceef0] flex items-center justify-center shrink-0 border border-[#c4c6ce]/30">
                  <Mail className="w-6 h-6 text-[#a13e28]" />
                </div>
                <div>
                  <span className="font-['Outfit',sans-serif] text-[16px] text-[#000f22] font-bold block">
                    Correo Institucional
                  </span>
                  <a
                    href={`mailto:${COMPANY_CONTACT.email}`}
                    className="text-[14px] text-[#43474d] hover:text-[#000f22] transition-colors"
                  >
                    {COMPANY_CONTACT.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#eceef0] flex items-center justify-center shrink-0 border border-[#c4c6ce]/30">
                  <Clock className="w-6 h-6 text-[#a13e28]" />
                </div>
                <div>
                  <span className="font-['Outfit',sans-serif] text-[16px] text-[#000f22] font-bold block">
                    Horario de Atención
                  </span>
                  <span className="text-[14px] text-[#43474d]">{COMPANY_CONTACT.hours}</span>
                </div>
              </div>
            </div>

            {/* Map Visual Link */}
            <div className="rounded-2xl overflow-hidden shadow-xs border border-[#eceef0] relative group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl6HBVHENKgrSgrsaUV-XvnWflrUMcYexXrDAU_5f6IYrCiG1X4AzIu08kHYop_sNjJjHqF_Xx1LNBEFGtHAVseriYvIV2Z4ZXPc-FEQB4MCQMxnH5ll7z06_tslNTL7dm_xQF0KXGsOZEDE7QWV4R_aqNQIslW1a_cpzs4Phksruhx1vBiD4bCzzPG1m0QBkQ2bPUSve4jZOkcaIQQIWC5YT0IMG7lOGU8H3ZhaByERGTc-GkwASy-w"
                alt="Mapa satelital de ubicación de Residencial Germán Rázuri en San Pedro de Lloc, Pacasmayo"
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <a
                  href="https://maps.google.com/?q=San+Pedro+de+Lloc,+La+Libertad,+Peru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[13px] font-bold hover:underline flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg"
                >
                  <MapPin className="w-4 h-4 text-[#ffdad2]" />
                  <span>Ver ubicación en Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Lead Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl shadow-[0_10px_25px_-5px_rgba(10,37,64,0.08)] border border-[#eceef0] flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h3 className="font-['Outfit',sans-serif] text-[26px] sm:text-[30px] text-[#000f22] font-bold">
                Solicita Asesoría Personalizada
              </h3>
              <p className="text-[14px] text-[#43474d]">
                Completa tus datos y un especialista de Grupo Antark se comunicará contigo a la brevedad.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fullName" className="text-[13px] text-[#191c1e] font-bold">
                  Nombres y Apellidos *
                </label>
                <input
                  id="fullName"
                  required
                  type="text"
                  placeholder="Ej. Carlos Mendoza"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="h-12 px-4 rounded-xl bg-white border border-[#c4c6ce] text-[#191c1e] focus:outline-none focus:ring-2 focus:ring-[#000f22] text-[15px]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-[13px] text-[#191c1e] font-bold">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    placeholder="Ej. 940 916 110"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 px-4 rounded-xl bg-white border border-[#c4c6ce] text-[#191c1e] focus:outline-none focus:ring-2 focus:ring-[#000f22] text-[15px]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="interest" className="text-[13px] text-[#191c1e] font-bold">
                    ¿Qué te interesa? *
                  </label>
                  <select
                    id="interest"
                    required
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="h-12 px-4 rounded-xl bg-white border border-[#c4c6ce] text-[#191c1e] focus:outline-none focus:ring-2 focus:ring-[#000f22] text-[14px]"
                  >
                    <option value="Quiero postular al Bono Techo Propio">Quiero postular al Bono Techo Propio</option>
                    <option value="Modelo Palmeras (2 Dormitorios)">Modelo Palmeras (2 Dormitorios)</option>
                    <option value="Modelo Algarrobo (3 Dormitorios)">Modelo Algarrobo (3 Dormitorios)</option>
                    <option value="Agendar visita guiada a casa piloto">Agendar visita guiada a casa piloto</option>
                    <option value="Información sobre lotes en Mz. C">Información sobre lotes en Mz. C</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="notes" className="text-[13px] text-[#191c1e] font-bold">
                  Mensaje o Consulta adicional
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="¿Tienes dudas sobre los requisitos o cuotas mensuales? Escríbenos aquí..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="p-4 rounded-xl bg-white border border-[#c4c6ce] text-[#191c1e] focus:outline-none focus:ring-2 focus:ring-[#000f22] text-[14px] resize-none"
                />
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <input
                  id="terms"
                  required
                  type="checkbox"
                  checked={formData.terms}
                  onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded border-[#c4c6ce] text-[#a13e28] focus:ring-[#a13e28]"
                />
                <label htmlFor="terms" className="text-[13px] text-[#43474d] leading-snug cursor-pointer">
                  Acepto los términos y el tratamiento de datos para la evaluación crediticia y asesoría de vivienda.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#a13e28] text-white py-4 rounded-xl text-[15px] font-bold shadow-lg hover:bg-[#822714] active:scale-95 transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
              >
                <Send className="w-5 h-5" />
                <span>Enviar Solicitud a un Asesor</span>
              </button>
            </form>

            {submitted && (
              <div className="p-4 rounded-xl bg-[#4edea3]/25 border border-[#009e6d]/40 text-[#002113] text-[14px] flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#009e6d] shrink-0" />
                <div>
                  <p className="font-bold">¡Excelente! Tu consulta fue registrada con éxito.</p>
                  <p className="text-[13px] text-[#43474d]">
                    Te hemos redirigido a nuestro canal oficial de WhatsApp para respuesta inmediata.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
