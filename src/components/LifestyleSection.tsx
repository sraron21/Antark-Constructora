import React from 'react';
import { Trees, Store, Bike, ShieldCheck } from 'lucide-react';

export const LifestyleSection: React.FC = () => {
  return (
    <section className="w-full py-20 bg-[#f2f4f6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description & Feature Points */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-[14px] text-[#a13e28] font-bold uppercase tracking-wider">
              Calidad de Vida & Comunidad
            </span>
            <h2 className="font-['Outfit',sans-serif] text-[32px] sm:text-[40px] text-[#000f22] font-bold tracking-tight leading-tight">
              Un Entorno Diseñado para la Seguridad de tus Hijos
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#43474d] leading-relaxed">
              Residencial Germán Rázuri no es solo un conjunto habitacional; es un barrio consolidado con amplias áreas
              de recreación, juegos modernos y vías arborizadas en San Pedro de Lloc.
            </p>

            <div className="space-y-5 pt-2">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-xs border border-[#eceef0]">
                  <Trees className="w-5 h-5 text-[#a13e28]" />
                </div>
                <div>
                  <h3 className="font-['Outfit',sans-serif] text-[18px] text-[#000f22] font-bold">
                    Parque Central & Juegos Infantiles
                  </h3>
                  <p className="text-[14px] text-[#43474d] leading-relaxed">
                    Zonas seguras con columpios, resbaladeras y sombra natural para recreación sana en familia.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-xs border border-[#eceef0]">
                  <Store className="w-5 h-5 text-[#a13e28]" />
                </div>
                <div>
                  <h3 className="font-['Outfit',sans-serif] text-[18px] text-[#000f22] font-bold">
                    Zona Comercial & Mercado Local
                  </h3>
                  <p className="text-[14px] text-[#43474d] leading-relaxed">
                    Espacios reservados para farmacias, panaderías y bodegas de abastecimiento diario sin salir del
                    complejo.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-xs border border-[#eceef0]">
                  <Bike className="w-5 h-5 text-[#a13e28]" />
                </div>
                <div>
                  <h3 className="font-['Outfit',sans-serif] text-[18px] text-[#000f22] font-bold">
                    Ciclovías & Vías Asfaltadas
                  </h3>
                  <p className="text-[14px] text-[#43474d] leading-relaxed">
                    Calles amplias señalizadas, iluminación pública LED y veredas de concreto continuo para paseos
                    seguros.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-7 relative">
            <div className="rounded-3xl overflow-hidden shadow-[0_12px_30px_-6px_rgba(10,37,64,0.12)] border border-[#eceef0]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjOC5YY-R7XBynRoX1vi3J6_mF8po8DdkqwNQpFTBa59qzxT33FpJtJ1bKvzwgFETp2KXENI5p18jKvkI9K1LVFPgjwkA3Aeja85jIGdNHBWXCzokXjqrZ3jPA_iH5dc1kC_BGFOdziwNeMgN9tVuVAQ0UiQgYopXDTzwZZXlULPmUoAB_BnKR8FGvXr260mBqqCCAEyVM9_VEyIAKkyCKbDSi0sCoSYPkkAPCJ5O4wkT9IyLD7rLgjg"
                alt="Parque central vibrante en Residencial Germán Rázuri con senderos adoquinados, áreas verdes, familias paseando en San Pedro de Lloc"
                className="w-full h-[400px] sm:h-[460px] object-cover hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Floating Trust Card */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-5 sm:p-6 rounded-2xl shadow-xl max-w-xs border border-[#eceef0] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#002a1a] flex items-center justify-center text-[#4edea3] shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <span className="font-['Outfit',sans-serif] text-[18px] text-[#000f22] font-bold block leading-tight">
                  100% Tranquilidad
                </span>
                <span className="text-[13px] text-[#43474d] leading-snug block mt-0.5">
                  Entorno libre de congestión con acceso controlado y supervisión.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
