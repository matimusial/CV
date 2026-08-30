import { Check, ChevronDown, Download, Globe2, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useI18nContext } from "@/i18n/client";
import { locales } from "@/i18n/translations";
import { cvDownloadUrl, navigationItems, profile } from "@/data/site";
import type { NavigationItem } from "@/data/site";
import type { Locale } from "@/i18n/translations";

type Theme = "light" | "dark";

const isHeaderContactButtonVisible = false;

export function Header() {
  const { LL, locale, setLocale } = useI18nContext();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [activeNavigationId, setActiveNavigationId] = useState<NavigationItem["id"]>("profile");
  const languagePickerRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<Theme>("light");

  const navLabels = {
    profile: LL.nav.profile(),
    projects: LL.nav.projects(),
    experience: LL.nav.experience(),
    education: LL.nav.education(),
    stack: LL.nav.stack(),
    contact: LL.nav.contact(),
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const controller = new AbortController();
    const frame = window.requestAnimationFrame(() => {
      setActiveNavigationId(getNavigationIdFromHash() ?? synchronizeNavigationWithViewport());
    });

    window.addEventListener(
      "scroll",
      () => setActiveNavigationId(synchronizeNavigationWithViewport()),
      { passive: true, signal: controller.signal },
    );

    window.addEventListener(
      "resize",
      () => setActiveNavigationId(synchronizeNavigationWithViewport()),
      { signal: controller.signal },
    );

    window.addEventListener(
      "hashchange",
      () => setActiveNavigationId(getNavigationIdFromHash() ?? "profile"),
      { signal: controller.signal },
    );

    return () => {
      window.cancelAnimationFrame(frame);
      controller.abort();
    };
  }, []);

  function selectLocale(nextLocale: Locale) {
    setLocale(nextLocale);
    setIsLanguageOpen(false);
  }

  function renderNavigationItem(item: NavigationItem) {
    const isActive = activeNavigationId === item.id;

    return (
      <a
        className={isActive ? "nav-link is-active" : "nav-link"}
        href={item.href}
        key={item.href}
      >
        {navLabels[item.id]}
      </a>
    );
  }

  function renderLocaleOption(item: Locale) {
    const language = LL.common.languages[item];

    return (
      <button
        className={`language-option ${locale === item ? "is-active" : ""}`}
        key={item}
        onClick={() => selectLocale(item)}
      >
        <span>{language.name()}</span>
        <div className="flex justify-between gap-1">
          {locale === item ? <Check size={15} /> : null}
          <small>{language.shortName()}</small>
        </div>

      </button>
    );
  }

  return (
    <header className="site-header">
      <nav className="site-nav content-container">
        <a className="brand-lockup group" href="#profile">
          <span className="brand-mark">
            {profile.initials}
          </span>
          <span className="brand-copy">
            <strong>{profile.name}</strong>
            <small>{LL.profile.role()}</small>
          </span>
        </a>

        <div className="desktop-nav nav-panel">
          {navigationItems.map((item) => renderNavigationItem(item))}
        </div>

        <div className="nav-actions">
          <button
            className="theme-trigger"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          <div className="language-picker" ref={languagePickerRef}>
            <button
              className="language-trigger"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <Globe2 size={17} />
              <span>{LL.common.languages[locale].shortName()}</span>
              <ChevronDown className={isLanguageOpen ? "rotate-180" : ""} size={15} />
            </button>

            {isLanguageOpen ? (
              <div className="language-menu">{locales.map((item) => renderLocaleOption(item))}</div>
            ) : null}
          </div>

          {isHeaderContactButtonVisible ? (
            <a className="header-write-button" href="#contact">
              {LL.nav.write()}
            </a>
          ) : null}

          <a
            className="header-write-button inline-flex items-center gap-2"
            download
            href={cvDownloadUrl}
          >
            <Download size={16} />
            {LL.nav.cv()}
          </a>

        </div>
      </nav>
    </header>
  );
}

function synchronizeNavigationWithViewport(): NavigationItem["id"] {
  const navigationId = getActiveNavigationIdFromViewport();

  updateNavigationHash(navigationId);

  return navigationId;
}

function getActiveNavigationIdFromViewport(): NavigationItem["id"] {
  const anchorY = window.innerHeight * 0.38;
  const scrollBottom = window.scrollY + window.innerHeight;
  const pageBottom = document.documentElement.scrollHeight - 8;
  let activeNavigationId: NavigationItem["id"] = "profile";

  if (scrollBottom >= pageBottom) {
    return "contact";
  }

  for (const item of navigationItems) {
    const section = document.getElementById(item.id);

    if (section && section.getBoundingClientRect().top <= anchorY) {
      activeNavigationId = item.id;
    }
  }

  return activeNavigationId;
}

function getNavigationIdFromHash(): NavigationItem["id"] | null {
  const hash = window.location.hash.replace("#", "");

  if (navigationItems.some((item) => item.id === hash)) {
    return hash as NavigationItem["id"];
  }

  return null;
}

function updateNavigationHash(navigationId: NavigationItem["id"]) {
  const hash = `#${navigationId}`;

  if (window.location.hash !== hash) {
    window.history.replaceState(window.history.state, "", hash);
  }
}
