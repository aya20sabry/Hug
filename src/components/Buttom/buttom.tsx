"use client";

import { BsDownload } from "react-icons/bs";

interface DownloadButtonProps {
  href: string;
  text: string;
}

export default function DownloadButton({
  href,
  text,
}: DownloadButtonProps) {
  return (
    <a
      href={href}
      className="bg-[#C48E20] flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#C48E20]"
    >
      <BsDownload />
      {text}
    </a>
  );
}