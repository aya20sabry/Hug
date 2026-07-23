import {
  Store,
  Users,
  Gavel,
  Truck,
  Bell,
  ShieldCheck,
  Radio,
  BadgeCheck,
  Scale,
  MapPin,
  UserCheck,
  Settings2,
  CreditCard,
  Megaphone,
  BellRing,
} from "lucide-react";

export const navLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "حول المنصة", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "تطبيق الموبايل", href: "#mobile-app" },
  { label: "لوحة التحكم", href: "#dashboard" },
];

export const aboutOrbitIcons = [
  { icon: Store, label: "الأسواق" },
  { icon: Users, label: "البائعين" },
  { icon: UserCheck, label: "المشترين" },
  { icon: Gavel, label: "المزادات" },
  { icon: Truck, label: "الشحن" },
  { icon: Bell, label: "الإشعارات" },
];

export const aboutFeatures = [
  { icon: Radio, title: "بث حي واضح", color: "text-[#2E7D5B]" },
  { icon: BadgeCheck, title: "حسابات موثقة", color: "text-[#C9A227]" },
  { icon: Scale, title: "مزادات شفافة", color: "text-[#2E7D5B]" },
];

export const serviceCards = [
  {
    icon: Megaphone,
    category: "الإعلانات",
    title: "اعرض أغنامك بسهولة",
    description:
      "أنشئ إعلانك خلال دقائق، أضف الصور والمعلومات والسعر والموقع، وابدأ في الوصول إلى المشترين المهتمين",
  },
  {
    icon: Gavel,
    category: "المزادات",
    title: "مزادات مباشرة وموثوقة",
    description:
      "شارك في المزادات، تابع المزايدات لحظة بلحظة، واستقبل تنبيهات عند وجود مزايدة جديدة أو انتهاء المزاد.",
  },
  {
    icon: Radio,
    category: "البث المباشر",
    title: "شاهد الأغنام قبل الشراء",
    description:
      "تابع البث المباشر للبائعين والمزادات، وشاهد تفاصيل الأغنام بشكل واقعي قبل اتخاذ قرار الشراء.",
  },
  {
    icon: MapPin,
    category: "الأسواق",
    title: "اكتشف الأسواق القريبة منك",
    description:
      "تعرّف على أسواق الأغنام، مواقعها، أوقات العمل والخدمات المتوفرة في كل سوق.",
  },
  {
    icon: UserCheck,
    category: "الأمراح",
    title: "اكتشف الأمراح وأصحاب الحلال",
    description:
      "تصفح الأمراح المسجلة، تعرف على أنواع الأغنام المتوفرة، وتواصل مع أصحابها مباشرة.",
  },
];

export const appChecklist = [
  "إضافة إعلانات وإدارتها",
  "المشاركة في المزادات",
  "متابعة الأسواق العامة",
  "عرض الأسواق والأخبار",
];

export const dashboardFeatures = [
  { icon: UserCheck, label: "توثيق البائعين" },
  { icon: Users, label: "إدارة المستخدمين" },
  { icon: CreditCard, label: "الاشتراكات والفواتير" },
  { icon: Megaphone, label: "تفعيل الإعلانات" },
  { icon: BellRing, label: "الإشراف والإشعارات" },
  { icon: Settings2, label: "إدارة الأسواق" },
];

export const footerLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "حول المنصة", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "تطبيق الموبايل", href: "#mobile-app" },
  { label: "لوحة التحكم", href: "#dashboard" },
];

export const footerContact = {
  address: "345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345",
  phone: "+965 609 050 64",
  email: "Support@on-point-kw.com",
};
