"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1500);
    const hideTimer = setTimeout(() => setShow(false), 2000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return <>{children}</>;

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-5">
          <Image src="/images/logo.svg" alt="My Place" width={102} height={98} className="w-20 h-auto" />
          <Image src="/images/m.svg" alt="" width={267} height={14} className="w-48 h-auto" />
        </div>
      </div>
      <div className="opacity-0">{children}</div>
    </>
  );
}
