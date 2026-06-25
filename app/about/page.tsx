import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import AiLabSection from "@/components/shared/AiLabSection";
import WhoAreWe from "@/components/shared/WhoAreWe";
import OurMissions from "./_components/OurMissons";
import OurValues from "./_components/OurValues";

function Page() {
  return (
    <main className="min-h-screen bg-black pt-10 overflow-hidden">
      <WhoAreWe />
      <AiLabSection />
      <OurMissions />
      <OurValues />
    </main>
  );
}

export default Page;
