import React from 'react';
import { MessageCircle, ArrowDown, PiggyBank, Home, ShieldCheck } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/projectData';

interface HeroSectionProps {
  onOpenEligibilityQuiz: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEligibilityQuiz }) => {
  return (
    <section id="inicio" className="relative w-full overflow-hidden bg-[#000f22] text-white pt-32 pb-20 lg:pt-36 lg:pb-28">
      {/* Background Image with Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Casas unifamiliares modernas en Residencial Germán Rázuri, San Pedro de Lloc"
          className="w-full h-full object-cover opacity-35 object-center"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD10IS_GkO3w0MajsywsJaekiKfkcoXpAb6yYR9vRMVHb9BV_k3oab-KlhIAYwNh5iyT39TcwlYlG6A8aKUrHrrd7I32phjo-03lmT2rGbSLmJP-N-GJHJW74JoMiGcTeBVJWCO7nqTBUAsoPT2wNFounyy4QZYm2hRxjqZ3fT0wv2KHoyHJAMkTJM4pHd4tFyXxla44znNqQC8nuWVeGavCcjuYABjv6MflwXBdyD-WoFbdczXC--XLA"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000f22] via-[#000f22]/85 to-[#000f22]/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2.5 self-start bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-xs">
          <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3] animate-pulse"></span>
          <span className="text-[12px] text-[#d2e4ff] uppercase tracking-widest font-bold">
            Proyecto Registrado en Fondo MIVIVIENDA • +14 Años de Trayectoria
          </span>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <h1 className="font-['Outfit',sans-serif] text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.1] font-bold tracking-tight text-white max-w-3xl">
              Tu casa propia con jardín y todos los servicios en{' '}
              <span className="text-[#ffdad2]">San Pedro de Lloc</span>.
            </h1>

            <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#c4c6ce] max-w-2xl font-normal">
              Casas unifamiliares con proyección a ampliación dentro de un entorno residencial planificado con parques,
              ciclovías y zona comercial. Accede con el respaldo del{' '}
              <strong className="text-white font-semibold">Bono Techo Propio</strong> del Estado.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={`https://wa.me/51${COMPANY_CONTACT.phone}?text=Hola%20Grupo%20Antark,%20deseo%20evaluar%20mi%20Bono%20Techo%20Propio%20en%20Residencial%20German%20Razuri`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#a13e28] text-white px-7 py-4 rounded-xl text-[15px] font-bold shadow-lg hover:bg-[#822714] active:scale-95 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Quiero mi Casa con Techo Propio</span>
              </a>

              <a
                href="#modelos"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-6 py-4 rounded-xl text-[15px] font-semibold transition-all border border-white/10"
              >
                <span>Ver Modelos y Planos</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Floating Quick Badges */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
            {/* Bono Badge - Clickable to launch interactive quiz */}
            <button
              onClick={onOpenEligibilityQuiz}
              className="w-full text-left bg-white/10 hover:bg-white/15 backdrop-blur-xl p-5 rounded-2xl flex items-center gap-4 shadow-sm border border-white/15 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ffdad2]/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <PiggyBank className="w-6 h-6 text-[#ffdad2]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-[#c4c6ce] uppercase tracking-wider block font-semibold">
                    Bono No Reembolsable
                  </span>
                  <span className="text-[11px] text-[#ffdad2] bg-[#a13e28]/60 px-2 py-0.5 rounded-full font-medium">
                    Evaluar
                  </span>
                </div>
                <span className="font-['Outfit',sans-serif] text-[26px] text-white font-bold block leading-tight">
                  Hasta S/ 44,000*
                </span>
                <span className="text-[11px] text-[#b0c8eb] underline mt-0.5 block">
                  Haz clic para simular tu bono
                </span>
              </div>
            </button>

            {/* Community consolidated Badge */}
            <div className="bg-white/10 backdrop-blur-xl p-5 rounded-2xl flex items-center gap-4 shadow-sm border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#4edea3]/20 flex items-center justify-center shrink-0">
                <Home className="w-6 h-6 text-[#4edea3]" />
              </div>
              <div>
                <span className="text-[12px] text-[#c4c6ce] uppercase tracking-wider block font-semibold">
                  Comunidad consolidada
                </span>
                <span className="font-['Outfit',sans-serif] text-[22px] text-white font-bold block leading-tight">
                  300 familias viviendo
                </span>
                <span className="text-[11px] text-[#4edea3] font-medium flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Obras 100% supervisadas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
