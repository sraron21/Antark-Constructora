import React, { useState, useEffect } from 'react';
import { MessageCircle, User, Phone, Menu, X } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/projectData';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['inicio', 'etapas', 'modelos', 'plano', 'techo-propio', 'contacto'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'Inicio', href: '#inicio' },
    { id: 'etapas', label: 'El Proyecto & Etapas', href: '#etapas' },
    { id: 'modelos', label: 'Modelos de Vivienda', href: '#modelos' },
    { id: 'plano', label: 'Plano Interactivo', href: '#plano' },
    { id: 'techo-propio', label: 'Bono Techo Propio', href: '#techo-propio' },
    { id: 'contacto', label: 'Ubicación', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#f7f9fb]/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(10,37,64,0.08)] py-3'
          : 'bg-[#f7f9fb]/90 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <a href="#inicio" className="flex items-center gap-3 shrink-0 group">
          <img
            alt="Logo Grupo Antark"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/AEtjO1Uxl9Q58RXXaBaz0H4me9Ro1ivod8AnnkYX9SUwvJsknvD83VsugmVeN3lZIDzTDV3yrIyluMJyEbaBPZggqcyLOt8thPOWmZ_6oitWOH9WemhSu0e4uSFQs2n59NRAS2per0tqvjVV26KPcj1_a-cTmtZPVBCQnvj6wci_EQ-9gw16E537oQB_AHG_AAIffPlQIcrHH7TSTkGvp_xdafPeAacTtsn7QAFJjOcJQr8kYHn6PZRJcOR18V1A"
          />
          <div className="flex flex-col">
            <span className="font-['Outfit',sans-serif] text-[18px] font-bold text-[#000f22] tracking-tight leading-tight">
              Grupo Antark
            </span>
            <span className="text-[11px] text-[#a13e28] tracking-wider font-semibold uppercase">
              Residencial Germán Rázuri
            </span>
          </div>
        </a>

        {/* Desktop Nav Zone */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-2 text-[14px] font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-[#000f22] text-white shadow-xs'
                    : 'text-[#43474d] hover:text-[#000f22] hover:bg-[#eceef0]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Zone */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:flex flex-col text-right pr-2">
            <span className="text-[12px] text-[#43474d] font-medium">Central Ventas</span>
            <a
              href={`tel:${COMPANY_CONTACT.phone}`}
              className="font-['Outfit',sans-serif] text-[17px] text-[#000f22] font-bold hover:text-[#a13e28] transition-colors inline-flex items-center gap-1 justify-end"
            >
              <Phone className="w-3.5 h-3.5 text-[#a13e28]" />
              {COMPANY_CONTACT.phoneDisplay}
            </a>
          </div>

          <a
            href={`https://wa.me/51${COMPANY_CONTACT.phone}?text=Hola%20Grupo%20Antark,%20deseo%20asesoria%20sobre%20Techo%20Propio%20en%20Residencial%20German%20Razuri`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#a13e28] text-white px-4 py-2.5 rounded-xl text-[14px] font-semibold hover:bg-[#822714] active:scale-95 transition-all shadow-[0_1px_3px_rgba(10,37,64,0.08)] hover:shadow-[0_8px_20px_-4px_rgba(161,62,40,0.3)] whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Asesoría Techo Propio</span>
          </a>

          <button
            onClick={onOpenConsultation}
            title="Área de Atención y Clientes"
            aria-label="Perfil y asesoría"
            className="w-9 h-9 rounded-full bg-[#000f22] hover:bg-[#0a2540] flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú principal"
            className="xl:hidden p-2 rounded-lg text-[#000f22] hover:bg-[#eceef0] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#c4c6ce]/40 bg-[#f7f9fb] px-6 py-4 shadow-xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-[15px] font-semibold text-[#191c1e] hover:bg-[#eceef0] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#c4c6ce]/30 flex flex-col gap-2">
              <div className="flex items-center justify-between text-[14px]">
                <span className="text-[#43474d]">Línea directa:</span>
                <a href={`tel:${COMPANY_CONTACT.phone}`} className="font-bold text-[#a13e28]">
                  {COMPANY_CONTACT.phoneDisplay}
                </a>
              </div>
              <a
                href={`https://wa.me/51${COMPANY_CONTACT.phone}?text=Hola%20Grupo%20Antark,%20deseo%20asesoria%20sobre%20Techo%20Propio%20en%20Residencial%20German%20Razuri`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#a13e28] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 mt-1"
              >
                <MessageCircle className="w-4 h-4" />
                Contactar por WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
