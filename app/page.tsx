import { Home } from "./components/Home";
import { getUserByEnvCode } from "./_actions/home/getuser";
import { mockUser } from "./lib/mock";

export default async function Page() {
  const user = await getUserByEnvCode().catch(() => null);

  return <Home user={user ?? mockUser} />;
}
