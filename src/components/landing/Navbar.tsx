"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/landing/data";
import Image from "next/image";
import DownloadButton from "@/components/Buttom/buttom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E4DEC9] bg-[#FFFFFF] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#153420]">
          <Image
    src="/logo.jpg"
    alt="Logo"
    width={48}
    height={48}
    className="h-full w-full object-cover"
  />
            </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#2B3B30] transition hover:text-[#153420]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
  <div className="flex flex-wrap gap-5">
    <DownloadButton
      href="#register"
      text="سجل الآن مجانًا"
    />
  </div>
</div>

<button
  onClick={() => setOpen(!open)}
  className="text-[#153420] md:hidden"
  aria-label="Menu"
>
  {open ? <X size={26} /> : <Menu size={26} />}
</button>
      </div>

      {open && (
        <div className="border-t border-[#E4DEC9] bg-[#F8F4EA] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-cairo text-[20px] font-semibold leading-none text-[#2A2A2A]"              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              className="mt-2 rounded-full bg-[#C48E20] px-6 py-3 text-center text-sm font-semibold text-white"
            >
              سجل الآن مجانًا
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
