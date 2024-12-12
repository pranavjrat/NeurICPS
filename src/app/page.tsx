import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";
import Intro from "./_components/intro";
import About from "./_components/about";
import Application from "./_components/application";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();
  return (
    <div>
      <Intro />
      <About />
      <Application />
    </div>
  );
}
