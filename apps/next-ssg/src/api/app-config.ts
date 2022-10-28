export interface AppConfig {
  id: string;
  name: string;
}

export const fetchAppConfig = async (): Promise<AppConfig[]> => {
  const res = await fetch(
    "https://raw.githubusercontent.com/Bailig/b-monorepo/main/apps/next-ssg/data/app-configs.json"
  );
  return await res.json();
};
