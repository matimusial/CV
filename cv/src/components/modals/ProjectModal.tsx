import { Check, ChevronLeft, ChevronRight, ExternalLink, Image as ImageIcon, Maximize2, Minimize2 } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useI18nContext } from "@/i18n/client";
import { ModalFrame } from "@/components/common/ModalFrame";
import { projectMeta } from "@/data/site";
import { getProjectImages } from "@/services/projects";
import type { ProjectId, StackId } from "@/data/site";

interface ProjectModalProps {
  onClose: () => void;
  projectId: ProjectId;
}

export function ProjectModal({ onClose, projectId }: ProjectModalProps) {
  const { LL } = useI18nContext();
  const [images, setImages] = useState<string[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const project = LL.projects[projectId];
  const meta = projectMeta[projectId];
  const category = LL.projectsUi.categories[meta.category];
  const activeImage = images[activeImageIndex] ?? null;
  const hasImageGallery = meta.imageDirectory !== null;
  const hasMultipleImages = images.length > 1;
  const responsibilities = [
    project.responsibilities.item1(),
    project.responsibilities.item2(),
    project.responsibilities.item3(),
    project.responsibilities.item4(),
  ];
  const title = project.title();
  const externalLinkLabel = meta.category === "commercial"
    ? LL.projectModal.productWebsite()
    : LL.projectModal.githubRepository();

  useEffect(() => {
    if (!hasImageGallery) {
      return;
    }

    const controller = new AbortController();

    getProjectImages(projectId, controller.signal)
      .then((projectImages) => {
        setImages(projectImages);
        setActiveImageIndex(0);
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setImages([]);
        }
      });

    return () => controller.abort();
  }, [hasImageGallery, projectId]);

  function renderTechnology(technology: StackId) {
    return <span className="tag-pill" key={technology}>{LL.stack[technology].name()}</span>;
  }

  function renderResponsibility(item: string) {
    return (
      <li key={item}>
        <Check size={16} />
        {item}
      </li>
    );
  }

  function renderProjectThumbnail(imageUrl: string, index: number) {
    const isActive = index === activeImageIndex;

    return (
      <button
        className={isActive ? "project-gallery-thumbnail is-active" : "project-gallery-thumbnail"}
        key={imageUrl}
        onClick={() => setActiveImageIndex(index)}
        title={`${index + 1} / ${images.length}`}
      >
        <span style={{ backgroundImage: `url(${imageUrl})` }} />
      </button>
    );
  }

  return (
    <>
      <ModalFrame
        className="project-modal"
        kicker={LL.projectModal.kicker()}
        onClose={onClose}
        title={title}
      >
        <div className="project-modal-body">
          <div className="project-modal-tags">
            <span className="project-category-pill">{category.badge()}</span>
            <a
              className="project-external-link"
              href={meta.externalUrl}
              rel="noreferrer"
              target="_blank"
            >
              {meta.category === "commercial" ? <ExternalLink size={17} /> : <SiGithub size={18} />}
              {externalLinkLabel}
            </a>
          </div>

          {hasImageGallery ? (
            <div className="project-gallery">
              <div className="project-visual">
            {activeImage ? (
              <div
                className="project-visual-image"
                key={activeImage}
                style={{ backgroundImage: `url(${activeImage})` }}
              />
            ) : (
              <div className="project-visual-note">
                <ImageIcon size={17} />
                {LL.projectModal.imageNote()}
              </div>
            )}

            {activeImage ? (
              <button
                className="project-gallery-fullscreen"
                onClick={() => setIsImageExpanded(true)}
                title={LL.projectModal.fullscreen()}
              >
                <Maximize2 size={20} />
              </button>
            ) : null}

            {hasMultipleImages ? (
              <>
                <button
                  className="project-gallery-control is-previous"
                  onClick={() => setActiveImageIndex(activeImageIndex === 0 ? images.length - 1 : activeImageIndex - 1)}
                  title={LL.projectModal.previousImage()}
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  className="project-gallery-control is-next"
                  onClick={() => setActiveImageIndex((activeImageIndex + 1) % images.length)}
                  title={LL.projectModal.nextImage()}
                >
                  <ChevronRight size={22} />
                </button>
              </>
            ) : null}

            {activeImage ? (
              <span className="project-gallery-counter">{activeImageIndex + 1} / {images.length}</span>
            ) : null}
              </div>

              {hasMultipleImages ? (
                <div className="project-gallery-thumbnails">
                  {images.map((imageUrl, index) => renderProjectThumbnail(imageUrl, index))}
                </div>
              ) : null}
            </div>
          ) : null}

        <div className="project-detail-grid">
          <section className="project-detail-panel project-detail-panel-wide">
            <p className="project-detail-label">{LL.projectModal.description()}</p>
            <p className="project-detail-text">{project.overview()}</p>
          </section>

          <section className="project-detail-panel">
            <p className="project-detail-label">{LL.projectModal.technologies()}</p>
            <div className="project-tech-list">{meta.technologies.map((technology) => renderTechnology(technology))}</div>
          </section>

          <section className="project-detail-panel">
            <p className="project-detail-label">{LL.projectModal.responsibilities()}</p>
            <ul className="project-check-list">{responsibilities.map((item) => renderResponsibility(item))}</ul>
          </section>

          </div>
        </div>
      </ModalFrame>

      {isImageExpanded && activeImage
        ? createPortal(
            <div className="project-image-viewport">
              <div
                className="project-image-viewport-image"
                key={activeImage}
                style={{ backgroundImage: `url(${activeImage})` }}
              />

              <button
                className="project-image-viewport-close"
                onClick={() => setIsImageExpanded(false)}
                title={LL.projectModal.exitFullscreen()}
              >
                <Minimize2 size={22} />
              </button>

              {hasMultipleImages ? (
                <>
                  <button
                    className="project-gallery-control is-previous"
                    onClick={() => setActiveImageIndex(activeImageIndex === 0 ? images.length - 1 : activeImageIndex - 1)}
                    title={LL.projectModal.previousImage()}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    className="project-gallery-control is-next"
                    onClick={() => setActiveImageIndex((activeImageIndex + 1) % images.length)}
                    title={LL.projectModal.nextImage()}
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              ) : null}

              <span className="project-gallery-counter">{activeImageIndex + 1} / {images.length}</span>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
