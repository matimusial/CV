import { BadgeCheck, Languages } from "lucide-react";
import { useI18nContext } from "@/i18n/client";
import type { LanguageSkillId } from "@/data/site";

interface LanguageSkillCardProps {
  className?: string;
  id: LanguageSkillId;
  transitionDelay?: string;
}

export function LanguageSkillCard({ className = "", id, transitionDelay }: LanguageSkillCardProps) {
  const { LL } = useI18nContext();
  const languageSkill = LL.languageSkills[id];
  const certificate = languageSkill.certificate();
  const level = languageSkill.level();

  return (
    <article
      className={`language-skill-card reveal ${className}`}
      data-reveal
      style={{ transitionDelay }}
    >
      <span className="language-skill-icon">
        <Languages size={19} strokeWidth={1.7} />
      </span>

      <span className="language-skill-copy">
        <p className="info-kicker">{languageSkill.category()}</p>
        <h3>{languageSkill.title()}</h3>
        <span>{languageSkill.text()}</span>
      </span>

      <span className="language-skill-badge">
        <BadgeCheck size={15} strokeWidth={1.8} />
        {certificate ? `${level} - ${certificate}` : level}
      </span>
    </article>
  );
}
