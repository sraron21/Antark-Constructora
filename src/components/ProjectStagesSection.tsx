import React from 'react';
import { CheckCircle2, HardHat, Lock } from 'lucide-react';
import { PROJECT_STAGES } from '../data/projectData';

export const ProjectStagesSection: React.FC = () => {
  return (
    <section id="etapas" className="w-full py-20 bg-[#f2f4f6] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="text-[14px] text-[#a13e28] font-bold uppercase tracking-wider">
            Cronograma de Obra y Entregas
          </span>
          <h2 className="font-['Outfit',sans-serif] text-[32px] sm:text-[40px] text-[#000f22] font-bold tracking-tight leading-tight">
            Avance de Etapas: Realidad Comprobada
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#43474d] max-w-2xl leading-relaxed">
            En Grupo Antark cumplimos plazos con rigurosidad técnica y supervisión calificada bajo normas del Ministerio
            de Vivienda y Fondo MIVIVIENDA.
          </p>
        </div>

        {/* Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECT_STAGES.map((stage) => {
            const isStage2 = stage.id === 'etapa-2';
            const isStage1 = stage.id === 'etapa-1';

            return (
              <div
                key={stage.id}
                className={`bg-white p-7 sm:p-8 rounded-2xl flex flex-col justify-between gap-6 transition-all ${
                  isStage2
                    ? 'ring-2 ring-[#a13e28] shadow-[0_10px_25px_-5px_rgba(10,37,64,0.08)] relative overflow-hidden'
                    : 'shadow-[0_1px_3px_rgba(10,37,64,0.05)] border border-[#eceef0]'
                }`}
              >
                {isStage2 && (
                  <div className="absolute top-0 right-0 bg-[#a13e28] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl">
                    Fase en Venta
                  </div>
                )}

                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    {isStage1 ? (
                      <span className="bg-[#002a1a] text-[#009e6d] text-[12px] px-3 py-1 rounded-full font-bold">
                        100% Entregada
                      </span>
                    ) : isStage2 ? (
                      <span className="bg-[#ffdad2] text-[#721c09] text-[12px] px-3 py-1 rounded-full font-bold">
                        En Construcción Activa
                      </span>
                    ) : (
                      <span className="bg-[#e6e8ea] text-[#43474d] text-[12px] px-3 py-1 rounded-full font-bold">
                        100% Vendida
                      </span>
                    )}

                    {isStage1 ? (
                      <CheckCircle2 className="w-6 h-6 text-[#009e6d]" />
                    ) : isStage2 ? (
                      <HardHat className="w-6 h-6 text-[#a13e28]" />
                    ) : (
                      <Lock className="w-6 h-6 text-[#74777e]" />
                    )}
                  </div>

                  <div>
                    <h3 className="font-['Outfit',sans-serif] text-[22px] sm:text-[24px] text-[#000f22] font-bold">
                      {stage.name}
                    </h3>
                    <p className="text-[14px] text-[#43474d] font-semibold">{stage.subtitle}</p>
                  </div>

                  <p className="text-[14px] text-[#43474d] leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div>
                  {isStage2 && (
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[13px] text-[#a13e28] font-bold">Avance 65%</span>
                      <span className="text-[13px] text-[#43474d] font-semibold">{stage.deliveryYear}</span>
                    </div>
                  )}

                  <div className="w-full bg-[#eceef0] rounded-full h-2.5 mb-2.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        isStage1
                          ? 'bg-[#009e6d] w-full'
                          : isStage2
                          ? 'bg-[#a13e28] w-[65%]'
                          : 'bg-[#74777e] w-full'
                      }`}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-[#43474d] font-bold">{stage.code}</span>
                    {isStage2 && (
                      <span className="text-[12px] text-[#a13e28] font-extrabold uppercase tracking-wide">
                        Últimos cupos
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
