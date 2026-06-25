import { cn } from "@/lib/utils";

import MaxWidthWrapper from "./MaxWidthWrapper";
import Logo from "../../public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  const data = [
    {
      title: "Haqqımızda",
      href: "/about",
    },
    {
      title: "Bizimlə əlaqə",
      href: "/contact",
    },
    {
      title: "Resurslar",
      href: "/resources",
    },
  ];

  return (
    <footer className={` w-full bg-black  `}>
      <div className="w-full bg-[#696DD4]">
        <MaxWidthWrapper className="flex py-10 items-start lg:items-center justify-between flex-col lg:flex-row gap-14">
          <div className="text-white font-bold text-[24px] md:text-[34px] ">
            Süni İntellekt yeniliklərindən xəbərdar olmaq üçün abonə olun
          </div>
          <div className="flex gap-4 w-full max-w-lg">
            <input
              type="text"
              placeholder="Email ünvanınızı daxil edin"
              className="px-4 py-2 rounded-md text-white bg-white/20 flex-1 min-w-0"
            />
            <button className="bg-white text-black font-bold px-4 py-2 rounded-md shrink-0">
              Abunə ol
            </button>
          </div>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper>
        <div className="flex py-11 items-center justify-between border-b border-white/10">
          <div className="font-bold">
            <Image src={Logo} alt="Logo" className=" w-auto" />
          </div>

          <ul className=" gap-14 hidden md:flex">
            {data.map((item) => (
              <li
                key={item.href}
                className={cn(
                  "text-sm font-medium text-white group relative py-2.5",
                )}
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-6 text-center text-sm text-white/50 flex items-center justify-between flex-wrap gap-y-6">
          <p>&copy; {new Date().getFullYear()} NAIC. Bütün hüquqlar qorunur.</p>
          <div className="flex gap-4 flex-wrap">
            <div className="flex items-center text-white gap-2">
              <span className="text-sm text-white bg-[#454545] p-2 rounded-md">
                <MessageCircle size={12} />
              </span>
              Facebook
            </div>
            <div className="flex items-center text-white gap-2">
              <span className="text-sm text-white bg-[#454545] p-2 rounded-md">
                <MessageCircle size={12} />
              </span>
              Twitter
            </div>
            <div className="flex items-center text-white gap-2">
              <span className="text-sm text-white bg-[#454545] p-2 rounded-md">
                <MessageCircle size={12} />
              </span>
              Instagram
            </div>
            <div className="flex items-center text-white gap-2">
              <span className="text-sm text-white bg-[#454545] p-2 rounded-md">
                <MessageCircle size={12} />
              </span>
              LinkedIn
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
