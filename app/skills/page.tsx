import { Skills } from "../components/Skills";
import { getSkills } from "../_actions/skills/getskills";
import { mockFrameworks, mockTools } from "../lib/mock";

export default async function SkillsPage() {
  const { tools, frameworks } = await getSkills().catch(() => ({ tools: mockTools, frameworks: mockFrameworks }));

  return <Skills tools={tools} frameworks={frameworks} />;
}
