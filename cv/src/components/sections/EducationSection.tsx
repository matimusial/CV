import { educationIds, educationInstitutionUrls } from "@/data/site";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useI18nContext } from "@/i18n/client";
import type { EducationId } from "@/data/site";

export function EducationSection() {
  const { LL } = useI18nContext();

  function renderEducationItem(id: EducationId, index: number) {
    const educationItem = LL.education[id];

    return (
      <article
        className="timeline-item reveal"
        data-reveal
        key={id}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <span className="timeline-dot" />
        <p className="info-kicker">{educationItem.period()}</p>
        <h3 className="info-title">{educationItem.title()}</h3>
        <p className="mt-2 text-sm font-semibold text-[var(--muted)] sm:text-base">
          <a
            className="timeline-organization-link"
            href={educationInstitutionUrls[id]}
            rel="noreferrer"
            target="_blank"
          >
            {educationItem.institution()}
          </a>
        </p>
        <ul className="info-text list-disc space-y-2 pl-5 marker:text-[var(--accent)]">
          <li>{educationItem.details.item1()}</li>
          <li>{educationItem.details.item2()}</li>
          <li>{educationItem.details.item3()}</li>
        </ul>
      </article>
    );
  }

  return (
    <section id="education" className="education-section px-5 py-24 sm:px-8">
      <div className="content-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading kicker={LL.sections.educationKicker()} title={LL.sections.educationTitle()} />

        <div className="timeline">
          {educationIds.map((id, index) => renderEducationItem(id, index))}
        </div>
      </div>
    </section>
  );
}
