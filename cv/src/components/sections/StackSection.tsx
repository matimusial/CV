import { languageSkillIds, projectGroups, stackGroups, stackItems } from "@/data/site";
import { LanguageSkillCard } from "@/components/common/LanguageSkillCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useI18nContext } from "@/i18n/client";
import type {
  LanguageSkillId,
  ProjectCategoryId,
  ProjectGroup,
  ProjectId,
  StackGroup,
  StackId,
  StackItem,
  StackUsageId,
} from "@/data/site";

interface StackSectionProps {
  onOpenProject: (projectId: ProjectId) => void;
}

export function StackSection({ onOpenProject }: StackSectionProps) {
  const { LL } = useI18nContext();

  function renderStackGroup(group: StackGroup, groupIndex: number) {
    const groupTranslation = LL.stackUi.groups[group.id];

    return (
      <div
        className="stack-group reveal"
        data-reveal
        key={group.id}
        style={{ transitionDelay: `${groupIndex * 80}ms` }}
      >
        <div className="stack-group-header">
            <h3 className="stack-group-title">{groupTranslation.title()}</h3>
        </div>

        <div className="stack-grid">
          {group.stackIds.map((stackId, index) => renderStackItem(getStackItem(stackId), index))}
        </div>
      </div>
    );
  }

  function renderStackItem(item: StackItem, index: number) {
    const Icon = item.icon;
    const stackItem = LL.stack[item.id];
    const commercialExperience = item.commercialExperience;
    const projectId = item.projectId;
    const shouldShowCommercialExperience =
      (item.usage === "commercial" || item.usage === "both") && Boolean(commercialExperience);
    const content = (
      <>
        <span className="skill-tile-header">
          <span className="skill-icon" aria-hidden="true">
            <Icon size={21} strokeWidth={1.55} />
          </span>
          {renderStackUsageMarker(item.usage)}
        </span>

        <span className="skill-copy">
          <span className="skill-name">{stackItem.name()}</span>
        </span>

        {shouldShowCommercialExperience && commercialExperience ? (
          <span className="skill-stack-meta">
            <span className="skill-commercial-time">
              <span>{LL.stackUi.commercialExperienceLabel()}</span>
              <strong>{LL.stackUi.commercialExperience[commercialExperience]()}</strong>
            </span>
          </span>
        ) : null}
      </>
    );

    if (!projectId) {
      return (
        <div
          className="skill-tile skill-tile-informational reveal"
          data-reveal
          key={item.id}
          style={{ transitionDelay: `${index * 35}ms` }}
          title={LL.stackUi.aiUsageTitle()}
        >
          {content}
        </div>
      );
    }

    return (
      <button
        aria-label={`${LL.stackUi.openProject()}: ${stackItem.name()}`}
        className="skill-tile reveal"
        data-reveal
        key={item.id}
        onClick={() => onOpenProject(projectId)}
        style={{ transitionDelay: `${index * 35}ms` }}
        type="button"
      >
        {content}
      </button>
    );
  }

  function renderLanguageSkill(id: LanguageSkillId, index: number) {
    return (
      <LanguageSkillCard
        className="stack-language-card"
        id={id}
        key={id}
        transitionDelay={`${index * 90}ms`}
      />
    );
  }

  function renderStackUsageMarker(usage: StackUsageId) {
    if (!usage) {
      return null;
    }

    return (
      <span className="skill-usage-marker" aria-label={LL.stackUi.usage[usage]()} title={LL.stackUi.usage[usage]()}>
        {getStackUsageCategories(usage).map((categoryId) => renderStackUsageIcon(categoryId))}
      </span>
    );
  }

  function renderStackUsageIcon(categoryId: ProjectCategoryId) {
    const projectGroup = getProjectGroup(categoryId);
    const UsageIcon = projectGroup.icon;

    return (
      <span className={`skill-usage-icon skill-usage-${categoryId}`} key={categoryId}>
        <UsageIcon size={14} strokeWidth={1.6} />
      </span>
    );
  }

  return (
    <section id="stack" className="stack-section px-5 py-24 sm:px-8">
      <div className="content-container">
        <div className="stack-intro-grid">
          <SectionHeading
            kicker={LL.sections.stackKicker()}
            title={LL.sections.stackTitle()}
            titleClassName="max-w-4xl"
          />

          <div className="stack-language-panel">
            {languageSkillIds.map((id, index) => renderLanguageSkill(id, index))}
          </div>
        </div>

        <div className="stack-groups">
          {stackGroups.map((group, index) => renderStackGroup(group, index))}
        </div>
      </div>
    </section>
  );
}

function getStackItem(stackId: StackId): StackItem {
  return stackItems.find((item) => item.id === stackId) ?? stackItems[0];
}

function getStackUsageCategories(usage: StackUsageId): ProjectCategoryId[] {
  if (!usage) {
    return [];
  }

  if (usage === "both") {
    return ["commercial", "hobby"];
  }

  return [usage];
}

function getProjectGroup(categoryId: ProjectCategoryId): ProjectGroup {
  return projectGroups.find((group) => group.id === categoryId) ?? projectGroups[0];
}
