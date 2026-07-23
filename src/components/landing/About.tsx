"use client";

import Image from "next/image";
import Reveal from "./Reveal";

import {
  ShieldCheck,
  Radio,
  Gavel,
  Bell,
} from "lucide-react";

export default function About() {
  const features = [
    {
      title: "حسابات موثقة",
      icon: ShieldCheck,
    },
    {
      title: "بث حي واقعي",
      icon: Radio,
    },
    {
      title: "مزادات شفافة",
      icon: Gavel,
    },
    {
      title: "إشعارات فورية",
      icon: Bell,
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#FCFAF4] py-10"
    >
      <div className="mx-auto max-w-7xl px-26">

        {/* Heading */}

        <Reveal>
          <div className="mb-5 flex items-center justify-center gap-5">
            <span className="h-px w-28 bg-[#C99E39]/50" />

            <span className="font-bold text-[#222]">
              حول المنصة
            </span>

            <span className="h-px w-28 bg-[#C99E39]/50" />
          </div>
        </Reveal>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* RIGHT */}

          <Reveal>
            <div>

              <h2 className="text-4xl font-black leading-tight text-[#222]">
                كل ما تحتاجه لتجارة الأغنام في

                <div className="mt-2 block text-[#C48E20]">
                  منصة واحدة
                </div>
              </h2>

              <p className="mt-8 text-xl leading-9 text-[#2A2A2A]">
                توفر المنصة بيئة رقمية تجمع البائعين والمشترين وأصحاب
                المزارع والأسواق، وتساعدهم على عرض الأغنام، متابعة
                المزادات، مشاهدة البث المباشر والتواصل بسهولة وأمان.
              </p>

              <div className="mt-12 grid gap-5 md:grid-cols-2">

                {features.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-center justify-between rounded-2xl border border-[#E8E1CF] bg-white px-6 py-5 shadow-sm transition duration-300 hover:shadow-md"
                    >
                       <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8F3E7]">
                        <Icon
                          size={20}
                          className="text-[#C48E20]"
                        />
                      </div>
                      <span className="font-semibold text-[#222]">
                        {item.title}
                      </span>

                    
                    </div>
                  );
                })}

              </div>

            </div>
          </Reveal>

          {/* LEFT IMAGE */}

          <Reveal>
            <div className="flex justify-center">
              <Image
                src="/aboute.png"
                alt="About"
                width={520}
                height={520}
                className="h-auto w-full max-w-[500px]"
              />
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}