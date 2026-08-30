import { experienceIds } from "@/data/site";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useI18nContext } from "@/i18n/client";
import type { ExperienceId, ProjectId } from "@/data/site";

const projectTokenPattern = /(\[\[(?:emailservice|eacloud|eauditor)\]\])/g;

interface ExperienceSectionProps {
  onOpenProject: (projectId: ProjectId) => void;
}

export function ExperienceSection({ onOpenProject }: ExperienceSectionProps) {
  const { LL } = useI18nContext();

  function renderTimelineItem(id: ExperienceId, index: number) {
    const item = LL.experience[id];

    return (
      <article
        className="timeline-item reveal"
        data-reveal
        key={id}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <span className="timeline-dot" />
        <p className="info-kicker">{item.period()}</p>
        <h3 className="info-title">{item.title()}</h3>
        <p className="info-text">{renderExperienceText(item.text())}</p>
      </article>
    );
  }

  function renderExperienceText(text: string) {
    return text.split(projectTokenPattern).map((part, index) => {
      const projectId = getProjectIdFromToken(part);

      if (!projectId) {
        return <span key={`${part}-${index}`}>{part}</span>;
      }

      return (
        <button
          className="timeline-project-link"
          key={`${projectId}-${index}`}
          onClick={() => onOpenProject(projectId)}
          type="button"
        >
          {LL.projects[projectId].title()}
        </button>
      );
    });
  }

  return (
    <section id="experience" className="experience-section section-band px-5 py-24 sm:px-8">
      <div className="content-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading kicker={LL.sections.experienceKicker()} title={LL.sections.experienceTitle()} />

        <div className="timeline">
          {experienceIds.map((id, index) => renderTimelineItem(id, index))}
        </div>
      </div>
    </section>
  );
}

function getProjectIdFromToken(token: string): ProjectId | null {
  if (token === "[[emailservice]]") {
    return "emailservice";
  }

  if (token === "[[eacloud]]") {
    return "eacloud";
  }

  if (token === "[[eauditor]]") {
    return "eauditor";
  }

  return null;
}
