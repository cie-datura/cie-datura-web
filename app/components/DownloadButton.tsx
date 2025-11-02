"use client";
import Link from "next/link";

interface DownloadButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function DownloadButton({
  href,
  children,
}: DownloadButtonProps) {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="bg-(--mustard) text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-(--navy) hover:text-(--mustard) hover:cursor-pointer transition-all"
      download
    >
      {children}
    </Link>
  );
}
