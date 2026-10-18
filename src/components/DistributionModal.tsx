import React, { useState } from 'react';
import { X, MessageCircle, Ruler, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { HousingModel } from '../types';
import { COMPANY_CONTACT } from '../data/projectData';

interface DistributionModalProps {
  model: HousingModel | null;
  onClose: () => void;
}

export const DistributionModal: React.FC<DistributionModalProps> = ({ model, onClose }) => {
  const [activeTab, setActiveTab] = useState<'distribution' | 'specs'>('distribution');

  if (!model) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#000f22]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl flex flex-col gap-6 relative border border-[#eceef0] my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar ventana"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f2f4f6] text-[#43474d] hover:text-[#000f22] hover:bg-[#eceef0] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col gap-1 pr-8">
          <span className="text-[13px] uppercase tracking-wider text-[#a13e28] font-bold">
            Distribución Arquitectónica
          </span>
          <h3 className="font-['Outfit',sans-serif] text-[26px] sm:text-[30px] text-[#000f22] font-bold">
            {model.name}
          </h3>
          <p className="text-[14px] text-[#43474d]">
            {model.builtArea} construidos sobre {model.lotArea} de lote total • {model.bedrooms} Dormitorios
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 border-b border-[#eceef0] pb-2">
          <button
            onClick={() => setActiveTab('distribution')}
            className={`px-4 py-2 text-[14px] font-bold rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'distribution'
                ? 'bg-[#000f22] text-white shadow-xs'
                : 'text-[#43474d] hover:bg-[#eceef0]'
            }`}
          >
            <Ruler className="w-4 h-4" />
            <span>Ambientes y Medidas</span>
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`px-4 py-2 text-[14px] font-bold rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'specs'
                ? 'bg-[#000f22] text-white shadow-xs'
                : 'text-[#43474d] hover:bg-[#eceef0]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Especificaciones Técnicas</span>
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'distribution' ? (
          <div className="space-y-4">
            <div className="p-5 bg-[#f2f4f6] rounded-2xl flex flex-col gap-3 border border-[#eceef0]">
              <span className="font-['Outfit',sans-serif] text-[16px] text-[#000f22] font-bold">
                Distribución Interna:
              </span>
              <p className="text-[14px] text-[#191c1e] leading-relaxed">
                {model.specs.distribution}
              </p>
            </div>

            {/* Room breakdown grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-white border border-[#eceef0] rounded-xl shadow-xs">
                <span className="text-[12px] text-[#43474d] block font-medium">Dormitorio Principal</span>
                <span className="text-[14px] text-[#000f22] font-bold">
                  {model.bedrooms === 3 ? '12.5 m²' : '10.8 m²'}
                </span>
              </div>
              <div className="p-3 bg-white border border-[#eceef0] rounded-xl shadow-xs">
                <span className="text-[12px] text-[#43474d] block font-medium">Sala - Comedor</span>
                <span className="text-[14px] text-[#000f22] font-bold">
                  {model.bedrooms === 3 ? '18.2 m²' : '15.6 m²'}
                </span>
              </div>
              <div className="p-3 bg-white border border-[#eceef0] rounded-xl shadow-xs">
                <span className="text-[12px] text-[#43474d] block font-medium">Cocina Integrada</span>
                <span className="text-[14px] text-[#000f22] font-bold">6.5 m²</span>
              </div>
              <div className="p-3 bg-white border border-[#eceef0] rounded-xl shadow-xs">
                <span className="text-[12px] text-[#43474d] block font-medium">Patio / Tendal</span>
                <span className="text-[14px] text-[#000f22] font-bold">14.0 m²</span>
              </div>
              <div className="p-3 bg-white border border-[#eceef0] rounded-xl shadow-xs">
                <span className="text-[12px] text-[#43474d] block font-medium">Jardín & Retiro</span>
                <span className="text-[14px] text-[#000f22] font-bold">
                  {model.bedrooms === 3 ? '16.0 m²' : '12.0 m²'}
                </span>
              </div>
              <div className="p-3 bg-white border border-[#eceef0] rounded-xl shadow-xs">
                <span className="text-[12px] text-[#43474d] block font-medium">Servicios Higiénicos</span>
                <span className="text-[14px] text-[#000f22] font-bold">
                  {model.specs.bathrooms}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="p-4 bg-[#f2f4f6] rounded-xl flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#009e6d] shrink-0 mt-0.5" />
              <div>
                <span className="text-[13px] text-[#000f22] font-bold block">Estructura & Cimentación</span>
                <span className="text-[13px] text-[#43474d] leading-relaxed block">
                  {model.specs.expansion}
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#f2f4f6] rounded-xl flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#009e6d] shrink-0 mt-0.5" />
              <div>
                <span className="text-[13px] text-[#000f22] font-bold block">Cocina y Lavandería</span>
                <span className="text-[13px] text-[#43474d] leading-relaxed block">
                  {model.specs.kitchen}
                </span>
              </div>
            </div>

            <div className="p-4 bg-[#f2f4f6] rounded-xl flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#009e6d] shrink-0 mt-0.5" />
              <div>
                <span className="text-[13px] text-[#000f22] font-bold block">Estacionamiento / Retiro</span>
                <span className="text-[13px] text-[#43474d] leading-relaxed block">
                  {model.specs.parking}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={`https://wa.me/51${COMPANY_CONTACT.phone}?text=Hola%20Grupo%20Antark,%20solicito%20el%20plano%20en%20PDF%20del%20${encodeURIComponent(
              model.name
            )}%20en%20Residencial%20German%20Razuri`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#a13e28] text-white py-3.5 px-5 rounded-xl text-[14px] font-bold text-center hover:bg-[#822714] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Solicitar Plano PDF por WhatsApp</span>
          </a>

          <button
            onClick={onClose}
            className="px-6 py-3.5 rounded-xl bg-[#eceef0] text-[#191c1e] text-[14px] font-bold hover:bg-[#e6e8ea] transition-all cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
