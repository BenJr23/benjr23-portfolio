import { Experience } from "../components/Experience";
import { getExperience } from "../_actions/experience/getexperience";
import { mockAboutMe, AboutMeCategory } from "../lib/mock";

const timelineCategories = [
  AboutMeCategory.WORK_EXPERIENCE,
  AboutMeCategory.EDUCATIONAL_BACKGROUND,
];

export default async function ExperiencePage() {
  const entries = await getExperience().catch(() => {
    return mockAboutMe.filter((e) => timelineCategories.includes(e.category));
  });

  return <Experience aboutEntries={entries} />;
}
