import React from 'react';

export const StatsSection: React.FC = () => {
  return (
    <section className="w-full bg-white shadow-[0_1px_3px_rgba(10,37,64,0.05)] py-12 border-b border-[#eceef0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Metric 1 */}
        <div className="flex flex-col gap-1">
          <span className="font-['Outfit',sans-serif] text-[44px] md:text-[56px] text-[#a13e28] font-extrabold leading-none">
            +14
          </span>
          <span className="font-['Outfit',sans-serif] text-[18px] text-[#000f22] font-bold">
            Años de Trayectoria
          </span>
          <p className="text-[13px] sm:text-[14px] text-[#43474d] leading-relaxed">
            Liderando obras de desarrollo urbano en el norte del Perú.
          </p>
        </div>

        {/* Metric 2 */}
        <div className="flex flex-col gap-1">
          <span className="font-['Outfit',sans-serif] text-[44px] md:text-[56px] text-[#000f22] font-extrabold leading-none">
            7
          </span>
          <span className="font-['Outfit',sans-serif] text-[18px] text-[#000f22] font-bold">
            Empresas Asociadas
          </span>
          <p className="text-[13px] sm:text-[14px] text-[#43474d] leading-relaxed">
            Consorcio corporativo de alta solidez y solvencia operativa.
          </p>
        </div>

        {/* Metric 3 */}
        <div className="flex flex-col gap-1">
          <span className="font-['Outfit',sans-serif] text-[44px] md:text-[56px] text-[#a13e28] font-extrabold leading-none">
            700
          </span>
          <span className="font-['Outfit',sans-serif] text-[18px] text-[#000f22] font-bold">
            Viviendas Planificadas
          </span>
          <p className="text-[13px] sm:text-[14px] text-[#43474d] leading-relaxed">
            300 entregadas + 200 en construcción + 200 comercializadas.
          </p>
        </div>

        {/* Metric 4 */}
        <div className="flex flex-col gap-1">
          <span className="font-['Outfit',sans-serif] text-[44px] md:text-[56px] text-[#009e6d] font-extrabold leading-none">
            100%
          </span>
          <span className="font-['Outfit',sans-serif] text-[18px] text-[#000f22] font-bold">
            Titulado e Inscrito
          </span>
          <p className="text-[13px] sm:text-[14px] text-[#43474d] leading-relaxed">
            Redes completas de agua, desagüe, energía eléctrica y pistas.
          </p>
        </div>
      </div>
    </section>
  );
};
