import Image from "next/image";
import Reveal from "./Reveal";
import { CheckCircle2, PlusCircle, Gavel, Radio, Store } from "lucide-react";

const mobileAppFeatures = [
  { label: "إنشاء الإعلانات وإدارتها", icon: PlusCircle },
  { label: "المشاركة في المزادات وإدارتها", icon: Gavel },
  { label: "مشاهدة البث المباشر", icon: Radio },
  { label: "تصفح الأسواق والأمراح", icon: Store },
];

export default function MobileApp() {
  return (
    <section id="mobile-app" className="bg-[#FCFAF4] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#2E7D5B]" />
            <span className="font-bold text-[#222]">
              تطبيق الموبايل
            </span>
            <span className="h-px w-8 bg-[#2E7D5B]" />
          </div>
        </Reveal>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
          {/* الصورة - شمال */}
          <Reveal className="order-2">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg">
              <Image
                src="/Group.png"
                alt="تطبيق الموبايل"
                fill
                loading="lazy"
                className="object-contain"
              />
            </div>
          </Reveal>

          {/* النص - يمين */}
          <Reveal delay={150} className="order-1 text-center lg:text-right">
            <h3 className="text-2xl font-bold text-[#153420] lg:text-3xl">
              تجربة متكاملة من{" "}
              <span className="text-[#C8952A]">هاتفك</span>
            </h3>
            <p className="mt-4 max-w-md text-[#5B6459] lg:mr-0 lg:ml-auto">
              تحكم كامل في إعلاناتك، مزاداتك ومفضلاتك في أي وقت وأي مكان
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {mobileAppFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 rounded-xl border border-[#E4DEC9] bg-[#FFFFFF] px-4 py-3"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FEF8EA]">
                    <CheckCircle2 size={16} className="text-[#C48E20]" />
                  </span>
                  <span className="text-sm font-medium text-[#153420]">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 font-bold text-[#C48E20]">
              حمل التطبيق من
            </p>

            <div className="mt-12 flex flex-wrap  gap-5 ">
              <a href="#" aria-label="Google Play">
              <Image
    src="/Store(1).png"
    alt="Store"
    width={156}
    height={156}
  />
              </a>
              <a href="#" aria-label="App Store">
  
            <Image
    src="/Store.png"
    alt="Store"
    width={156}
    height={156}
  />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}