"use client";

import Reveal from "./Reveal";
import { serviceCards } from "@/lib/landing/data";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-28 bg-[#FCFAF4]"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <Reveal>
          <div className="mb-20 text-center">

            <div className="mb-5 flex items-center justify-center gap-5">

              <span className="h-px w-28 bg-[#C99E39]/50" />

              <span className="font-bold text-[#222]">
                خدماتنا
              </span>

              <span className="h-px w-28 bg-[#C99E39]/50" />

            </div>

            <h2 className="text-5xl font-black leading-tight text-[#222]">

              خدمات متكاملة لعالم

              <span className="block text-[#C99E39]">
                الأغنام والمواشي
              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#555]">
              كل ما تحتاجه في مكان واحد — بيع، شراء، مزاد، ومتابعة مباشرة
            </p>

          </div>
        </Reveal>

        {/* Cards */}

        <div className="grid grid-cols-12 gap-6">
        {serviceCards.map((card, index) => {

const span =
  index === 3
    ? "col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-3"
    : "col-span-12 md:col-span-6 lg:col-span-4";

return (
  <Reveal
    key={card.title}
    delay={index * 80}
    className={span}
  >
    <div className="group relative h-full overflow-hidden rounded-[30px] border border-[#E9DFC9] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Quarter Circle */}

      <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-[#F6F0DF]" />

      {/* Icon */}

      <div
        className={`absolute mb-6 right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full text-white ${
          index === 3
            ? "bg-[#23663E]"
            : "bg-[#C99E39]"
        }`}
      >
        <card.icon size={22} />
      </div>

      {/* Small Title */}

      <span className="pt-10 block text-sm text-[#B3A68D]">
        {card.category}
      </span>

      {/* Main Title */}

      <h3 className="mt-4 text-2xl font-bold text-[#222]">
        {card.title}
      </h3>
                        {/* Description */}

                        <p className="mt-5 leading-8 text-[#666]">
                        {card.description}
                      </p>
    
                      {/* Button */}
    
                      <button className="mt-8 flex items-center gap-2 font-semibold text-[#23663E] transition group-hover:gap-4">
    
                        اكتشف المزيد
    
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M8 5L15 12L8 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
    
                      </button>
    
                      {/* Hover Border */}
    
                      <div className="absolute inset-0 rounded-[30px] border-2 border-transparent transition-all duration-300 group-hover:border-[#C99E39]/30" />
    
                    </div>
    
                  </Reveal>
                );
              })}

                      </div>


        <div className="pointer-events-none absolute left-[-180px] top-24 h-[380px] w-[380px] rounded-full bg-[#23663E]/10 blur-[120px]" />

        <div className="pointer-events-none absolute right-[-180px] bottom-20 h-[380px] w-[380px] rounded-full bg-[#C99E39]/10 blur-[120px]" />

      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white/20 to-transparent" />

    </section>
  );
}