import { About } from "../components/About";
import { getAboutMe } from "../_actions/about/getaboutme";
import { mockAboutMe, AboutMeCategory } from "../lib/mock";

const narrativeCategories = [
  AboutMeCategory.PERSONAL_BACKGROUND,
  AboutMeCategory.WORK_PHILOSOPHY,
  AboutMeCategory.TECHNICAL_EXPERTISE,
  AboutMeCategory.CAREER_HIGHLIGHTS,
  AboutMeCategory.CONTINUOUS_LEARNING,
];

export default async function AboutPage() {
  const aboutEntries = await getAboutMe().catch(() => {
    return mockAboutMe.filter((entry) => narrativeCategories.includes(entry.category));
  });

  return <About aboutMeEntries={aboutEntries} />;
}
