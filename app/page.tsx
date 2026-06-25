import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import HomeHero from "./(home)/_components/HomeHero";
import HomeStats from "./(home)/_components/HomeStats";
import AiLabSection from "../components/shared/AiLabSection";
import WhoAreWe from "../components/shared/WhoAreWe";
import Projects from "./(home)/_components/Projects";
import LatestNews from "./(home)/_components/LatestNews";
import ApplicationForm from "./(home)/_components/_apply/ApplicationForm";
import Links from "./(home)/_components/Links";

export default function Home() {
  return (
    <main className="min-h-screen bg-black pt-10 overflow-hidden">
      <MaxWidthWrapper className="max-w-400!">
        <HomeHero />
      </MaxWidthWrapper>
      <HomeStats />
      <AiLabSection />
      <WhoAreWe />
      <Projects />
      <LatestNews />
      <ApplicationForm />
      <Links />
    </main>
  );
}
