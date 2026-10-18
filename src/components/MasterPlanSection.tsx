import React, { useState } from 'react';
import { Car, Bike, Trees, MessageCircle, CheckCircle2, Info } from 'lucide-react';
import { LOT_DATA, COMPANY_CONTACT } from '../data/projectData';
import { LotItem } from '../types';

export const MasterPlanSection: React.FC = () => {
  // Default selected lot is Mz. C - Lote 03 as shown in mockup
  const [selectedLot, setSelectedLot] = useState<LotItem>(
    LOT_DATA.find((l) => l.id === 'mzc-03') || LOT_DATA[0]
  );
  const [filterBlock, setFilterBlock] = useState<string>('all');

  const lotsMzA = LOT_DATA.filter((l) => l.block === 'Mz. A');
  const lotsMzB = LOT_DATA.filter((l) => l.block === 'Mz. B');
  const lotsMzC = LOT_DATA.filter((l) => l.block === 'Mz. C');
  const lotsMzD = LOT_DATA.filter((l) => l.block === 'Mz. D');

  const getStatusBadge = (status: LotItem['status']) => {
    switch (status) {
      case 'disponible':
        return {
          label: 'Disponible',
          class: 'bg-[#a13e28] text-white',
          btnText: 'Solicitar Disponibilidad Inmediata',
          canReserve: true,
        };
      case 'entregado':
        return {
          label: 'Entregado (Etapa I)',
          class: 'bg-[#4edea3]/30 text-[#002113] border border-[#009e6d]/40',
          btnText: 'Verificar Próximas Entregas',
          canReserve: false,
        };
      case 'reservado':
        return {
          label: 'Reservado',
          class: 'bg-[#c4c6ce] text-[#191c1e]',
          btnText: 'Anotarse en Lista de Espera',
          canReserve: false,
        };
    }
  };

  const statusInfo = getStatusBadge(selectedLot.status);

  return (
    <section id="plano" className="w-full py-20 bg-[#f7f9fb] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-[14px] text-[#a13e28] font-bold uppercase tracking-wider">
              Master Plan del Proyecto
            </span>
            <h2 className="font-['Outfit',sans-serif] text-[32px] sm:text-[40px] text-[#000f22] font-bold tracking-tight leading-tight">
              Explora la Distribución de Manzanas y Lotes
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#43474d] leading-relaxed">
              Selecciona cualquier lote en el plano esquemático para conocer su estado de disponibilidad, dimensiones y
              solicitar cotización inmediata.
            </p>
          </div>

          {/* Legend */}
          <div className="flex items-center flex-wrap gap-4 text-[13px] font-bold text-[#191c1e] bg-white p-3 px-4 rounded-xl shadow-xs border border-[#eceef0]">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded bg-[#4edea3]"></span>
              <span>Entregado</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded bg-[#a13e28]"></span>
              <span>Disponible</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded bg-[#c4c6ce]"></span>
              <span>Reservado</span>
            </div>
          </div>
        </div>

        {/* Masterplan Interactive Grid + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Map Visual */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-7 rounded-2xl shadow-[0_1px_3px_rgba(10,37,64,0.06)] border border-[#eceef0] overflow-x-auto">
            <div className="min-w-[580px] flex flex-col gap-4">
              {/* Avenue Campo Ferial Top */}
              <div className="bg-[#eceef0] text-[#43474d] text-center py-2.5 px-4 rounded-xl text-[12px] tracking-wider uppercase font-bold flex items-center justify-center gap-2 shadow-xs border border-[#c4c6ce]/30">
                <Car className="w-4 h-4 text-[#000f22]" />
                <span>Avenida Campo Ferial (Acceso Principal - 20 Metros)</span>
              </div>

              {/* Block Matrix */}
              <div className="grid grid-cols-5 gap-3.5 p-3.5 bg-[#f2f4f6] rounded-xl border border-[#eceef0]">
                {/* Manzana A */}
                <div className="flex flex-col gap-2">
                  <span className="text-[12px] text-center font-bold text-[#000f22] uppercase tracking-wide">
                    Mz. A
                  </span>
                  <div className="flex flex-col gap-2">
                    {lotsMzA.map((lot) => {
                      const isSelected = selectedLot.id === lot.id;
                      return (
                        <button
                          key={lot.id}
                          onClick={() => setSelectedLot(lot)}
                          className={`p-2.5 rounded-lg text-[13px] font-semibold text-center transition-all cursor-pointer ${
                            isSelected
                              ? 'ring-2 ring-[#000f22] scale-105 shadow-md font-bold'
                              : 'hover:opacity-85'
                          } bg-[#4edea3]/40 text-[#002113] border border-[#009e6d]/30`}
                        >
                          {lot.number}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Manzana B */}
                <div className="flex flex-col gap-2">
                  <span className="text-[12px] text-center font-bold text-[#000f22] uppercase tracking-wide">
                    Mz. B
                  </span>
                  <div className="flex flex-col gap-2">
                    {lotsMzB.map((lot) => {
                      const isSelected = selectedLot.id === lot.id;
                      return (
                        <button
                          key={lot.id}
                          onClick={() => setSelectedLot(lot)}
                          className={`p-2.5 rounded-lg text-[13px] font-semibold text-center transition-all cursor-pointer ${
                            isSelected
                              ? 'ring-2 ring-[#000f22] scale-105 shadow-md font-bold'
                              : 'hover:opacity-85'
                          } bg-[#4edea3]/40 text-[#002113] border border-[#009e6d]/30`}
                        >
                          {lot.number}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Central Park Block */}
                <div className="flex flex-col justify-center items-center bg-[#4edea3]/25 rounded-xl p-3 text-center border border-[#009e6d]/20 shadow-xs">
                  <div className="w-10 h-10 rounded-full bg-[#002a1a] flex items-center justify-center text-[#4edea3] mb-1">
                    <Trees className="w-5 h-5" />
                  </div>
                  <span className="text-[13px] text-[#002a1a] font-bold leading-tight">
                    Parque Central & Juegos
                  </span>
                  <span className="text-[11px] text-[#43474d] font-semibold mt-1">
                    3,500 m² Áreas Verdes
                  </span>
                </div>

                {/* Manzana C (Etapa 2 - En Venta!) */}
                <div className="flex flex-col gap-2">
                  <div className="text-center">
                    <span className="text-[12px] font-bold text-[#a13e28] uppercase tracking-wide block">
                      Mz. C (Obras)
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {lotsMzC.map((lot) => {
                      const isSelected = selectedLot.id === lot.id;
                      return (
                        <button
                          key={lot.id}
                          onClick={() => setSelectedLot(lot)}
                          className={`p-2.5 rounded-lg text-[13px] font-bold text-center transition-all cursor-pointer ${
                            isSelected
                              ? 'ring-2 ring-[#000f22] scale-105 shadow-md'
                              : 'hover:scale-102 hover:shadow-xs'
                          } bg-[#a13e28] text-white shadow-xs`}
                        >
                          {lot.number}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Manzana D */}
                <div className="flex flex-col gap-2">
                  <span className="text-[12px] text-center font-bold text-[#000f22] uppercase tracking-wide">
                    Mz. D
                  </span>
                  <div className="flex flex-col gap-2">
                    {lotsMzD.map((lot) => {
                      const isSelected = selectedLot.id === lot.id;
                      const isAvail = lot.status === 'disponible';
                      return (
                        <button
                          key={lot.id}
                          onClick={() => setSelectedLot(lot)}
                          className={`p-2.5 rounded-lg text-[13px] text-center transition-all cursor-pointer font-bold ${
                            isSelected
                              ? 'ring-2 ring-[#000f22] scale-105 shadow-md'
                              : 'hover:opacity-90'
                          } ${
                            isAvail
                              ? 'bg-[#a13e28] text-white shadow-xs'
                              : 'bg-[#c4c6ce] text-[#43474d]'
                          }`}
                        >
                          {lot.number}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Lower Street */}
              <div className="bg-[#eceef0] text-[#43474d] text-center py-2.5 px-4 rounded-xl text-[12px] tracking-wider uppercase font-bold flex items-center justify-center gap-2 shadow-xs border border-[#c4c6ce]/30">
                <Bike className="w-4 h-4 text-[#a13e28]" />
                <span>Paseo Los Laureles y Ciclovía Conectora</span>
              </div>
            </div>
          </div>

          {/* Sidebar Details Panel */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-7 rounded-2xl shadow-[0_10px_25px_-5px_rgba(10,37,64,0.08)] border border-[#eceef0] flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#eceef0]">
              <span className="text-[13px] uppercase tracking-wider text-[#a13e28] font-bold">
                Detalle del Lote
              </span>
              <span className={`px-3 py-1 rounded-full text-[12px] font-bold ${statusInfo.class}`}>
                {statusInfo.label}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-['Outfit',sans-serif] text-[26px] sm:text-[28px] text-[#000f22] font-bold">
                {selectedLot.name}
              </h3>
              <p className="text-[14px] text-[#43474d] leading-relaxed">
                {selectedLot.description}
              </p>
            </div>

            <div className="space-y-3 bg-[#f2f4f6] p-4 rounded-xl border border-[#eceef0]">
              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#43474d] font-medium">Área del Lote:</span>
                <span className="font-['Outfit',sans-serif] text-[16px] text-[#000f22] font-bold">
                  {selectedLot.area}
                </span>
              </div>

              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#43474d] font-medium">Etapa de Entrega:</span>
                <span className="font-['Outfit',sans-serif] text-[16px] text-[#000f22] font-bold">
                  {selectedLot.stage}
                </span>
              </div>

              <div className="flex justify-between items-center text-[14px]">
                <span className="text-[#43474d] font-medium">Subsidio Estatal:</span>
                <span className="font-['Outfit',sans-serif] text-[16px] text-[#a13e28] font-extrabold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-[#009e6d]" />
                  Aplica Techo Propio
                </span>
              </div>

              {selectedLot.priceEstimate && (
                <div className="flex justify-between items-center text-[14px] pt-1 border-t border-[#c4c6ce]/40">
                  <span className="text-[#43474d] font-medium">Cuota Referencial:</span>
                  <span className="font-['Outfit',sans-serif] text-[16px] text-[#000f22] font-bold">
                    {selectedLot.priceEstimate}
                  </span>
                </div>
              )}
            </div>

            <a
              href={`https://wa.me/51${COMPANY_CONTACT.phone}?text=Hola%20Grupo%20Antark,%20deseo%20separar%20el%20lote%20${encodeURIComponent(
                selectedLot.name
              )}%20(${selectedLot.area},%20${encodeURIComponent(
                selectedLot.model
              )})%20en%20Residencial%20German%20Razuri`}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-3.5 px-4 rounded-xl text-[14px] font-bold text-center transition-all flex items-center justify-center gap-2 shadow-sm ${
                statusInfo.canReserve
                  ? 'bg-[#a13e28] text-white hover:bg-[#822714] active:scale-95'
                  : 'bg-[#000f22] text-white hover:bg-[#0a2540]'
              }`}
            >
              <MessageCircle className="w-5 h-5" />
              <span>{statusInfo.btnText}</span>
            </a>

            <div className="flex items-center gap-2 text-[12px] text-[#43474d] justify-center text-center">
              <Info className="w-4 h-4 text-[#a13e28] shrink-0" />
              <span>Atención directa por asesores inmobiliarios autorizados.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
