import { api } from "~/trpc/server";
import Intro from "./_components/intro";
import About from "./_components/about";
import Application from "./_components/application";
import GenericSection from "./_components/content";
import { images } from "lib/data";
import Team from "./_components/team";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();
  return (
    <div>
      <Intro />
      <About />
      <GenericSection
        heading="Explore Nature"
        subHeading="Discover hidden gems"
        description="Find adventure, beauty, and serenity in every corner of the world."
        images={images} // Pass the images array here
      />
      <Team />
      <Application />
    </div>
  );
}
