import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { news } from "@/constants/news";

export default function LatestNews() {
  return (
    <div className="bg-[#141414] py-24">
      <MaxWidthWrapper className="flex flex-col ">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 relative isolate">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] -z-10"></div>

          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] max-w-3xl">
            Ən son Süni İntellekt{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              yenilikləri.
            </span>
          </h2>
          <Link
            href="/news"
            className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors inline-block md:mb-2 whitespace-nowrap"
          >
            Hamısına bax
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {news.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group flex flex-col border border-white/20 hover:border-white/40 transition-colors rounded-[2rem] overflow-hidden bg-[#141414] relative"
            >
              <div className="relative h-64 w-full bg-[#111] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />

                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-3 rounded-2xl border border-white/10 text-white transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <div className="p-6 pb-8 flex-1 flex flex-col">
                <h3 className="text-white font-bold text-[20px] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/60 text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
