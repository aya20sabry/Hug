"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { IoPlayOutline } from "react-icons/io5";
import DownloadButton from "@/components/Buttom/buttom";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg,rgba(35,102,62,.18) 0%,rgba(238,232,209,.95) 50%,rgba(201,158,57,.18) 100%)",
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute left-[-150px] top-[-100px] h-[350px] w-[350px] rounded-full bg-[#23663E]/10 blur-[100px] sm:h-[500px] sm:w-[500px] lg:left-[-350px] lg:top-[-150px] lg:h-[700px] lg:w-[700px] lg:blur-[160px]" />

        <div className="absolute right-[-150px] bottom-[-100px] h-[350px] w-[350px] rounded-full bg-[#C99E39]/10 blur-[100px] sm:h-[500px] sm:w-[500px] lg:right-[-350px] lg:bottom-[-200px] lg:h-[700px] lg:w-[700px] lg:blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 py-16 lg:min-h-[90vh] lg:grid-cols-[1fr_1fr] lg:gap-0 lg:py-0">
          {/* Content */}

          <div className="relative z-20 order-1 flex flex-col items-center text-center lg:items-start lg:text-right">
            
          <h1 className="font-almarai text-4xl font-extrabold leading-tight sm:text-5xl lg:text-[64px] lg:leading-none">
  بازار الغنم {" "}

  <span className="mt-2  text-[#C48E20]">
    الإلكتروني
  </span>

  <span className="block">
    بين يديك
  </span>
</h1>

            <p className="font-almarai font-regular mt-6 max-w-xl text-base leading-8 text-[#2A2A2A] sm:text-lg lg:mt-8 lg:text-xl lg:leading-9">
              منصة رقمية تجمع البائعين والمشترين في الأسواق والمزادات
              الإلكترونية، وتساعدهم على عرض الأغنام وبيعها بطريقة سهلة وآمنة
              وموثوقة.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-5 lg:mt-12 lg:justify-start">
              <DownloadButton href="#register" text="سجل الآن مجانًا" />

              <a
                href="#register"
                className="flex items-center gap-2 bg-[#FFFFFF] px-6 py-3 text-sm font-semibold transition hover:bg-[#FFFFFF]"
              >
                <IoPlayOutline />
                تعرف على المزيد عنا
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-5 lg:mt-12 lg:justify-start">
              <a href="#" aria-label="App Store">
                <Image
                  src="/Store(1).png"
                  alt="Store"
                  width={130}
                  height={130}
                  className="h-auto w-[110px] sm:w-[130px] lg:w-[156px]"
                />
              </a>
              <a href="#" aria-label="App Store">
                <Image
                  src="/Store.png"
                  alt="Store"
                  width={130}
                  height={130}
                  className="h-auto w-[110px] sm:w-[130px] lg:w-[156px]"
                />
              </a>
            </div>

            <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-5 sm:flex-row lg:mt-12 lg:justify-start">
              {/* المستخدمين */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-4 rtl:space-x-reverse">
                  <Image
                    src="/heropic1.jpg"
                    alt=""
                    width={36}
                    height={36}
                    className="rounded-full border-2 border-white sm:h-[42px] sm:w-[42px]"
                  />
                  <Image
                    src="/heropic2.jpg"
                    alt=""
                    width={36}
                    height={36}
                    className="rounded-full border-2 border-white sm:h-[42px] sm:w-[42px]"
                  />
                  <Image
                    src="/heropic3.jpg"
                    alt=""
                    width={36}
                    height={36}
                    className="rounded-full border-2 border-white sm:h-[42px] sm:w-[42px]"
                  />
                  <Image
                    src="/heropic4.jpg"
                    alt=""
                    width={36}
                    height={36}
                    className="rounded-full border-2 border-white sm:h-[42px] sm:w-[42px]"
                  />
                </div>

                <p className="text-lg leading-none sm:text-[22px]">
                  <span className="font-bold text-[#D09B1F]">+10,000</span>
                  <span className="mr-2 text-[#444]">مستخدم نشط</span>
                </p>
              </div>

              {/* التقييم */}
              <div className="flex items-center gap-2">
                <Star
                  size={22}
                  className="fill-transparent text-[#D09B1F] stroke-[1.8] sm:h-6 sm:w-6"
                />

                <p className="text-lg leading-none text-[#444] sm:text-[22px]">
                  <span className="font-bold">4.9</span>
                  <span className="mr-2">تقييم المستخدمين</span>
                </p>
              </div>
            </div>
          </div>

          {/* Phones */}

          <div className="relative order-2 flex justify-center overflow-visible lg:justify-start">
            <div className="relative h-[420px] w-[300px] sm:h-[560px] sm:w-[400px] lg:h-[760px] lg:w-[520px]">
              {/* Glow */}

              <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C99E39]/20 blur-[80px] sm:h-[350px] sm:w-[350px] sm:blur-[100px] lg:h-[460px] lg:w-[460px] lg:blur-[130px]" />

              {/* Mockup */}

              <div className="absolute inset-x-0 bottom-0 mx-auto h-[380px] w-[300px] sm:h-[500px] sm:w-[400px] lg:left-[-290px] lg:right-auto lg:mx-0 lg:h-[660px] lg:w-[760px]">
                <Image
                  src="/Mockup.png"
                  alt="Mockup"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white/20 to-transparent" />

      {/* Decorative Blur */}

      <div className="pointer-events-none absolute top-24 right-[35%] h-32 w-32 rounded-full bg-[#23663E]/10 blur-[80px] sm:h-40 sm:w-40 lg:h-48 lg:w-48 lg:blur-[120px]" />

      <div className="pointer-events-none absolute bottom-10 left-[15%] h-40 w-40 rounded-full bg-[#C99E39]/10 blur-[100px] sm:h-48 sm:w-48 lg:h-56 lg:w-56 lg:blur-[140px]" />
    </section>
  );
}