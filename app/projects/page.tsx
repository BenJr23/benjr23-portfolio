import { Projects } from "../components/Projects";
import { getProjects } from "../_actions/projects/getprojects";
import { mockProjects } from "../lib/mock";

export default async function ProjectsPage() {
  const projects = await getProjects().catch(() => mockProjects);

  return <Projects projects={projects} />;
}
