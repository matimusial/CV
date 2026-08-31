import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { projectGroups, projectMeta } from "@/data/site";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useI18nContext } from "@/i18n/client";
import type { ProjectCategoryId, ProjectGroup, ProjectId } from "@/data/site";

interface ProjectsSectionProps {
  onOpenProject: (projectId: ProjectId) => void;
}

export function ProjectsSection({ onOpenProject }: ProjectsSectionProps) {
  const { LL } = useI18nContext();
  const [activeCategoryId, setActiveCategoryId] = useState<ProjectCategoryId>("commercial");
  const activeProjectGroup = getProjectGroup(activeCategoryId);

  function renderProjectTab(group: ProjectGroup) {
    const CategoryIcon = group.icon;
    const category = LL.projectsUi.categories[group.id];
    const isActive = activeCategoryId === group.id;

    return (
      <button
        className={isActive ? "project-tab is-active" : "project-tab"}
        key={group.id}
        onClick={() => setActiveCategoryId(group.id)}
      >
        <span className="project-tab-icon">
          <CategoryIcon size={17} />
        </span>
        <span className="project-tab-copy">
          <span>{category.title()}</span>
          <small>{group.projectIds.length}</small>
        </span>
      </button>
    );
  }

  function renderProjectGroup(group: ProjectGroup) {
    return (
      <div
        className="project-group reveal"
        data-reveal
      >
        <div className="project-group-grid">
          {group.projectIds.map((id, index) => renderProjectCard(id, index))}
        </div>
      </div>
    );
  }

  function renderProjectCard(id: ProjectId, index: number) {
    const project = LL.projects[id];
    const meta = projectMeta[id];
    const category = LL.projectsUi.categories[meta.category];

    return (
      <button
        className="project-card reveal group"
        data-reveal
        key={id}
        onClick={() => onOpenProject(id)}
        style={{ transitionDelay: `${index * 90}ms` }}
      >
        <div className={`project-accent bg-gradient-to-r ${meta.accent}`} />
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="project-card-topline">
              <span className="project-category-pill">{category.badge()}</span>
            </div>
            <h3 className="project-card-title">{project.title()}</h3>
            <p className="project-card-text">{project.description()}</p>
          </div>
          <span className="project-open">
            {LL.projectsUi.open()}
            <ArrowRight size={17} />
          </span>
        </div>
      </button>
    );
  }

  return (
    <section id="projects" className="projects-section px-5 py-24 sm:px-8">
      <div className="content-container">
        <SectionHeading kicker={LL.sections.projectsKicker()} title={LL.sections.projectsTitle()} />
        <div className="project-tabs">
          {projectGroups.map((group) => renderProjectTab(group))}
        </div>

        <div
          className="project-panel"
        >
          {renderProjectGroup(activeProjectGroup)}
        </div>
      </div>
    </section>
  );
}

function getProjectGroup(categoryId: ProjectCategoryId): ProjectGroup {
  return projectGroups.find((group) => group.id === categoryId) ?? projectGroups[0];
}
