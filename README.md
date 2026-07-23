# OnPoint Landing Page

## التشغيل

```bash
npm install
npm run dev
```

افتح http://localhost:3000

## الصور المطلوبة

حط الصور دي في `public/landing/` قبل التشغيل (أو غيّر الأسماء في الكومبوننتات):

- `hero-phone-main.png` — صورة الموبايل الرئيسية في الهيرو
- `app-phones.png` — صور الموبايلات في قسم التطبيق
- `dashboard-screenshot.png` — سكرين شوت لوحة التحكم
- `google-play-badge.png` — شعار Google Play
- `app-store-badge.png` — شعار App Store

## البنية

```
src/
  app/
    page.tsx          ← الصفحة الرئيسية (تجمع كل الأقسام)
    layout.tsx
    globals.css
  components/
    landing/
      Navbar.tsx
      Hero.tsx
      About.tsx
      Services.tsx     ← lazy-loaded
      Dashboard.tsx     ← lazy-loaded
      Footer.tsx         ← lazy-loaded
      Reveal.tsx          ← wrapper لأنيميشن الظهور عند السكرول
  lib/
    landing/
      data.ts            ← كل البيانات الثابتة (Static Data)
  hooks/
    useReveal.ts          ← IntersectionObserver hook
```

## ملاحظات الأداء

- الأقسام اللي تحت الطية (Services, Dashboard, Footer) بتتحمل عبر `next/dynamic`
  لتقليل حجم الـ JavaScript الأساسي عند أول تحميل.
- الأنيميشن (float, reveal on scroll) كله CSS + IntersectionObserver الأصلي،
  من غير أي مكتبة أنيميشن خارجية تقيلة.
- الصورة الرئيسية في الـ Hero عليها `priority`، والباقي `loading="lazy"`.
