"use client";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { motion } from "framer-motion";
import { CountingNumber } from "@/components/animate-ui/primitives/texts/counting-number";

export default function HomeStats() {
  return (
    <MaxWidthWrapper className="grid grid-cols-2 lg:grid-cols-4 items-stretch gap-4 py-12 flex-wrap">
      <div className="md:bg-[#141414] bg-transparent  px-4 py-8 rounded-[2rem] flex flex-col items-center justify-center ">
        <p className="text-[40px] lg:text-[60px] font-bold text-white text-nowrap">
          <CountingNumber number={4} inView />
        </p>
        <p className="text-white text-[18px] text-nowrap">Uğurlu layihə</p>
      </div>
      <div className="md:bg-[#141414] bg-transparent  px-4 py-8 rounded-[2rem] flex flex-col items-center justify-center">
        <p className="text-[40px] lg:text-[60px] font-bold text-white text-nowrap">
          <CountingNumber number={10} inView />
          M+
        </p>
        <p className="text-white text-[18px] text-nowrap">İcma üzvləri</p>
      </div>
      <div className="md:bg-[#141414] bg-transparent  px-4 py-8 rounded-[2rem] flex flex-col items-center justify-center">
        <p className="text-[40px] lg:text-[60px] font-bold text-white text-nowrap">
          <CountingNumber number={20} inView />+
        </p>
        <p className="text-white text-[18px] text-nowrap">Sİ mühəndisi</p>
      </div>
      <div className="md:bg-[#141414] bg-transparent  px-4 py-8 rounded-[2rem] flex flex-col items-center justify-center">
        <p className="text-[40px] lg:text-[60px] font-bold text-white text-nowrap">
          <CountingNumber number={800} inView />
        </p>
        <p className="text-white text-[18px] text-nowrap">Məzunlar</p>
      </div>
    </MaxWidthWrapper>
  );
}
