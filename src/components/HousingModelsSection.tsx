import React, { useState } from 'react';
import { CheckCircle2, LayoutTemplate, MessageCircle } from 'lucide-react';
import { HOUSING_MODELS, COMPANY_CONTACT } from '../data/projectData';
import { HousingModel } from '../types';

interface HousingModelsSectionProps {
  onViewModel: (model: HousingModel) => void;
}

export const HousingModelsSection: React.FC<HousingModelsSectionProps> = ({ onViewModel }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | '2d' | '3d'>('all');

  const filteredModels = HOUSING_MODELS.filter((model) => {
    if (activeFilter === '2d') return model.bedrooms === 2;
    if (activeFilter === '3d') return model.bedrooms === 3;
    return true;
  });

  return (
    <section id="modelos" className="w-full py-20 bg-[#f7f9fb] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-[14px] text-[#a13e28] font-bold uppercase tracking-wider">
              Diseño y Confort Familiar
            </span>
            <h2 className="font-['Outfit',sans-serif] text-[32px] sm:text-[40px] text-[#000f22] font-bold tracking-tight leading-tight">
              Modelos de Vivienda Diseñados para Crecer
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#43474d] leading-relaxed">
              Estructura sismo-resistente, ventilación cruzada natural, espacios luminosos y bases técnicas listas para
              levantar tu segundo nivel.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-2 p-1 bg-[#eceef0] rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#000f22] text-white shadow-xs'
                  : 'text-[#43474d] hover:text-[#000f22]'
              }`}
            >
              Todos los modelos
            </button>
            <button
              onClick={() => setActiveFilter('2d')}
              className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === '2d'
                  ? 'bg-[#000f22] text-white shadow-xs'
                  : 'text-[#43474d] hover:text-[#000f22]'
              }`}
            >
              2 Dormitorios
            </button>
            <button
              onClick={() => setActiveFilter('3d')}
              className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === '3d'
                  ? 'bg-[#000f22] text-white shadow-xs'
                  : 'text-[#43474d] hover:text-[#000f22]'
              }`}
            >
              3 Dormitorios
            </button>
          </div>
        </div>

        {/* Housing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredModels.map((model) => (
            <div
              key={model.id}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(10,37,64,0.06)] hover:shadow-[0_12px_30px_-6px_rgba(10,37,64,0.12)] transition-all flex flex-col border border-[#eceef0]"
            >
              {/* Card Image */}
              <div className="relative h-72 w-full overflow-hidden bg-slate-100">
                <img
                  src={model.image}
                  alt={model.altText}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-[12px] font-bold text-white shadow-xs ${
                      model.badgeType === 'secondary' ? 'bg-[#a13e28]' : 'bg-[#000f22]'
                    }`}
                  >
                    {model.badge}
                  </span>
                  <span className="bg-[#000f22]/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[12px] font-medium">
                    Lote {model.lotArea}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 sm:p-8 flex flex-col flex-1 justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-['Outfit',sans-serif] text-[24px] sm:text-[28px] text-[#000f22] font-bold">
                        {model.name}
                      </h3>
                      <p className="text-[14px] text-[#43474d] font-medium">
                        {model.bedrooms} Dormitorios • {model.builtArea} Construidos
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[12px] text-[#43474d] block font-medium">Cuota estimada desde</span>
                      <span className="font-['Outfit',sans-serif] text-[22px] sm:text-[24px] text-[#a13e28] font-extrabold">
                        {model.monthlyEstimate}
                      </span>
                    </div>
                  </div>

                  <p className="text-[14px] sm:text-[15px] text-[#43474d] leading-relaxed">
                    {model.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {model.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#009e6d] shrink-0" />
                        <span className="text-[13px] text-[#191c1e] font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions Bottom Strip */}
                <div className="flex items-center gap-3 pt-3 bg-[#f2f4f6] p-3.5 rounded-xl mt-2">
                  <a
                    href={`https://wa.me/51${COMPANY_CONTACT.phone}?text=Hola%20Grupo%20Antark,%20deseo%20cotizar%20el%20${encodeURIComponent(
                      model.name
                    )}%20de%20${model.bedrooms}%20dormitorios%20en%20Residencial%20German%20Razuri`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#a13e28] text-white py-3 px-4 rounded-lg text-[14px] text-center font-bold hover:bg-[#822714] active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Cotizar {model.name.replace('Modelo ', '')}</span>
                  </a>

                  <button
                    onClick={() => onViewModel(model)}
                    className="px-4 py-3 rounded-lg bg-white text-[#000f22] text-[14px] font-bold hover:bg-[#eceef0] active:scale-95 transition-all flex items-center gap-2 shadow-xs cursor-pointer border border-[#c4c6ce]/40"
                  >
                    <LayoutTemplate className="w-4 h-4 text-[#a13e28]" />
                    <span className="hidden sm:inline">Ver Distribución</span>
                    <span className="sm:hidden">Plano</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
