import React, { useState } from 'react';
import { X, CheckCircle2, Send, BookOpen, Shield, FileText, Landmark } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/projectData';

export type LegalModalType = 'libro' | 'privacidad' | 'terminos' | 'mivivienda' | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const [complaintForm, setComplaintForm] = useState({
    name: '',
    dni: '',
    phone: '',
    email: '',
    type: 'Reclamo (disconformidad relacionada a los productos o servicios)',
    detail: '',
  });
  const [submittedComplaint, setSubmittedComplaint] = useState(false);

  if (!type) return null;

  const handleComplaintSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedComplaint(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#000f22]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl flex flex-col gap-6 relative border border-[#eceef0] my-auto animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal legal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f2f4f6] text-[#43474d] hover:text-[#000f22] hover:bg-[#eceef0] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Libro de Reclamaciones */}
        {type === 'libro' && (
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ffdad2] flex items-center justify-center text-[#a13e28]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-['Outfit',sans-serif] text-[22px] sm:text-[26px] text-[#000f22] font-bold">
                  Libro de Reclamaciones Virtual
                </h3>
                <p className="text-[13px] text-[#43474d]">
                  Conforme a lo establecido en el Código de Protección y Defensa del Consumidor - Ley N° 29571
                </p>
              </div>
            </div>

            <div className="p-3.5 bg-[#f2f4f6] rounded-xl text-[12px] text-[#43474d] border border-[#eceef0]">
              <span className="font-bold text-[#000f22] block">Razón Social: {COMPANY_CONTACT.legalName}</span>
              <span>RUC: {COMPANY_CONTACT.ruc} • San Pedro de Lloc, Pacasmayo, La Libertad</span>
            </div>

            {submittedComplaint ? (
              <div className="p-6 bg-[#4edea3]/20 border border-[#009e6d]/40 rounded-2xl flex flex-col items-center text-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-[#009e6d]" />
                <h4 className="font-['Outfit',sans-serif] text-[20px] font-bold text-[#002113]">
                  Hoja de Reclamación Registrada
                </h4>
                <p className="text-[14px] text-[#43474d] max-w-md">
                  Hemos generado tu código correlativo <strong>LR-{Date.now().toString().slice(-6)}</strong>.
                  Conforme a ley, daremos respuesta a tu correo en un plazo máximo de 15 días hábiles.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 bg-[#000f22] text-white px-6 py-2.5 rounded-xl text-[14px] font-bold"
                >
                  Entendido
                </button>
              </div>
            ) : (
              <form onSubmit={handleComplaintSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-bold text-[#191c1e]">Nombres y Apellidos *</label>
                    <input
                      required
                      type="text"
                      placeholder="Tu nombre completo"
                      value={complaintForm.name}
                      onChange={(e) => setComplaintForm({ ...complaintForm, name: e.target.value })}
                      className="h-10 px-3 rounded-lg border border-[#c4c6ce] text-[14px]"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-bold text-[#191c1e]">DNI / CE *</label>
                    <input
                      required
                      type="text"
                      placeholder="Número de documento"
                      value={complaintForm.dni}
                      onChange={(e) => setComplaintForm({ ...complaintForm, dni: e.target.value })}
                      className="h-10 px-3 rounded-lg border border-[#c4c6ce] text-[14px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-bold text-[#191c1e]">Teléfono *</label>
                    <input
                      required
                      type="tel"
                      placeholder="940 916 110"
                      value={complaintForm.phone}
                      onChange={(e) => setComplaintForm({ ...complaintForm, phone: e.target.value })}
                      className="h-10 px-3 rounded-lg border border-[#c4c6ce] text-[14px]"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[12px] font-bold text-[#191c1e]">Correo Electrónico *</label>
                    <input
                      required
                      type="email"
                      placeholder="tu@correo.com"
                      value={complaintForm.email}
                      onChange={(e) => setComplaintForm({ ...complaintForm, email: e.target.value })}
                      className="h-10 px-3 rounded-lg border border-[#c4c6ce] text-[14px]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-bold text-[#191c1e]">Tipo *</label>
                  <select
                    value={complaintForm.type}
                    onChange={(e) => setComplaintForm({ ...complaintForm, type: e.target.value })}
                    className="h-10 px-3 rounded-lg border border-[#c4c6ce] text-[13px]"
                  >
                    <option value="Reclamo (disconformidad relacionada a los productos o servicios)">
                      Reclamo (disconformidad relacionada a los productos o servicios)
                    </option>
                    <option value="Queja (malestar o descontento respecto a la atención al público)">
                      Queja (malestar o descontento respecto a la atención al público)
                    </option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[12px] font-bold text-[#191c1e]">Detalle del Reclamo o Queja *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe los hechos y tu solicitud..."
                    value={complaintForm.detail}
                    onChange={(e) => setComplaintForm({ ...complaintForm, detail: e.target.value })}
                    className="p-3 rounded-lg border border-[#c4c6ce] text-[14px] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#a13e28] text-white py-3 rounded-xl text-[14px] font-bold hover:bg-[#822714] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Registrar Hoja de Reclamación</span>
                </button>
              </form>
            )}
          </div>
        )}

        {/* Políticas de Privacidad */}
        {type === 'privacidad' && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#d2e4ff] flex items-center justify-center text-[#0a2540]">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-['Outfit',sans-serif] text-[22px] sm:text-[26px] text-[#000f22] font-bold">
                Políticas de Privacidad y Tratamiento de Datos
              </h3>
            </div>
            <div className="space-y-3 text-[14px] text-[#43474d] leading-relaxed">
              <p>
                En cumplimiento de la Ley N° 29733 (Ley de Protección de Datos Personales de la República del Perú) y su
                reglamento, <strong>Antark Constructora y Servicios Generales S.A.C.</strong> informa a los usuarios que
                los datos proporcionados a través de formularios, WhatsApp o atención presencial serán tratados de
                manera estrictamente confidencial.
              </p>
              <h4 className="font-bold text-[#000f22]">Finalidad del Tratamiento:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Evaluación y tramitación del Bono Familiar Habitacional (BFH) ante el Fondo MIVIVIENDA.</li>
                <li>Envío de cotizaciones, planos arquitectónicos y estado de disponibilidad de lotes.</li>
                <li>Coordinación de visitas guiadas a las casas piloto en San Pedro de Lloc.</li>
              </ul>
              <p>
                No compartimos su información con terceros no autorizados con fines comerciales ajenos a su postulación
                habitacional.
              </p>
            </div>
          </div>
        )}

        {/* Términos y Condiciones */}
        {type === 'terminos' && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#eceef0] flex items-center justify-center text-[#000f22]">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-['Outfit',sans-serif] text-[22px] sm:text-[26px] text-[#000f22] font-bold">
                Términos y Condiciones del Proyecto
              </h3>
            </div>
            <div className="space-y-3 text-[14px] text-[#43474d] leading-relaxed">
              <p>
                El proyecto <strong>Residencial Germán Rázuri</strong> es desarrollado y comercializado por Antark
                Constructora y Servicios Generales S.A.C., con registro de habilitación urbana y código oficial
                ministerial.
              </p>
              <h4 className="font-bold text-[#000f22]">Subsidio Techo Propio:</h4>
              <p>
                El Bono Familiar Habitacional (BFH) de hasta S/ 44,000 es otorgado por el Estado Peruano mediante el
                Fondo MIVIVIENDA sujeto al cumplimiento estricto de las directivas y disponibilidad presupuestal del
                Ministerio de Vivienda, Construcción y Saneamiento.
              </p>
              <h4 className="font-bold text-[#000f22]">Condiciones de Cuotas Referenciales:</h4>
              <p>
                Las cuotas estimadas de S/ 480/mes (Modelo Palmeras) y S/ 620/mes (Modelo Algarrobo) son referenciales y
                calculadas sobre un plazo estimado de crédito complementario a 20 años sujeto a calificación de la
                entidad financiera correspondiente.
              </p>
            </div>
          </div>
        )}

        {/* Fondo MIVIVIENDA */}
        {type === 'mivivienda' && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#4edea3]/30 flex items-center justify-center text-[#002113]">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="font-['Outfit',sans-serif] text-[22px] sm:text-[26px] text-[#000f22] font-bold">
                Información del Fondo MIVIVIENDA & Techo Propio
              </h3>
            </div>
            <div className="space-y-3 text-[14px] text-[#43474d] leading-relaxed">
              <p>
                <strong>Techo Propio</strong> es un programa del Ministerio de Vivienda, Construcción y Saneamiento
                (MVCS) dirigido a familias peruanas con ingresos mensuales regulados para que puedan acceder a una
                vivienda con servicios básicos de agua, luz y desagüe.
              </p>
              <div className="p-4 bg-[#f2f4f6] rounded-xl border border-[#eceef0]">
                <span className="font-bold text-[#000f22] block mb-1">
                  Beneficio Principal: Bono Familiar Habitacional (BFH)
                </span>
                <p className="text-[13px] text-[#43474d]">
                  Es un subsidio directo otorgado por el Estado por una sola vez que no se devuelve. Para la modalidad
                  de Adquisición de Vivienda Nueva (AVN) asciende hasta S/ 44,000.
                </p>
              </div>
              <p className="text-[13px]">
                En Grupo Antark somos Centro Autorizado para la recepción de expedientes y asesoramiento técnico
                gratuito.
              </p>
            </div>
          </div>
        )}

        <div className="pt-2 border-t border-[#eceef0] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#000f22] text-white text-[14px] font-bold hover:bg-[#0a2540] transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
