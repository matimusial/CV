import { BriefcaseBusiness, FolderKanban, Layers3, Mail, UserRound } from "lucide-react";
import { useI18nContext } from "@/i18n/client";
import type { LucideIcon } from "lucide-react";

interface DockItem {
  href: string;
  icon: LucideIcon;
  id: "profile" | "projects" | "experience" | "stack";
}

const dockItems = [
  { id: "profile", href: "#profile", icon: UserRound },
  { id: "projects", href: "#projects", icon: FolderKanban },
  { id: "stack", href: "#stack", icon: Layers3 },
  { id: "experience", href: "#experience", icon: BriefcaseBusiness },
] as const satisfies ReadonlyArray<DockItem>;

export function MobileDock() {
  const { LL } = useI18nContext();

  const navLabels = {
    profile: LL.nav.profile(),
    projects: LL.nav.projects(),
    experience: LL.nav.experience(),
    stack: LL.nav.stack(),
    contact: LL.nav.contact(),
  };

  function renderDockItem(item: DockItem) {
    const Icon = item.icon;

    return (
      <a className="mobile-dock-item" href={item.href} key={item.href}>
        <Icon aria-hidden="true" size={18} strokeWidth={2.25} />
        <span>{navLabels[item.id]}</span>
      </a>
    );
  }

  return (
    <nav className="mobile-dock" aria-label={LL.nav.mobileAria()}>
      {dockItems.map((item) => renderDockItem(item))}

      <a className="mobile-dock-item mobile-dock-primary" href="#contact">
        <Mail aria-hidden="true" size={18} strokeWidth={2.25} />
        <span>{navLabels.contact}</span>
      </a>
    </nav>
  );
}
