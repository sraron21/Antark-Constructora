import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, MessageCircle, RotateCcw, ArrowRight } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/projectData';

interface EligibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EligibilityModal: React.FC<EligibilityModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<{
    hasFamily: boolean | null;
    noProperty: boolean | null;
    incomeOk: boolean | null;
  }>({
    hasFamily: null,
    noProperty: null,
    incomeOk: null,
  });

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setAnswers({ hasFamily: null, noProperty: null, incomeOk: null });
  };

  const isQualified =
    answers.hasFamily === true && answers.noProperty === true && answers.incomeOk === true;

  const whatsappMessage = isQualified
    ? `Hola Grupo Antark, realicé el simulador de Bono Techo Propio y cumplo con los 3 requisitos: cuento con grupo familiar, no tengo propiedades en Sunarp y mis ingresos familiares están dentro del tope de S/ 3,715. Deseo que me ayuden a tramitar mi bono de S/ 44,000 para Residencial Germán Rázuri.`
    : `Hola Grupo Antark, realicé la simulación de calificación y deseo consultar alternativas de financiamiento o Crédito MIVIVIENDA para Residencial Germán Rázuri.`;

  return (
    <div className="fixed inset-0 z-50 bg-[#000f22]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl flex flex-col gap-6 relative border border-[#eceef0] my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f2f4f6] text-[#43474d] hover:text-[#000f22] hover:bg-[#eceef0] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col gap-1 pr-6">
          <span className="text-[13px] uppercase tracking-wider text-[#a13e28] font-bold">
            Simulador Oficial Techo Propio
          </span>
          <h3 className="font-['Outfit',sans-serif] text-[24px] sm:text-[28px] text-[#000f22] font-bold">
            ¿Calificas al Bono de S/ 44,000?
          </h3>
          <p className="text-[13px] sm:text-[14px] text-[#43474d]">
            Responde 3 preguntas rápidas para verificar tu elegibilidad ante el Fondo MIVIVIENDA.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                step >= i ? 'bg-[#a13e28]' : 'bg-[#eceef0]'
              }`}
            />
          ))}
        </div>

        {/* Question 1 */}
        {step === 1 && (
          <div className="flex flex-col gap-5 py-2">
            <div className="flex flex-col gap-2">
              <span className="text-[12px] font-bold text-[#a13e28] uppercase">Pregunta 1 de 3</span>
              <h4 className="font-['Outfit',sans-serif] text-[18px] text-[#000f22] font-bold">
                ¿Cuentas con carga familiar constituida?
              </h4>
              <p className="text-[13px] text-[#43474d] leading-relaxed">
                Debe estar conformado por un Jefe de Familia con cónyuge o conviviente, e hijos, hermanos o nietos
                menores de 25 años, o padres dependientes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => {
                  setAnswers({ ...answers, hasFamily: true });
                  setStep(2);
                }}
                className="p-4 rounded-xl border-2 border-[#eceef0] hover:border-[#a13e28] hover:bg-[#f7f9fb] text-[15px] font-bold text-[#000f22] transition-all cursor-pointer text-center"
              >
                Sí, tengo carga
              </button>
              <button
                onClick={() => {
                  setAnswers({ ...answers, hasFamily: false });
                  setStep(2);
                }}
                className="p-4 rounded-xl border-2 border-[#eceef0] hover:border-[#c4c6ce] hover:bg-[#f7f9fb] text-[15px] font-bold text-[#43474d] transition-all cursor-pointer text-center"
              >
                No, soy soltero sin carga
              </button>
            </div>
          </div>
        )}

        {/* Question 2 */}
        {step === 2 && (
          <div className="flex flex-col gap-5 py-2">
            <div className="flex flex-col gap-2">
              <span className="text-[12px] font-bold text-[#a13e28] uppercase">Pregunta 2 de 3</span>
              <h4 className="font-['Outfit',sans-serif] text-[18px] text-[#000f22] font-bold">
                ¿Tú o tu cónyuge tienen casa, terreno o departamento propio?
              </h4>
              <p className="text-[13px] text-[#43474d] leading-relaxed">
                El titular y su pareja no deben tener ninguna propiedad inmueble inscrita en Registros Públicos
                (Sunarp) a nivel nacional.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => {
                  setAnswers({ ...answers, noProperty: true });
                  setStep(3);
                }}
                className="p-4 rounded-xl border-2 border-[#eceef0] hover:border-[#a13e28] hover:bg-[#f7f9fb] text-[15px] font-bold text-[#000f22] transition-all cursor-pointer text-center"
              >
                No tenemos propiedad
              </button>
              <button
                onClick={() => {
                  setAnswers({ ...answers, noProperty: false });
                  setStep(3);
                }}
                className="p-4 rounded-xl border-2 border-[#eceef0] hover:border-[#c4c6ce] hover:bg-[#f7f9fb] text-[15px] font-bold text-[#43474d] transition-all cursor-pointer text-center"
              >
                Sí, tenemos propiedad inscrita
              </button>
            </div>
          </div>
        )}

        {/* Question 3 */}
        {step === 3 && (
          <div className="flex flex-col gap-5 py-2">
            <div className="flex flex-col gap-2">
              <span className="text-[12px] font-bold text-[#a13e28] uppercase">Pregunta 3 de 3</span>
              <h4 className="font-['Outfit',sans-serif] text-[18px] text-[#000f22] font-bold">
                ¿El ingreso mensual total de tu hogar es menor a S/ 3,715?
              </h4>
              <p className="text-[13px] text-[#43474d] leading-relaxed">
                El programa Techo Propio establece un tope de ingresos mensuales netos para familias postulantes a la
                modalidad de Adquisición de Vivienda Nueva (AVN).
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => {
                  setAnswers({ ...answers, incomeOk: true });
                  setStep(4);
                }}
                className="p-4 rounded-xl border-2 border-[#eceef0] hover:border-[#a13e28] hover:bg-[#f7f9fb] text-[15px] font-bold text-[#000f22] transition-all cursor-pointer text-center"
              >
                Sí, menor a S/ 3,715
              </button>
              <button
                onClick={() => {
                  setAnswers({ ...answers, incomeOk: false });
                  setStep(4);
                }}
                className="p-4 rounded-xl border-2 border-[#eceef0] hover:border-[#c4c6ce] hover:bg-[#f7f9fb] text-[15px] font-bold text-[#43474d] transition-all cursor-pointer text-center"
              >
                No, es mayor a ese monto
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Final Result */}
        {step === 4 && (
          <div className="flex flex-col gap-5 py-2">
            {isQualified ? (
              <div className="flex flex-col gap-4">
                <div className="p-4 rounded-2xl bg-[#4edea3]/20 border border-[#009e6d]/40 flex items-start gap-3">
                  <CheckCircle2 className="w-7 h-7 text-[#009e6d] shrink-0" />
                  <div>
                    <span className="font-['Outfit',sans-serif] text-[18px] text-[#002113] font-bold block">
                      ¡Felicidades! Calificas para el Bono Techo Propio
                    </span>
                    <span className="text-[13px] text-[#43474d] block mt-0.5">
                      Cumples con todos los criterios para acceder al subsidio no reembolsable del Estado de hasta{' '}
                      <strong className="text-[#a13e28]">S/ 44,000</strong>.
                    </span>
                  </div>
                </div>

                <div className="space-y-2 bg-[#f2f4f6] p-4 rounded-xl border border-[#eceef0] text-[13px]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#43474d]">Bono no reembolsable del Estado:</span>
                    <span className="font-bold text-[#009e6d]">+ S/ 44,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#43474d]">Aporte inicial mínimo requerido:</span>
                    <span className="font-bold text-[#000f22]">Desde 3% a 5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#43474d]">Gestión de expediente Antark:</span>
                    <span className="font-bold text-[#a13e28]">100% Gratuito</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="p-4 rounded-2xl bg-[#ffdad2]/30 border border-[#a13e28]/30 flex items-start gap-3">
                  <AlertCircle className="w-7 h-7 text-[#a13e28] shrink-0" />
                  <div>
                    <span className="font-['Outfit',sans-serif] text-[18px] text-[#721c09] font-bold block">
                      Alternativas Disponibles para ti
                    </span>
                    <span className="text-[13px] text-[#43474d] block mt-0.5">
                      Uno de los requisitos de Techo Propio no coincide con tu perfil actual, pero aún puedes acceder a
                      nuestras viviendas con el <strong>Crédito MIVIVIENDA Tradicional</strong> con Bono del Buen
                      Pagador.
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-[#f2f4f6] rounded-xl text-[13px] text-[#43474d]">
                  Nuestros asesores en San Pedro de Lloc evaluarán tu caso de forma personalizada para encontrar la
                  opción que mejor se adapte a tu presupuesto.
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/51${COMPANY_CONTACT.phone}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#a13e28] text-white py-3.5 px-4 rounded-xl text-[14px] font-bold text-center hover:bg-[#822714] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Hablar con un Asesor Antark</span>
              </a>

              <button
                onClick={handleReset}
                className="px-4 py-3.5 rounded-xl bg-[#eceef0] text-[#191c1e] text-[14px] font-bold hover:bg-[#e6e8ea] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reiniciar</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
