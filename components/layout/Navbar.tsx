"use client";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Logo from "@/public/logo.svg";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { navigations } from "../../constants/navigations";
import { createPortal } from "react-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  return (
    <header
      className={`fixed w-full z-50 bg-black py-5 ${scrolling ? "backdrop-blur-md bg-black/50" : ""}`}
    >
      <MaxWidthWrapper className="flex h-16 items-center justify-between">
        <Link href="/" className="relative py-2.5">
          <div className="font-bold">
            <Image src={Logo} alt="Logo" className=" w-auto" />
          </div>
        </Link>

        <ul className="hidden lg:flex gap-8">
          {navigations.map((item) => (
            <li
              key={item.href}
              className={cn("text-sm font-medium text-white group ")}
            >
              <Link href={item.href} className="relative py-2.5">
                <div
                  className={`absolute bottom-0 left-0 right-0 h-px bg-white scale-x-0 group-hover:scale-x-120 transition-transform duration-300 bg-brand-gradient ${pathname === item.href ? "scale-x-120" : ""}`}
                ></div>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        {mounted &&
          createPortal(
            <Sidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />,
            document.body,
          )}

        <button
          onClick={() => setIsSidebarOpen(true)}
          className="bg-[#262626] p-2 rounded-lg text-white lg:hidden"
        >
          <Menu />
        </button>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
