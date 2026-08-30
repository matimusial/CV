"use client";

import { useContext } from "react";
import { initI18nReact } from "typesafe-i18n/react";
import type { I18nContextType } from "typesafe-i18n/react";
import { translations } from "@/i18n/translations";
import type { Locale, Translation } from "@/i18n/translations";

const { component: TypesafeI18n, context: I18nContext } = initI18nReact<Locale, Translation>(translations);

export default TypesafeI18n;
export { I18nContext, useI18nContext };

function useI18nContext(): I18nContextType<Locale, Translation> {
  return useContext(I18nContext);
}
