import React from 'react';
import { CheckCircle2, MapPin, Phone, Clock, BookOpen, Shield, FileText, Landmark } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/projectData';
import { LegalModalType } from './LegalModal';

interface FooterProps {
  onOpenLegal: (type: LegalModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="w-full bg-[#f2f4f6] text-[#43474d] pt-16 pb-12 shadow-[0_-1px_6px_rgba(10,37,64,0.03)] border-t border-[#eceef0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Column 1: Brand & Seal */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              alt="Logo Grupo Antark"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/AEtjO1Uxl9Q58RXXaBaz0H4me9Ro1ivod8AnnkYX9SUwvJsknvD83VsugmVeN3lZIDzTDV3yrIyluMJyEbaBPZggqcyLOt8thPOWmZ_6oitWOH9WemhSu0e4uSFQs2n59NRAS2per0tqvjVV26KPcj1_a-cTmtZPVBCQnvj6wci_EQ-9gw16E537oQB_AHG_AAIffPlQIcrHH7TSTkGvp_xdafPeAacTtsn7QAFJjOcJQr8kYHn6PZRJcOR18V1A"
            />
            <span className="font-['Outfit',sans-serif] text-[18px] text-[#000f22] font-bold">
              Grupo Antark
            </span>
          </div>
          <p className="text-[13px] sm:text-[14px] leading-relaxed">
            Desarrollo inmobiliario sostenible y seguro. Hacemos realidad el sueño de la casa propia en el norte peruano
            con el respaldo del programa Techo Propio.
          </p>
          <div className="flex items-center gap-2 pt-1">
            <CheckCircle2 className="w-5 h-5 text-[#a13e28]" />
            <span className="text-[12px] text-[#000f22] font-bold">Proyecto Calificado Techo Propio</span>
          </div>
        </div>

        {/* Column 2: Datos Legales */}
        <div className="flex flex-col gap-2.5">
          <h3 className="font-['Outfit',sans-serif] text-[17px] text-[#000f22] font-bold mb-1">
            Datos Legales
          </h3>
          <p className="text-[13px]">
            <strong className="text-[#191c1e]">Razón Social:</strong> {COMPANY_CONTACT.legalName}
          </p>
          <p className="text-[13px]">
            <strong className="text-[#191c1e]">RUC:</strong> {COMPANY_CONTACT.ruc}
          </p>
          <p className="text-[13px]">
            <strong className="text-[#191c1e]">Proyecto:</strong> {COMPANY_CONTACT.projectTitle}
          </p>
          <p className="text-[13px]">
            <strong className="text-[#191c1e]">Sector:</strong> Habilitación Urbana & Vivienda de Interés Social
          </p>
        </div>

        {/* Column 3: Sala de Ventas & Contacto */}
        <div className="flex flex-col gap-2.5">
          <h3 className="font-['Outfit',sans-serif] text-[17px] text-[#000f22] font-bold mb-1">
            Sala de Ventas & Contacto
          </h3>
          <div className="flex items-start gap-2.5 text-[13px]">
            <MapPin className="w-4 h-4 text-[#a13e28] shrink-0 mt-0.5" />
            <p>{COMPANY_CONTACT.address}</p>
          </div>
          <div className="flex items-center gap-2.5 text-[13px]">
            <Phone className="w-4 h-4 text-[#a13e28] shrink-0" />
            <a
              href={`tel:${COMPANY_CONTACT.phone}`}
              className="text-[#000f22] font-bold hover:text-[#a13e28] transition-colors"
            >
              {COMPANY_CONTACT.phoneDisplay}
            </a>
          </div>
          <div className="flex items-center gap-2.5 text-[13px]">
            <Clock className="w-4 h-4 text-[#a13e28] shrink-0" />
            <span>Lunes a Sábado: 9:00 AM - 6:00 PM</span>
          </div>
        </div>

        {/* Column 4: Transparencia & Cumplimiento */}
        <div className="flex flex-col gap-2.5">
          <h3 className="font-['Outfit',sans-serif] text-[17px] text-[#000f22] font-bold mb-1">
            Transparencia & Cumplimiento
          </h3>
          <ul className="flex flex-col gap-2 text-[13px]">
            <li>
              <button
                onClick={() => onOpenLegal('libro')}
                className="hover:text-[#000f22] transition-colors flex items-center gap-2 text-left cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#43474d]" />
                <span>Libro de Reclamaciones Virtual</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenLegal('privacidad')}
                className="hover:text-[#000f22] transition-colors flex items-center gap-2 text-left cursor-pointer"
              >
                <Shield className="w-4 h-4 text-[#43474d]" />
                <span>Políticas de Privacidad</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenLegal('terminos')}
                className="hover:text-[#000f22] transition-colors flex items-center gap-2 text-left cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#43474d]" />
                <span>Términos y Condiciones</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenLegal('mivivienda')}
                className="hover:text-[#000f22] transition-colors flex items-center gap-2 text-left cursor-pointer"
              >
                <Landmark className="w-4 h-4 text-[#43474d]" />
                <span>Fondo MIVIVIENDA / Techo Propio</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-[#c4c6ce]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px]">
        <p>© 2025 Antark Constructora y Servicios Generales S.A.C. Todos los derechos reservados.</p>
        <p className="text-[#43474d]">
          San Pedro de Lloc, La Libertad • {COMPANY_CONTACT.projectTitle}
        </p>
      </div>
    </footer>
  );
};
