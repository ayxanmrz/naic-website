import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Image from "next/image";
import { aiLabCards, Card } from "@/constants/cards";

export default function AiLabSection() {
  return (
    <MaxWidthWrapper className="py-20 flex flex-col">
      <h2 className="text-2xl md:text-5xl font-bold text-white mb-16 leading-tight ">
        Azərbaycanda{" "}
        <span className="relative inline-block">
          <span className="bg-brand-gradient z-20 relative  bg-clip-text text-transparent">
            Süni İntellekt
          </span>
          <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-80 bg-pink-300 rounded-full mix-blend-screen filter blur-3xl opacity-20 "></div>
        </span>{" "}
        sahəsində
        <br className="hidden md:block" /> innovativ işlər görürük.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {aiLabCards.map((card: Card<string>, index: number) => (
          <div
            className="relative group overflow-hidden p-1 rounded-[43.5px]"
            key={index}
          >
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skewX(-30deg)] move-x translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[100%]"></div>
            <div className=" absolute -inset-1 rounded-[44px] bg-brand-gradient opacity-10 group-hover:opacity-50 transition-all duration-300"></div>
            <div className="bg-[#050505] isolate relative rounded-[2.5rem] h-full px-8 py-12 flex flex-col items-center text-center group-hover:bg-black/80 transition-all duration-300">
              <h3 className="text-[26px] font-bold text-white mb-4 leading-tight min-h-[56px] flex items-center">
                {card.title}
              </h3>
              <p className="text-white/60 text-[15px] leading-relaxed mb-12 flex-1">
                {card.description}
              </p>
              <div className="mt-auto">
                <Image
                  src={card.image}
                  alt="AI Icon"
                  width={200}
                  height={200}
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
