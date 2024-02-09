"use client";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import Process from "./components/Process";
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
        <h1 className="flex-none text-4xl font-bold">2023</h1>
        <button className="shrink h-5 w-64">
          <Process width={width} />
        </button>
        <h1 className="flex-none text-4xl font-bold">2024</h1>
      </main>
    </div>
  );
}
