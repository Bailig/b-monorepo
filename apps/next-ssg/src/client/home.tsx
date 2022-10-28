import { useEffect, useState } from "react";

interface Data {
  data: string;
}

export const Home = () => {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Bailig/b-monorepo/main/apps/next-ssg/data/app-data.json"
    )
      .then((res) => res.json())
      .then((data: Data) => setData(data));
  }, []);

  if (!data) {
    return <>Loading...</>;
  }
  return <>{data.data}</>;
};
