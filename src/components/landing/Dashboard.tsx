import Image from "next/image";
import Reveal from "./Reveal";
import {
  CheckCircle2,
  Users,
  BarChart3,
  Send,
  Bell,
  FileText,
  Store,
  Settings,
} from "lucide-react";

const controlPanelFeatures = [
  { label: "توثيق البائعين", icon: CheckCircle2 },
  { label: "إدارة المستخدمين", icon: Users },
  { label: "الإحصائيات والتقارير", icon: BarChart3 },
  { label: "مراجعة الإعلانات", icon: Send },
  { label: "إرسال الإشعارات", icon: Bell },
  { label: "الشكاوى والبلاغات", icon: FileText },
  { label: "إدارة الأسواق", icon: Store },
  { label: "الإعدادات والمحتوى", icon: Settings },
];

export default function Dashboard() {
  return (
    <section
      id="dashboard"
      className="relative overflow-hidden bg-gradient-to-br from-[#C8952A] to-[#B87F1E] py-16 lg:py-24"
    >
      {/* الخلفية */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-[200px] -top-[200px] h-[500px] w-[500px] rounded-full border-[50px] border-white/10 sm:-right-[300px] sm:-top-[300px] sm:h-[700px] sm:w-[700px] sm:border-[70px] lg:-right-[380px] lg:-top-[380px] lg:h-[900px] lg:w-[900px] lg:border-[90px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8">
        <Reveal className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-white/60 sm:w-10" />
            <span className="text-sm font-bold text-white sm:text-base">
              لوحة التحكم
            </span>
            <span className="h-px w-8 bg-white/60 sm:w-10" />
          </div>
        </Reveal>

        <div className="mt-10 grid items-end gap-10 sm:mt-12 lg:mt-14 lg:grid-cols-[1.25fr_0.9fr] lg:gap-16">
          {/* الصورة */}
          <Reveal className="order-2 flex justify-center self-end lg:justify-start">
            <Image
              src="/light.png"
              alt="لوحة تحكم المنصة"
              width={1600}
              height={1200}
              priority
              className="w-full max-w-[420px] sm:max-w-[560px] lg:-mb-24 lg:max-w-none lg:w-[760px]"
            />
          </Reveal>

          {/* النص */}
          <Reveal
            delay={150}
            className="order-1 text-center lg:pr-4 lg:text-right"
          >
            <h3 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
              إدارة المنصة من لوحة تحكم
              <br />
              متكاملة
            </h3>

            <p className="mx-auto mt-4 max-w-md text-sm text-white/85 sm:text-base lg:mx-0 lg:ml-auto">
              تتيح لوحة التحكم للإدارة متابعة جميع عمليات المنصة والتحكم في
              المستخدمين والإعلانات والمزادات والبث المباشر والأسواق
              والأمراح من مكان واحد.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-10">
              {controlPanelFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center justify-between rounded-2xl border border-white/20 bg-white px-4 py-3 shadow-md transition hover:shadow-xl sm:px-5 sm:py-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F8F3E7] sm:h-10 sm:w-10">
                    <feature.icon size={18} className="text-[#C8952A]" />
                  </span>
                  
                  <span className="text-sm font-medium text-[#2A2A2A] sm:text-[15px]">
                    {feature.label}
                  </span>

                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}