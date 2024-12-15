import { api } from "~/trpc/server";
import Intro from "./_components/intro";
import About from "./_components/about";
import Application from "./_components/application";
import GenericSection from "./_components/content";
import { activities, images } from "lib/data";
import Team from "./_components/team";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();
  return (
    <div>
      <Intro />
      <GenericSection
        heading="Ideas emerge here"
        subHeading="Activities"
        description={
          <>
            <ul className="list-disc pl-5">
              {activities.map((activity, index) => (
                <li key={index} className="mb-2">
                  {activity.name}
                </li>
              ))}
            </ul>
          </>
        }
        images={images} // Pass the images array here
      />
      <Application />
      <About />
      <Team />
    </div>
  );
}
