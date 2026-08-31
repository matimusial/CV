import {
  BriefcaseBusiness,
  BrainCircuit,
  Database,
  Network,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  SiFigma,
  SiGit,
  SiFastapi,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";

export interface Profile {
  email: string;
  initials: string;
  name: string;
  phone: string;
}

export interface ContactForm {
  company: string;
  email: string;
  message: string;
  name: string;
}

interface ExperienceCompany {
  name: string;
  url: string;
}

export interface NavigationItem {
  href: string;
  id: "profile" | "projects" | "experience" | "education" | "stack" | "contact";
}

export interface ProjectMeta {
  accent: string;
  category: ProjectCategoryId;
  externalUrl: string;
  imageDirectory: string | null;
  technologies: ReadonlyArray<StackId>;
}

export interface ProjectGroup {
  icon: LucideIcon;
  id: ProjectCategoryId;
  projectIds: ReadonlyArray<ProjectId>;
}

export type ProjectCategoryId = "commercial" | "hobby";

export type StackId =
  | "react"
  | "svelte"
  | "typescript"
  | "tailwind"
  | "restapi"
  | "postgres"
  | "mssql"
  | "spring"
  | "python"
  | "fastapi"
  | "machineLearning"
  | "chatgpt"
  | "git"
  | "figma";

export interface StackItem {
  commercialExperience: StackCommercialExperienceId | null;
  id: StackId;
  icon: StackIcon;
  projectId: ProjectId | null;
  usage: StackUsageId;
}

export interface StackGroup {
  id: StackGroupId;
  stackIds: ReadonlyArray<StackId>;
}

export type StackCommercialExperienceId = "fiveMonths" | "oneYearThreeMonths";
export type StackGroupId = "frontend" | "backend" | "utils";
export type StackIcon = LucideIcon | IconType;
export type StackUsageId = "commercial" | "hobby" | "both" | "";

export const profile: Profile = {
  name: "Mateusz Musiał",
  initials: "MM",
  email: "matimusial5@gmail.com",
  phone: "600 551 892",
};

export const contactEndpoint = "/api/contact";
export const cvDownloadUrl = "/documents/Mateusz-Musial-CV.pdf";

export const initialContactForm: ContactForm = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export const heroImageUrl =
  "/images/profile.jpg";

export const navigationItems = [
  { id: "profile", href: "#profile" },
  { id: "projects", href: "#projects" },
  { id: "stack", href: "#stack" },
  { id: "experience", href: "#experience" },
  { id: "education", href: "#education" },
  { id: "contact", href: "#contact" },
] as const satisfies ReadonlyArray<NavigationItem>;

export const projectIds = ["eacloud", "eauditor", "expensetracker", "emailservice", "cv"] as const;
export type ProjectId = (typeof projectIds)[number];

export const projectGroups = [
  { id: "commercial", icon: BriefcaseBusiness, projectIds: ["eacloud", "eauditor"] },
  { id: "hobby", icon: Sparkles, projectIds: ["expensetracker", "emailservice", "cv"] },
] as const satisfies ReadonlyArray<ProjectGroup>;

export const projectMeta: Record<ProjectId, ProjectMeta> = {
  eacloud: {
    accent: "from-emerald-200 to-sky-200",
    category: "commercial",
    externalUrl: "https://www.eauditor.eu/cloud",
    imageDirectory: "/images/projects/eac",
    technologies: ["svelte", "typescript", "restapi", "git", "figma"],
  },
  eauditor: {
    accent: "from-stone-200 to-amber-200",
    category: "commercial",
    externalUrl: "https://www.eauditor.eu/",
    imageDirectory: "/images/projects/ea",
    technologies: ["svelte", "typescript", "restapi", "postgres", "mssql", "spring", "git"],
  },
  expensetracker: {
    accent: "from-sky-200 to-emerald-200",
    category: "hobby",
    externalUrl: "https://github.com/matimusial/Smart-Expense-Tracker",
    imageDirectory: "/images/projects/tracker",
    technologies: ["react", "typescript", "restapi", "postgres", "spring", "python", "fastapi", "machineLearning", "git"],
  },
  emailservice: {
    accent: "from-cyan-200 to-lime-200",
    category: "hobby",
    externalUrl: "https://github.com/matimusial/EmailService",
    imageDirectory: "/images/projects/emailservice",
    technologies: ["svelte", "typescript", "restapi", "postgres", "spring", "git"],
  },
  cv: {
    accent: "from-emerald-200 to-violet-200",
    category: "hobby",
    externalUrl: "https://github.com/matimusial/CV",
    imageDirectory: null,
    technologies: ["react", "typescript", "tailwind", "git"],
  },
};

export const experienceIds = ["fullstack", "juniorFrontend", "internship", "digeInternship", "logicNetInternship"] as const;
export type ExperienceId = (typeof experienceIds)[number];

const btcCompany: ExperienceCompany = { name: "BTC", url: "https://btc.com.pl/" };
const digeCompany: ExperienceCompany = { name: "Dige", url: "https://dige.rs/" };
const logicNetCompany: ExperienceCompany = { name: "Logic Net", url: "https://logicnet.pl/" };

export const experienceCompanies: Record<ExperienceId, ExperienceCompany> = {
  fullstack: btcCompany,
  juniorFrontend: btcCompany,
  internship: btcCompany,
  digeInternship: digeCompany,
  logicNetInternship: logicNetCompany,
};

export const educationIds = ["engineering", "technicalSchool"] as const;
export type EducationId = (typeof educationIds)[number];

export const educationInstitutionUrls = {
  engineering: "https://www.wi.zut.edu.pl/pl/",
  technicalSchool: "https://technikumcyfrowe.pl/",
} as const satisfies Record<EducationId, string>;

export const languageSkillIds = ["englishB2"] as const;
export type LanguageSkillId = (typeof languageSkillIds)[number];

export const stackGroups = [
  { id: "frontend", stackIds: ["react", "svelte", "typescript", "tailwind"] },
  { id: "backend", stackIds: ["restapi", "postgres", "mssql", "spring", "python", "fastapi", "machineLearning"] },
  { id: "utils", stackIds: ["git", "figma", "chatgpt"] },
] as const satisfies ReadonlyArray<StackGroup>;

export const stackItems = [
  { id: "react", commercialExperience: null, icon: SiReact, projectId: "expensetracker", usage: "hobby" },
  { id: "svelte", commercialExperience: "oneYearThreeMonths", icon: SiSvelte, projectId: "eacloud", usage: "commercial" },
  { id: "typescript", commercialExperience: "oneYearThreeMonths", icon: SiTypescript, projectId: "eacloud", usage: "both" },
  { id: "tailwind", commercialExperience: null, icon: SiTailwindcss, projectId: "cv", usage: "hobby" },
  { id: "restapi", commercialExperience: "oneYearThreeMonths", icon: Network, projectId: "eacloud", usage: "both" },
  { id: "postgres", commercialExperience: "fiveMonths", icon: SiPostgresql, projectId: "eauditor", usage: "both" },
  { id: "mssql", commercialExperience: "fiveMonths", icon: Database, projectId: "eauditor", usage: "commercial" },
  { id: "spring", commercialExperience: "fiveMonths", icon: SiSpringboot, projectId: "eauditor", usage: "both" },
  { id: "python", commercialExperience: null, icon: SiPython, projectId: "expensetracker", usage: "hobby" },
  { id: "fastapi", commercialExperience: null, icon: SiFastapi, projectId: "expensetracker", usage: "hobby" },
  { id: "machineLearning", commercialExperience: null, icon: BrainCircuit, projectId: "expensetracker", usage: "hobby" },
  { id: "git", commercialExperience: "oneYearThreeMonths", icon: SiGit, projectId: "eacloud", usage: "commercial" },
  { id: "figma", commercialExperience: "oneYearThreeMonths", icon: SiFigma, projectId: "eacloud", usage: "commercial" },
  { id: "chatgpt", commercialExperience: null, icon: SiOpenai, projectId: null, usage: "" },
] as const satisfies ReadonlyArray<StackItem>;
