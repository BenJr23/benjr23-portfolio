import { About } from "../components/About";
import { getAboutMe } from "../_actions/about/getaboutme";
import { getUserByEnvCode } from "../_actions/home/getuser";
import { mockAboutMe, AboutMeCategory, mockUser } from "../lib/mock";

const narrativeCategories = [
  AboutMeCategory.PERSONAL_BACKGROUND,
  AboutMeCategory.WORK_PHILOSOPHY,
  AboutMeCategory.TECHNICAL_EXPERTISE,
  AboutMeCategory.CAREER_HIGHLIGHTS,
  AboutMeCategory.CONTINUOUS_LEARNING,
];

export default async function AboutPage() {
  const [aboutEntries, user] = await Promise.all([
    getAboutMe().catch(() => {
      return mockAboutMe.filter((entry) => narrativeCategories.includes(entry.category));
    }),
    getUserByEnvCode().catch(() => null),
  ]);

  return <About aboutMeEntries={aboutEntries} user={user ?? mockUser} />;
}
