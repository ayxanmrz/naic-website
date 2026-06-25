import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";

function WhoAreWe() {
  return (
    <div className="py-10 ">
      <MaxWidthWrapper>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-16 leading-tight">
          <span className="bg-brand-gradient relative bg-clip-text text-transparent">
            Biz
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-40 bg-pink-300 rounded-full mix-blend-screen filter blur-3xl opacity-20 "></div>
          </span>{" "}
          kimik?
        </h1>
      </MaxWidthWrapper>
      <MaxWidthWrapper className=" max-w-400! h-[75vh] min-h-[600px]">
        <img
          src="/images/who-are-we.png"
          alt="Who Are We"
          className="w-full max-w-full h-full object-cover rounded-[2rem]"
        />
      </MaxWidthWrapper>
      <MaxWidthWrapper className="py-12 flex items-center flex-col lg:flex-row justify-between gap-10">
        <p className="text-[#BFBFBF] text-[20px] leading-10 leading-relaxed max-w-3xl">
          <strong className="text-white">
            Rəqəmsal İnkişaf və Nəqliyyat Nazirliyinin{" "}
          </strong>
          nəzdində fəaliyyət göstərən Azərbaycan Süni İntellekt Laboratoriyası
          (AI Lab) ölkəmizdə süni intellekt sahəsində tədqiqat və tədrisi təşviq
          edir. Laboratoriyamız süni İntellekt üzrə peşəkar kadr yetişdirməyi və
          bu sahədə rəqəmsal transformasiyanı sürətləndirməyi hədəfləyir.
        </p>
        <div className="grid w-full lg:w-auto grid-cols-2 lg:grid-cols-1 gap-5">
          <div className="flex flex-col items-start">
            <p className="text-[64px] font-bold text-white">4</p>
            <p className="text-[18px] text-[#BFBFBF]">Uğurlu layihə</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-[64px] font-bold text-white">10k+</p>
            <p className="text-[18px] text-[#BFBFBF]">İcma növü</p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default WhoAreWe;
