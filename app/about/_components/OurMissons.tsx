import React from "react";
import Image from "next/image";
import { activities } from "@/constants/missionAndVision";
import MissionImage1 from "@/public/images/mission-1.png";
import MissionImage2 from "@/public/images/mission-2.png";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";

const OurMissions = () => {
  return (
    <MaxWidthWrapper>
      <section className="bg-black text-white py-16  space-y-16 md:space-y-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px]">
              <div className="absolute top-0 left-4 w-[160px] h-[260px] sm:w-[180px] sm:h-[300px] bg-[#635BFF] rounded-3xl opacity-90" />

              <div className="absolute bottom-0 left-[-20px] w-[160px] h-[220px] sm:w-[180px] sm:h-[240px] bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-3xl shadow-2xl" />

              <div className="absolute top-10 left-16 right-0 bottom-6 bg-[#121214] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image
                  src={MissionImage1}
                  alt="Our Mission"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Bizim{" "}
              <span className="relative inline-block">
                <span className="bg-brand-gradient z-20 bg-clip-text text-transparent relative">
                  Missiyamız
                </span>
                <div className="absolute top-1/2 z-10 left-1/2 transform -translate-1/2 size-40 bg-pink-300 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
              </span>
            </h2>

            <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed mb-8 max-w-2xl font-light">
              Məqsədimiz sənaye tərəfdaşları, innovativ şirkətlər və akademik
              institutlarla əməkdaşlıq edərək maarifləndirmə, tədqiqat və
              innovasiyanı təşviq edən platforma yaratmaqdır. Hüquqi və maliyyə
              dəstəyi ilə ekosistemi gücləndirib süni intellektin imkanlarını
              genişləndirmək üçün müxtəlif tədbirlər həyata keçiririk.
            </p>

            <div>
              <h3 className="text-white font-semibold text-base mb-4 tracking-wide">
                Fəaliyyətlərimiz:
              </h3>
              <ul className="space-y-3 max-w-xl">
                {activities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-[#635BFF] mt-[6px]" />
                    <span className="text-[#E4E4E7] text-sm md:text-base font-medium tracking-wide">
                      {activity}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Bizim{" "}
              <span className="relative inline-block">
                <span className="bg-brand-gradient z-20 bg-clip-text text-transparent relative">
                  Vizyonumuz
                </span>
                <div className="absolute top-1/2 z-10 left-1/2 transform -translate-1/2 size-40 bg-pink-300 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
              </span>
            </h2>

            <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed mb-8 max-w-2xl font-light">
              Məqsədimiz süni intellekt sahəsində qabaqcıl olmaq, ən müasir
              nailiyyətlərlə cəmiyyətə rəhbərlik etmək və işçi qüvvəsinin
              təhsili və təliminə əsaslanan güclü ekosistem qurmaqdır.
            </p>

            <div>
              <h3 className="text-white font-semibold text-base mb-4 tracking-wide">
                Fəaliyyətlərimiz:
              </h3>
              <ul className="space-y-3 max-w-xl">
                {activities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-[#6063C1] mt-[6px]" />
                    <span className="text-[#E4E4E7] text-sm md:text-base font-medium tracking-wide">
                      {activity}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px]">
              <div className="absolute top-0 right-4 w-[160px] h-[260px] sm:w-[180px] sm:h-[300px] bg-[#76BDC3] rounded-3xl opacity-90" />

              <div className="absolute bottom-0 right-[-20px] w-[160px] h-[220px] sm:w-[180px] sm:h-[240px] bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-3xl shadow-2xl" />

              <div className="absolute top-10 right-16 left-0 bottom-6 bg-[#121214] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image
                  src={MissionImage2}
                  alt="Our Mission"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default OurMissions;
