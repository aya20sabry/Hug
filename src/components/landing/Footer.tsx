import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaTiktok,
  FaWhatsapp,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa6";
import { footerLinks, footerContact } from "@/lib/landing/data";
import Image from "next/image";

const socialIcons = [
  FaFacebookF,
  FaTiktok,
  FaXTwitter,
  FaWhatsapp,
  FaTelegram,
  FaYoutube,
];

export default function Footer() {
  return (
    <footer className="bg-[#2A2A2A] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full ">
  <Image
    src="/logofooter.png"
    alt="Logo2"
    width={56}
    height={56}
    className="h-full w-full object-contain"
  />
</div>
            <p className="mt-4 max-w-xs leading-7 text-white/70">
              منصة رقمية متخصصة لجمع إعلانات الأغنام والمزادات، البث المباشر،
              والانتشار والإعلانات في مكان واحد ونضمن سهولة وأمان تسويقك.
            </p>
            <div className="mt-5 flex gap-3">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C48E20] transition hover:bg-white/20"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">المنصة</h4>
            <ul className="space-y-3 text-white/70">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">معلومات التواصل</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-[#C48E20] flex-shrink-0" />
                <span>{footerContact.address}</span>
              </li>
              <li className="flex items-center  gap-2">
                <Phone size={16} className="text-[#C48E20]" />
                <span dir="ltr">{footerContact.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#C48E20]"  />
                <span>{footerContact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
        © 2026 Copyright by ONPOINT
        </div>
      </div>
    </footer>
  );
}
