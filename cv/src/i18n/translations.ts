import type { BaseTranslation } from "typesafe-i18n";

export const baseLocale = "pl";
export const locales = ["pl", "en"] as const;
export type Locale = (typeof locales)[number];
export type Translation = typeof pl;

export const pl = {
  common: {
    languages: {
      pl: {
        name: "Polski",
        shortName: "PL",
      },
      en: {
        name: "Angielski",
        shortName: "EN",
      },
    },
  },
  nav: {
    profile: "O mnie",
    projects: "Projekty",
    experience: "Doświadczenie",
    education: "Wykształcenie",
    stack: "Stack",
    contact: "Kontakt",
    write: "Napisz",
    cv: "CV",
    mobileAria: "Nawigacja mobilna",
  },
  profile: {
    role: "Fullstack Developer",
    intro: {
      education: "Inżynier informatyki (ZUT) i Fullstack Developer z komercyjnym doświadczeniem od 2025 roku.",
      experience: "Pracuję z TypeScriptem, Javą i SQL-em, rozwijając frontend eAuditor Cloud oraz eAuditor On-Premise.",
      approach: "Moimi atutami są analityczne podejście, szybka nauka i dbałość o czytelny kod.",
    },
    location: "Szczecin / zdalnie",
  },
  hero: {
    availability: {
      available: "Dostępny",
      employed: "Zatrudniony",
    },
    primaryCta: "Zobacz projekty",
    contactCta: "Kontakt",
  },
  loader: {
    kicker: "Portfolio CV",
    status: "Ładowanie...",
  },
  sections: {
    profileTitle: "Fullstack Developer",
    projectsKicker: "Projekty",
    projectsTitle: "Projekty, przy których pracowałem",
    experienceKicker: "Doświadczenie zawodowe",
    experienceTitle: "Moja droga zawodowa",
    educationKicker: "Wykształcenie",
    educationTitle: "Moje wykształcenie",
    stackKicker: "Stack",
    stackTitle: "Technologie, których używam",
  },
  projectsUi: {
    open: "Zobacz szczegóły",
    categories: {
      commercial: {
        badge: "Komercyjne",
        title: "Projekty komercyjne",
      },
      hobby: {
        badge: "Hobbystyczne",
        title: "Projekty hobbystyczne",
      },
    },
  },
  projects: {
    eacloud: {
      title: "eAuditor Cloud",
      description:
        "Chmurowa platforma do inwentaryzacji, monitorowania, bezpieczeństwa i zdalnego zarządzania infrastrukturą IT.",
      overview:
        "Jestem jednym z głównych frontend developerów eAuditor Cloud i odpowiadam za około 60% obecnej warstwy frontendowej aplikacji. W Svelte i TypeScript tworzę kluczowe widoki, stworzyłem frontend modułu zdalnego pulpitu WebRTC oraz rozwijam własne mechanizmy interfejsu, formularze, walidację i integracje z REST API.",
      responsibilities: {
        item1: "Kluczowe widoki aplikacji",
        item2: "Frontend modułu zdalnego pulpitu WebRTC",
        item3: "Własne mechanizmy UI i walidacja formularzy",
        item4: "Integracja interfejsu z REST API",
      },
    },
    eauditor: {
      title: "eAuditor On-Premise",
      description:
        "System do centralnego zarządzania, monitorowania, inwentaryzacji i zabezpieczania rozbudowanej infrastruktury IT.",
      overview:
        "W eAuditor On-Premise pracuję obecnie przy utrzymaniu istniejącej części backendowej i warstwy danych. Diagnozuję problemy, wprowadzam poprawki oraz drobne zmiany w kodzie Java i Spring Boot, dbam o poprawki serwera RTC, a także tworzę i aktualizuję skrypty SQL dla PostgreSQL i MS SQL.",
      responsibilities: {
        item1: "Diagnozowanie i poprawianie błędów w Java",
        item2: "Drobne zmiany w Spring Boot i poprawki serwera RTC",
        item3: "Tworzenie i aktualizacja skryptów SQL",
        item4: "Praca z bazami PostgreSQL i MS SQL",
      },
    },
    expensetracker: {
      title: "Smart Expense Tracker",
      description:
        "Aplikacja finansowa, która odczytuje paragony, automatycznie klasyfikuje wydatki i prezentuje je w interaktywnym dashboardzie.",
      overview:
        "Pełnostackowy system łączący React i TypeScript, REST API w Java Spring Boot oraz mikroserwis Python FastAPI. Pipeline wykorzystuje computer vision i OCR do odczytu paragonu oraz modele machine learning do klasyfikacji transakcji; wyniki trafiają do PostgreSQL i dashboardu z analizą wydatków.",
      responsibilities: {
        item1: "Architektura React + Spring Boot + FastAPI",
        item2: "Przetwarzanie obrazu i OCR paragonów",
        item3: "Modele machine learning do klasyfikacji wydatków",
        item4: "Autoryzacja, REST API i model danych PostgreSQL",
      },
    },
    emailservice: {
      title: "System opinii pracowniczych",
      description:
        "System ankiet, który wysyła pracownikom unikalne formularze e-mailem i zamienia odpowiedzi w statystyki dla administratora.",
      overview:
        "Projekt zrealizowany podczas praktyk w BTC. Backend Java Spring Boot przyjmuje zdarzenia przez REST API, zapisuje je w PostgreSQL i wysyła odbiorcy unikalny link do ankiety; panel w Svelte i TypeScript pozwala zarządzać helpdeskami, pytaniami oraz analizować odpowiedzi.",
      responsibilities: {
        item1: "REST API przyjmujące zdarzenia w JSON",
        item2: "Generowanie i wysyłka linków do ankiet",
        item3: "Panel administratora w Svelte",
        item4: "Logowanie, odzyskiwanie hasła i statystyki",
      },
    },
    cv: {
      title: "Portfolio CV",
      description:
        "Jednostronicowe portfolio CV z responsywnym interfejsem, projektami, stackiem, formularzem kontaktowym i dwujęzyczną treścią.",
      overview:
        "Własny projekt portfolio zbudowany w Next.js, React i TypeScript. Strona łączy sekcje CV, interaktywne modale projektów, przełączanie języka, tryb jasny/ciemny oraz kontakt z ukrywanymi danymi i bezpośrednimi linkami tel oraz mailto.",
      responsibilities: {
        item1: "Architektura aplikacji w Next.js i React",
        item2: "Responsywny interfejs oraz własny system sekcji",
        item3: "Modale projektów, galerie i dwujęzyczne treści",
        item4: "Kontakt, ukrywanie danych oraz linki tel i mailto",
      },
    },
  },
  projectModal: {
    kicker: "Szczegóły projektu",
    imageNote: "Miejsce na screenshoty, mockupy albo zdjęcia projektu",
    previousImage: "Poprzednie zdjęcie",
    nextImage: "Następne zdjęcie",
    fullscreen: "Pełny ekran",
    exitFullscreen: "Wyjdź z pełnego ekranu",
    productWebsite: "Strona produktu",
    githubRepository: "GitHub",
    description: "Opis",
    technologies: "Technologie",
    responsibilities: "Zakres prac",
  },
  experience: {
    internship: {
      period: "Wrzesień 2024",
      title: "Praktyki Fullstack - BTC",
      text: "Praca z firmowym API aplikacji eHelpdesk oraz technologiami REST API, Java Spring Boot i Svelte, zakończona zbudowaniem aplikacji fullstack [[emailservice]] od backendu po panel administracyjny.",
    },
    juniorFrontend: {
      period: "Luty 2025 - styczeń 2026",
      title: "Junior Frontend Developer - BTC",
      text: "Praca nad frontendem [[eacloud]] aż do pierwszej premiery produktu: implementacja widoków, komponentów i integracji z API oraz znaczący udział w kształtowaniu interfejsu aplikacji.",
    },
    fullstack: {
      period: "Styczeń 2026 - obecnie",
      title: "Fullstack Developer - BTC",
      text: "Rozszerzenie odpowiedzialności na [[eauditor]] i [[eacloud]]: wdrażanie nowych funkcjonalności, poprawki w istniejących modułach oraz praca po obu stronach aplikacji - od interfejsu po backend i dane.",
    },
    digeInternship: {
      period: "Marzec 2020",
      title: "Frontend Developer - staż, Dige",
      text: "Nauka i rozwijanie podstaw JavaScript oraz pierwsze zadania związane z tworzeniem interfejsów aplikacji webowych.",
    },
    logicNetInternship: {
      period: "Luty 2019",
      title: "Technik IT - staż, Logic Net",
      text: "Instalacja systemów i oprogramowania, diagnostyka oraz składanie komputerów, a także praca z okablowaniem sieciowym.",
    },
  },
  education: {
    technicalSchool: {
      period: "2017 - 2021",
      title: "Technik informatyk",
      institution: "Technikum Technologii Cyfrowych",
      details: {
        item1: "Zdobyty dyplom zawodowy technika informatyka.",
        item2: "EE.08 - montaż i eksploatacja systemów komputerowych, urządzeń peryferyjnych i sieci.",
        item3: "EE.09 - programowanie, tworzenie i administrowanie stronami internetowymi oraz bazami danych.",
      },
    },
    engineering: {
      period: "2021 - 2025",
      title: "Informatyka",
      institution: "Zachodniopomorski Uniwersytet Technologiczny w Szczecinie",
      details: {
        item1: "Ukończone studia inżynierskie.",
        item2: "Uzyskany tytuł zawodowy: inżynier.",
        item3: "Specjalizacja: inżynieria oprogramowania.",
      },
    },
  },
  languageSkills: {
    englishB2: {
      category: "Język",
      certificate: "Certyfikat",
      level: "B2",
      text: "Angielski w stopniu komunikatywnym.",
      title: "Angielski",
    },
  },
  stack: {
    react: { name: "React" },
    svelte: { name: "Svelte" },
    typescript: { name: "TypeScript" },
    tailwind: { name: "Tailwind CSS" },
    restapi: { name: "REST API" },
    postgres: { name: "PostgreSQL" },
    mssql: { name: "MS SQL" },
    spring: { name: "Java Spring Boot" },
    python: { name: "Python" },
    fastapi: { name: "FastAPI" },
    machineLearning: { name: "Machine Learning" },
    chatgpt: { name: "ChatGPT" },
    git: { name: "Git" },
    figma: { name: "Figma" },
  },
  stackUi: {
    commercialExperienceLabel: "Komercyjnie",
    openProject: "Otwórz powiązany projekt",
    aiUsageTitle: "Umiejętne wykorzystanie AI przyspiesza analizę problemów, wyszukiwanie bibliotek, dobór rozwiązań, wdrożenie oraz naukę nowych technologii. Traktuję AI jako narzędzie wspierające pracę programisty, a nie zastępstwo za jego wiedzę, odpowiedzialność i decyzje wymagane w projektach enterprise.",
    usage: {
      commercial: "Komercyjnie",
      hobby: "Hobbystycznie",
      both: "Komercyjnie + hobby",
    },
    commercialExperience: {
      fiveMonths: "10 mies.",
      oneYearThreeMonths: "1 rok 10 mies.",
    },
    groups: {
      frontend: {
        title: "Frontend",
      },
      backend: {
        title: "Backend",
      },
      utils: {
        title: "Utils",
      },
    },
  },
  contactModal: {
    kicker: "Wiadomość",
    title: "Kontakt w sprawie współpracy",
    fields: {
      name: "Imię i nazwisko",
      email: "Email rekrutera",
      company: "Firma",
      message: "Treść wiadomości",
    },
    placeholders: {
      name: "Jan Kowalski",
      email: "jan@firma.pl",
      company: "Nazwa firmy",
      message: "Cześć Mateusz, mamy rolę fullstack...",
    },
    status: {
      sent: "Wiadomość została wysłana.",
      error: "Backend kontaktowy jeszcze nie odpowiedział. Formularz wysyła już poprawny JSON pod /api/contact.",
    },
    submit: "Wyślij wiadomość",
    sending: "Wysyłanie",
  },
  footer: {
    kicker: "Kontakt",
    title: "Jeśli szukasz fullstack developera, warto pogadać.",
    contact: {
      phone: {
        prompt: "Wolisz zadzwonić?",
        reveal: "Pokaż numer",
        call: "Zadzwoń",
      },
      email: {
        prompt: "Wolisz maila?",
        reveal: "Pokaż email",
        write: "Napisz",
      },
    },
    copyright: "© {year:number} Mateusz Musiał. Wszelkie prawa zastrzeżone.",
  },
} satisfies BaseTranslation;

export const en: Translation = {
  common: {
    languages: {
      pl: {
        name: "Polish",
        shortName: "PL",
      },
      en: {
        name: "English",
        shortName: "EN",
      },
    },
  },
  nav: {
    profile: "About",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    stack: "Stack",
    contact: "Contact",
    write: "Write",
    cv: "CV",
    mobileAria: "Mobile navigation",
  },
  profile: {
    role: "Fullstack Developer",
    intro: {
      education: "Computer Science Engineer (ZUT) and Fullstack Developer with professional experience since 2025.",
      experience: "I work with TypeScript, Java and SQL, contributing to the frontend of eAuditor Cloud and to eAuditor On-Premise.",
      approach: "My strengths include analytical thinking, fast learning and attention to clean, readable code.",
    },
    location: "Szczecin / remote",
  },
  hero: {
    availability: {
      available: "Available",
      employed: "Employed",
    },
    primaryCta: "View projects",
    contactCta: "Contact",
  },
  loader: {
    kicker: "Portfolio CV",
    status: "Loading...",
  },
  sections: {
    profileTitle: "Fullstack Developer",
    projectsKicker: "Projects",
    projectsTitle: "Projects I have worked on",
    experienceKicker: "Work experience",
    experienceTitle: "My professional path",
    educationKicker: "Education",
    educationTitle: "My education",
    stackKicker: "Stack",
    stackTitle: "Technologies I work with",
  },
  projectsUi: {
    open: "View details",
    categories: {
      commercial: {
        badge: "Commercial",
        title: "Commercial projects",
      },
      hobby: {
        badge: "Hobby",
        title: "Hobby projects",
      },
    },
  },
  projects: {
    eacloud: {
      title: "eAuditor Cloud",
      description:
        "A cloud platform for inventory, monitoring, security and remote IT infrastructure management.",
      overview:
        "I am one of the primary frontend developers of eAuditor Cloud and am responsible for approximately 60% of its current frontend layer. Using Svelte and TypeScript, I build key views, created the frontend for the WebRTC remote desktop module, and develop custom UI mechanisms, forms, validation and REST API integrations.",
      responsibilities: {
        item1: "Key application views",
        item2: "Frontend for the WebRTC remote desktop module",
        item3: "Custom UI mechanisms and form validation",
        item4: "Frontend integration with REST APIs",
      },
    },
    eauditor: {
      title: "eAuditor On-Premise",
      description:
        "A system for centrally managing, monitoring, inventorying and securing complex IT infrastructure.",
      overview:
        "In eAuditor On-Premise, I currently work on maintaining the existing backend and data layer. I diagnose issues, implement fixes and small changes in Java and Spring Boot, maintain and fix the RTC server, and create and update SQL scripts for PostgreSQL and MS SQL.",
      responsibilities: {
        item1: "Diagnosing and fixing issues in Java",
        item2: "Small Spring Boot changes and RTC server fixes",
        item3: "Creating and updating SQL scripts",
        item4: "Working with PostgreSQL and MS SQL databases",
      },
    },
    expensetracker: {
      title: "Smart Expense Tracker",
      description:
        "A finance application that reads receipts, automatically classifies expenses and presents them in an interactive dashboard.",
      overview:
        "A full-stack system combining React and TypeScript, a Java Spring Boot REST API and a Python FastAPI microservice. The pipeline uses computer vision and OCR to read receipts and machine learning models to classify transactions; the results are stored in PostgreSQL and presented in an expense analytics dashboard.",
      responsibilities: {
        item1: "React + Spring Boot + FastAPI architecture",
        item2: "Receipt image processing and OCR",
        item3: "Machine learning models for expense classification",
        item4: "Authentication, REST API and PostgreSQL data model",
      },
    },
    emailservice: {
      title: "Employee Feedback System",
      description:
        "A survey system that emails employees unique forms and turns their responses into administrator-facing statistics.",
      overview:
        "A project built during my internship at BTC. The Java Spring Boot backend accepts events through a REST API, stores them in PostgreSQL and emails each recipient a unique survey link; the Svelte and TypeScript panel manages helpdesks and questions while exposing response analytics.",
      responsibilities: {
        item1: "REST API accepting JSON events",
        item2: "Generating and emailing survey links",
        item3: "Svelte administration panel",
        item4: "Login, password recovery and statistics",
      },
    },
    cv: {
      title: "CV Portfolio",
      description:
        "A one-page CV portfolio with a responsive interface, projects, stack, contact form and bilingual content.",
      overview:
        "A personal portfolio project built with Next.js, React and TypeScript. The page combines CV sections, interactive project modals, language switching, light/dark mode and a contact area with hidden details and direct tel and mailto links.",
      responsibilities: {
        item1: "Next.js and React application architecture",
        item2: "Responsive interface and custom section system",
        item3: "Project modals, galleries and bilingual content",
        item4: "Contact flow, hidden data reveal and tel and mailto links",
      },
    },
  },
  projectModal: {
    kicker: "Project details",
    imageNote: "Space for screenshots, mockups or project photos",
    previousImage: "Previous image",
    nextImage: "Next image",
    fullscreen: "Fullscreen",
    exitFullscreen: "Exit fullscreen",
    productWebsite: "Product website",
    githubRepository: "GitHub",
    description: "Description",
    technologies: "Technologies",
    responsibilities: "Scope",
  },
  experience: {
    internship: {
      period: "September 2024",
      title: "Fullstack Internship - BTC",
      text: "Work with the internal eHelpdesk API and REST API, Java Spring Boot and Svelte, followed by building the fullstack [[emailservice]] application from backend to administration panel.",
    },
    juniorFrontend: {
      period: "February 2025 - January 2026",
      title: "Junior Frontend Developer - BTC",
      text: "Frontend work on [[eacloud]] up to the product's first release: implementing views, components and API integrations, with a significant contribution to the application interface.",
    },
    fullstack: {
      period: "January 2026 - present",
      title: "Fullstack Developer - BTC",
      text: "Expanded responsibility across [[eauditor]] and [[eacloud]]: delivering new functionality, improving existing modules and working across both sides of the application, from interface to backend and data.",
    },
    digeInternship: {
      period: "March 2020",
      title: "Frontend Developer Intern - Dige",
      text: "Learning and strengthening JavaScript fundamentals through initial tasks related to building web application interfaces.",
    },
    logicNetInternship: {
      period: "February 2019",
      title: "IT Technician Intern - Logic Net",
      text: "Installing operating systems and software, diagnosing and assembling computers, and working with network cabling.",
    },
  },
  education: {
    technicalSchool: {
      period: "2017 - 2021",
      title: "IT Technician",
      institution: "Technikum Technologii Cyfrowych",
      details: {
        item1: "Earned the IT Technician professional diploma.",
        item2: "EE.08 - installation and operation of computer systems, peripheral devices and networks.",
        item3: "EE.09 - programming, creating and administering websites and databases.",
      },
    },
    engineering: {
      period: "2021 - 2025",
      title: "Computer Science",
      institution: "West Pomeranian University of Technology in Szczecin",
      details: {
        item1: "Completed an engineering degree programme.",
        item2: "Earned the professional title of Engineer.",
        item3: "Specialization: Software Engineering.",
      },
    },
  },
  languageSkills: {
    englishB2: {
      category: "Language",
      certificate: "Certificate",
      level: "B2",
      text: "English at a communicative level.",
      title: "English",
    },
  },
  stack: {
    react: { name: "React" },
    svelte: { name: "Svelte" },
    typescript: { name: "TypeScript" },
    tailwind: { name: "Tailwind CSS" },
    restapi: { name: "REST API" },
    postgres: { name: "PostgreSQL" },
    mssql: { name: "MS SQL" },
    spring: { name: "Java Spring Boot" },
    python: { name: "Python" },
    fastapi: { name: "FastAPI" },
    machineLearning: { name: "Machine Learning" },
    chatgpt: { name: "ChatGPT" },
    git: { name: "Git" },
    figma: { name: "Figma" },
  },
  stackUi: {
    commercialExperienceLabel: "Commercial",
    openProject: "Open related project",
    aiUsageTitle: "Used thoughtfully, AI accelerates problem analysis, library research, solution selection, onboarding and learning new technologies. I treat AI as a tool that supports developers, not as a replacement for their knowledge, accountability and engineering decisions in enterprise projects.",
    usage: {
      commercial: "Commercial",
      hobby: "Hobby",
      both: "Commercial + hobby",
    },
    commercialExperience: {
      fiveMonths: "10 mo.",
      oneYearThreeMonths: "1 yr 10 mo.",
    },
    groups: {
      frontend: {
        title: "Frontend",
      },
      backend: {
        title: "Backend",
      },
      utils: {
        title: "Utils",
      },
    },
  },
  contactModal: {
    kicker: "Message",
    title: "Contact about working together",
    fields: {
      name: "Full name",
      email: "Recruiter email",
      company: "Company",
      message: "Message",
    },
    placeholders: {
      name: "John Smith",
      email: "john@company.com",
      company: "Company name",
      message: "Hi Mateusz, we have a fullstack role...",
    },
    status: {
      sent: "The message has been sent.",
      error: "The contact backend has not responded yet. The form already sends a valid JSON payload to /api/contact.",
    },
    submit: "Send message",
    sending: "Sending",
  },
  footer: {
    kicker: "Contact",
    title: "If you need a fullstack developer, let’s talk.",
    contact: {
      phone: {
        prompt: "Prefer to call?",
        reveal: "Show number",
        call: "Call",
      },
      email: {
        prompt: "Prefer email?",
        reveal: "Show email",
        write: "Write",
      },
    },
    copyright: "© {year:number} Mateusz Musiał. All rights reserved.",
  },
};

export const translations: Record<Locale, Translation> = {
  pl,
  en,
};
