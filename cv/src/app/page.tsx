import { CvPage } from "@/components/CvPage";

const available = process.env.AVAILABLE === "true";

export default function Home() {
  return <CvPage available={available} />;
}
