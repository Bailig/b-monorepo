import { Home } from "../client/home";

interface App {
  id: string;
  name: string;
}

const fetchAppConfig = async (): Promise<App[]> => {
  const res = await fetch(
    "https://raw.githubusercontent.com/Bailig/b-monorepo/main/apps/next-ssg/data/app-configs.json"
  );
  return await res.json();
};

export async function getStaticPaths() {
  const apps = await fetchAppConfig();
  return {
    paths: apps.map((app) => ({ params: app })),
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  const apps = await fetchAppConfig();
  const appMap = new Map(apps.map((app) => [app.id, app]));
  return {
    props: { app: appMap.get(context.params.id) || {} },
  };
}

export default function Post({ app }: { app: App }) {
  return (
    <>
      id: {app.id} <br /> name: {app.name}
      <Home />
    </>
  );
}
