import Link from "next/link";
import { fetchAppConfig } from "../api";
import { App } from "../api/app-config";

export async function getStaticProps() {
  const apps = await fetchAppConfig();
  return {
    props: { apps },
  };
}

export default function Apps({ apps }: { apps: App[] }) {
  return (
    <div>
      <h1>Apps</h1>
      <div>
        {apps.map((app) => (
          <Link href={`/${app.id}`}>{app.name}</Link>
        ))}
      </div>
    </div>
  );
}
