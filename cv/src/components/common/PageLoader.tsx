"use client";

import { Code2 } from "lucide-react";
import { profile } from "@/data/site";
import { useI18nContext } from "@/i18n/client";

export function PageLoader() {
  const { LL } = useI18nContext();

  return (
    <div className="page-loader">
      <div className="loader-card">
        <div className="loader-orbit">
          <span className="loader-orbit-ring" />
          <span className="loader-orbit-ring loader-orbit-ring-inner" />
          <span className="loader-orbit-dot" />
          <div className="loader-mark">
            <Code2 size={28} strokeWidth={2.3} />
          </div>
        </div>
        <p className="loader-kicker">{LL.loader.kicker()}</p>
        <h2>{profile.name}</h2>
        <p className="loader-status">{LL.loader.status()}</p>
      </div>
    </div>
  );
}
