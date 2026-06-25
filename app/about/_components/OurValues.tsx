import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Image from "next/image";
import { valuesCards } from "@/constants/cards";
import { Card } from "@/constants/cards";

export default function OurValues() {
  return (
    <MaxWidthWrapper className="py-20 flex flex-col">
      <h2 className="text-2xl md:text-5xl font-bold text-white mb-16 leading-tight ">
        Bizim{" "}
        <span className="relative inline-block mb-2">
          <span className="bg-brand-gradient z-20 relative  bg-clip-text text-transparent">
            Dəyərlərimiz
          </span>
          <div className="absolute z-10 top-1/2 left-1/2 transform -translate-1/2 size-60 bg-pink-300 rounded-full mix-blend-screen filter blur-3xl opacity-20 "></div>
        </span>{" "}
        <h3 className="text-[#A1A1AA] text-sm md:text-base z-20 leading-relaxed max-w-2xl font-light">
          Bizi birləşdirən və hər zaman inkişafımıza dəstək olan dəyərlərimiz.
        </h3>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {valuesCards.map((card: Card, index: number) => (
          <div
            className="relative group p-0.5 overflow-hidden rounded-[41.5px] group"
            key={index}
          >
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skewX(-30deg)] move-x translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[100%]"></div>
            <div className=" absolute -inset-0.5 rounded-[42px] bg-brand-gradient opacity-10 group-hover:opacity-50 transition-all duration-300"></div>
            <div className="bg-[#050505] isolate relative rounded-[2.5rem] h-full p-7 flex flex-col items-center text-center group-hover:bg-black/80 transition-all duration-300">
              <div className="flex w-full justify-start items-center mb-6">
                <card.image
                  className="object-contain text-[#696DD4] size-12"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-[24px] font-extrabold w-full text-white mb-4 leading-tight text-left">
                {card.title}
              </h3>
              <p className="text-white text-[14px] leading-relaxed text-start w-full">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
