import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  // When mounted on client, now we can show the UI
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // change theme
  const { theme, setTheme, resolvedTheme } = useTheme();

  const chnageTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <code className="italic absolute top-4 left-4">
      <Button
        className="rounded-full text-lg z-50"
        isIconOnly
        onClick={() => chnageTheme()}
      >
        {mounted && resolvedTheme === "dark" ? "🌙" : "🌞"}
      </Button>
    </code>
  );
}
