"use client";

import Experience from "@/components/threed-exp/Experience";
import ToggleTheme from "@/components/toggle-theme";
import { Canvas } from "@react-three/fiber";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme } = useTheme();
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    if (theme === "dark") {
      setBgColor("darkslategray");
    } else {
      setBgColor("#ececec");
    }
  }, [theme]);
  return (
    <main className="w-full h-screen">
      <ToggleTheme />
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={[bgColor]} />
        <Experience />
      </Canvas>
    </main>
  );
}
