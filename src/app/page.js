"use client";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import Process from "./components/Process";
import Year from "./components/Year";
export default function Home() {
  const router = useRouter();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((prevWidth) => prevWidth + 2);
    }, 1000);
    if (width >= 11) {
      clearInterval(interval);
      router.push("/home");
    }
    return () => clearInterval(interval);
  }, [width]);
  return (
    <div>
      <main className="flex min-h-screen items-center justify-center p-24 gap-3">
        <Year text="2023" />
        <div className="shrink h-5 w-64">
          <Process width={width} />
        </div>
        <Year text="2024" />
      </main>
    </div>
  );
}
