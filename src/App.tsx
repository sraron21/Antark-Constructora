/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { HousingModelsSection } from './components/HousingModelsSection';
import { ProjectStagesSection } from './components/ProjectStagesSection';
import { MasterPlanSection } from './components/MasterPlanSection';
import { LifestyleSection } from './components/LifestyleSection';
import { TechoPropioGuideSection } from './components/TechoPropioGuideSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DistributionModal } from './components/DistributionModal';
import { EligibilityModal } from './components/EligibilityModal';
import { LegalModal, LegalModalType } from './components/LegalModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HousingModel } from './types';

export default function App() {
  const [selectedModel, setSelectedModel] = useState<HousingModel | null>(null);
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<LegalModalType>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fb] text-[#191c1e] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Fixed Navigation Header */}
      <Header onOpenConsultation={scrollToContact} />

      {/* Main Page Flow */}
      <main className="flex-1 w-full">
        <HeroSection onOpenEligibilityQuiz={() => setIsEligibilityOpen(true)} />
        <StatsSection />
        <HousingModelsSection onViewModel={(model) => setSelectedModel(model)} />
        <ProjectStagesSection />
        <MasterPlanSection />
        <LifestyleSection />
        <TechoPropioGuideSection onOpenEligibilityQuiz={() => setIsEligibilityOpen(true)} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Architectural Blueprint Modal */}
      <DistributionModal model={selectedModel} onClose={() => setSelectedModel(null)} />

      {/* Interactive Techo Propio Eligibility Simulator */}
      <EligibilityModal
        isOpen={isEligibilityOpen}
        onClose={() => setIsEligibilityOpen(false)}
      />

      {/* Legal & Compliance Modals (Libro de Reclamaciones, Políticas, etc.) */}
      <LegalModal type={legalModalType} onClose={() => setLegalModalType(null)} />
    </div>
  );
}
