import React from 'react';
import { Users, Home, Banknote, UserCheck, Sparkles } from 'lucide-react';

interface TechoPropioGuideSectionProps {
  onOpenEligibilityQuiz: () => void;
}

export const TechoPropioGuideSection: React.FC<TechoPropioGuideSectionProps> = ({ onOpenEligibilityQuiz }) => {
  const steps = [
    {
      num: 1,
      title: 'Grupo Familiar (GF)',
      desc: 'Estar conformado por un Jefe de Familia con cónyuge, conviviente, hijos o padres dependientes.',
      badgeIcon: Users,
      badgeText: 'Requisito Obligatorio',
    },
    {
      num: 2,
      title: 'Sin Propiedad Previa',
      desc: 'No ser propietario de vivienda, terreno o aires independizados a nivel nacional en Registros Públicos.',
      badgeIcon: Home,
      badgeText: 'Verificación Sunarp',
    },
    {
      num: 3,
      title: 'Tope de Ingresos',
      desc: 'Ingreso mensual familiar que no supere el límite normado para Vivienda de Interés Social (VIS).',
      badgeIcon: Banknote,
      badgeText: 'Declaración Formal',
    },
    {
      num: 4,
      title: 'Asesoría Antark',
      desc: 'Presentamos tus documentos en nuestra sala de ventas y te acompañamos hasta la entrega de llaves.',
      badgeIcon: UserCheck,
      badgeText: 'Trámite 100% Gratuito',
    },
  ];

  return (
    <section id="techo-propio" className="w-full py-20 bg-[#000f22] text-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
          <span className="text-[14px] text-[#ffdad2] font-bold uppercase tracking-wider">
            Subsidio No Reembolsable del Estado
          </span>
          <h2 className="font-['Outfit',sans-serif] text-[32px] sm:text-[40px] text-white font-bold tracking-tight leading-tight">
            4 Pasos Sencillos para Calificar al Bono Techo Propio
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#c4c6ce] font-normal leading-relaxed">
            Nosotros gestionamos tu expediente ante el Fondo MIVIVIENDA de principio a fin sin ningún costo adicional.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.badgeIcon;
            return (
              <div
                key={step.num}
                className="bg-white/5 backdrop-blur-md p-7 rounded-2xl flex flex-col justify-between gap-6 hover:bg-white/10 transition-all border border-white/10 group"
              >
                <div className="flex flex-col gap-4">
                  <span className="w-11 h-11 rounded-xl bg-[#a13e28] text-white font-['Outfit',sans-serif] text-[20px] flex items-center justify-center font-extrabold group-hover:scale-105 transition-transform shadow-xs">
                    {step.num}
                  </span>
                  <h3 className="font-['Outfit',sans-serif] text-[18px] text-white font-bold">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-[#c4c6ce] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[12px] text-[#ffdad2] font-semibold pt-2 border-t border-white/10">
                  <Icon className="w-4 h-4 text-[#ffdad2]" />
                  <span>{step.badgeText}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout action button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenEligibilityQuiz}
            className="w-full sm:w-auto bg-[#a13e28] text-white px-8 py-4 rounded-xl text-[15px] font-bold hover:bg-[#822714] active:scale-95 transition-all shadow-lg flex items-center justify-center gap-3 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-[#ffdad2]" />
            <span>Evaluar mi postulación gratis con un asesor</span>
          </button>
        </div>
      </div>
    </section>
  );
};
