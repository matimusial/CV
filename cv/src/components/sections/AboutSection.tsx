import { ArrowRight, MapPin } from "lucide-react";
import { available } from "@/config";
import { heroImageUrl, profile } from "@/data/site";
import { useI18nContext } from "@/i18n/client";

export function AboutSection() {
  const { LL } = useI18nContext();

  return (
    <section id="profile" className="about-section relative min-h-screen px-5 pb-20 pt-24 sm:px-8 lg:pt-28">
      <div className="about-layout content-container relative flex items-center gap-1">
        <div data-reveal className="about-copy reveal w-full lg:w-[70%] lg:shrink-0">
          <p className={available ? "about-eyebrow" : "about-eyebrow is-employed"}>
            <span />
            {available ? LL.hero.availability.available() : LL.hero.availability.employed()}
          </p>

          <h1 className="about-title">
            <span>{profile.name}</span>
          </h1>

          <p className="about-headline">{LL.sections.profileTitle()}</p>
          <ul className="about-intro">
            <li>{LL.profile.intro.education()}</li>
            <li>{LL.profile.intro.experience()}</li>
            <li>{LL.profile.intro.approach()}</li>
          </ul>

          <div className="about-actions">
            <a className="action-button action-button-primary group gap-3" href="#projects">
              {LL.hero.primaryCta()}
              <ArrowRight
                className="transition group-hover:translate-x-1"
                size={18}
                strokeWidth={2.4}
              />
            </a>
            <a className="action-button action-button-secondary" href="#contact">
              {LL.hero.contactCta()}
            </a>
          </div>

          <div className="about-location">
            <MapPin aria-hidden="true" size={17} strokeWidth={2.2} />
            <span>{LL.profile.location()}</span>
          </div>
        </div>

        <div data-reveal className="about-cover-column reveal w-full lg:flex-1">
          <article className="about-cover">
            <div
              className="about-cover-image"
              style={{ backgroundImage: `url(${heroImageUrl})` }}
            />
          </article>
        </div>
      </div>
    </section>
  );
}
