import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { projectImages } from "@/constants/projectImages";

function Projects() {
  return (
    <MaxWidthWrapper className="py-20 ">
      <div className="flex lg:items-center items-start flex-col lg:flex-row justify-between">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Əsas{" "}
          <span className="bg-brand-gradient relative bg-clip-text text-transparent">
            layihələr
            <div className="absolute top-1/2 left-1/2 transform -translate-1/2 size-40 bg-pink-300 rounded-full mix-blend-screen filter blur-3xl opacity-20 "></div>
          </span>{" "}
        </h1>
        <p className="text-[#BFBFBF] text-[14px] leading-10 leading-relaxed lg:max-w-lg">
          Azərbaycan Süni İntellekt Laboratoriyası olaraq həyata keçirilən bütün
          layihələr süni intellekt texnologiyalarına əsaslanır. Layihələrin
          məqsədi istifadəçilərin işlərini daha asan, effektiv və əlçatan hala
          gətirməkdir.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="relative overflow-hidden rounded-[1.5rem]">
          <img
            src={projectImages.academy.image}
            className="w-full h-full object-cover"
            alt="Academy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <img
            src={projectImages.academy.logo}
            className="absolute left-1/2 bottom-3 -translate-x-1/2 w-30 object-contain"
            alt="Academy Logo"
          />
        </div>
        <div className="relative overflow-hidden rounded-[1.5rem]">
          <img
            src={projectImages.datarace.image}
            className="w-full h-full object-cover"
            alt="Datarace"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <img
            src={projectImages.datarace.logo}
            className="absolute left-1/2 bottom-3 -translate-x-1/2 w-30 object-contain"
            alt="Datarace Logo"
          />
        </div>
        <div className="relative overflow-hidden rounded-[1.5rem]">
          <img
            src={projectImages.legalens.image}
            className="w-full h-full object-cover"
            alt="Legalens"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <img
            src={projectImages.legalens.logo}
            className="absolute left-1/2 bottom-3 -translate-x-1/2 w-30 object-contain"
            alt="Legalens Logo"
          />
        </div>
        <div className="relative overflow-hidden rounded-[1.5rem]">
          <img
            src={projectImages.neyron.image}
            className="w-full h-full object-cover"
            alt="Neyron"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <img
            src={projectImages.neyron.logo}
            className="absolute left-1/2 bottom-3 -translate-x-1/2 w-30 object-contain"
            alt="Neyron Logo"
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Projects;
