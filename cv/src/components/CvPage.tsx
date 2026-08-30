"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { ContactModal } from "@/components/modals/ContactModal";
import { DynamicBackground } from "@/components/common/DynamicBackground";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { MobileDock } from "@/components/layout/MobileDock";
import { PageLoader } from "@/components/common/PageLoader";
import { ProjectModal } from "@/components/modals/ProjectModal";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { StackSection } from "@/components/sections/StackSection";
import { contactEndpoint, initialContactForm, profile } from "@/data/site";
import TypesafeI18n, { useI18nContext } from "@/i18n/client";
import { httpPostJson } from "@/services/http";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import type { ContactForm, ProjectId } from "@/data/site";
import type { ContactStatus } from "@/components/modals/ContactModal";
import { baseLocale } from "@/i18n/translations";
import type { Locale } from "@/i18n/translations";

export function CvPage() {
  return (
    <TypesafeI18n locale={baseLocale}>
      <CvPageContent />
    </TypesafeI18n>
  );
}

interface ContactRecruiterPayload {
  company: string;
  email: string;
  name: string;
}

interface ContactPayload {
  locale: Locale;
  message: string;
  recipient: string;
  recruiter: ContactRecruiterPayload;
  source: "cv-one-page";
  submittedAt: string;
}

function CvPageContent() {
  const { LL, locale } = useI18nContext();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectId | null>(null);
  const [contactForm, setContactForm] = useState<ContactForm>(initialContactForm);
  const [contactStatus, setContactStatus] = useState<ContactStatus>("idle");
  const [contactError, setContactError] = useState("");
  const [isPageIntroVisible, setIsPageIntroVisible] = useState(true);
  const [isPageReady, setIsPageReady] = useState(false);

  useRevealOnScroll();

  useEffect(() => {
    const readyTimer = window.setTimeout(() => setIsPageReady(true), 360);
    const hideTimer = window.setTimeout(() => setIsPageIntroVisible(false), 1300);

    return () => {
      window.clearTimeout(readyTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    if (!isContactOpen && !selectedProject) {
      return;
    }

    const controller = new AbortController();
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "Escape") {
          setIsContactOpen(false);
          setSelectedProject(null);
        }
      },
      { signal: controller.signal },
    );

    return () => {
      document.body.style.overflow = originalOverflow;
      controller.abort();
    };
  }, [isContactOpen, selectedProject]);

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setContactStatus("sending");
    setContactError("");

    const payload = createContactPayload();

    try {
      await httpPostJson(contactEndpoint, payload);
      setContactStatus("sent");
      setContactForm(initialContactForm);
    } catch {
      setContactStatus("error");
      setContactError(LL.contactModal.status.error());
    }
  }

  function closeModals() {
    setIsContactOpen(false);
    setSelectedProject(null);
  }

  /* function openContactModal() {
    setSelectedProject(null);
    setContactStatus("idle");
    setContactError("");
    setIsContactOpen(true);
  } */

  function openProjectModal(projectId: ProjectId) {
    setIsContactOpen(false);
    setSelectedProject(projectId);
  }

  function updateContactField(field: keyof ContactForm, value: string) {
    setContactForm({ ...contactForm, [field]: value });
  }

  function createContactPayload(): ContactPayload {
    return {
      locale,
      message: contactForm.message,
      recipient: profile.email,
      recruiter: {
        company: contactForm.company,
        email: contactForm.email,
        name: contactForm.name,
      },
      source: "cv-one-page",
      submittedAt: new Date().toISOString(),
    };
  }

  return (
    <main className={`page-shell min-h-screen overflow-hidden ${isPageReady ? "is-ready" : ""}`}>
      {isPageIntroVisible ? <PageLoader /> : null}
      <DynamicBackground />
      <Header />
      <AboutSection />
      <ProjectsSection onOpenProject={openProjectModal} />
      <StackSection onOpenProject={openProjectModal} />
      <ExperienceSection onOpenProject={openProjectModal} />
      <EducationSection />
      <Footer />
      <MobileDock />

      {isContactOpen ? (
        <ContactModal
          error={contactError}
          form={contactForm}
          onClose={closeModals}
          onFieldChange={updateContactField}
          onSubmit={handleContactSubmit}
          status={contactStatus}
        />
      ) : null}

      {selectedProject ? <ProjectModal onClose={closeModals} projectId={selectedProject} /> : null}
    </main>
  );
}
