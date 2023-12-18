"use client";
import { Button as Sbtn } from "@/components/ui/button";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ToggleTheme from "@/components/toggle-theme";

export default function Home() {
  const router = useRouter();

  // Push to 3D page
  const enterThreed = () => {
    router.push("/threed");
  };

  // When mounted on client, now we can show the UI
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="flex flex-col items-center justify-center gap-4 w-full h-screen">
      <ToggleTheme />
      <h1 className="text-4xl">Basic Three.js Starter</h1>
      <p className="text-lg opacity-75">
        A Three.js starter template for Next.js with Shadcn-UI, Next-UI, and
        Next-Theme
      </p>
      <Button className="text-lg" onClick={() => enterThreed()}>
        Enter 3D
      </Button>
    </main>
  );
}
