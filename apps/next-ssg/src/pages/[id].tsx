import { fetchAppConfig } from "../api";
import { Home } from "../client/home";

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
