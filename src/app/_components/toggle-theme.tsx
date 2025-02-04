"use client";
 
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/shadcn/components/ui/button";
import { useEffect, useState } from "react";
 
export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
 
  // Ensure component is mounted before accessing the theme
  useEffect(() => {
    setMounted(true);
  }, []);
 
  if (!mounted) return null;
 
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="h-[1.5rem] w-[1.5rem] text-yellow-500" />
      ) : (
        <Moon className="h-[1.5rem] w-[1.5rem] text-gray-700" />
      )}
    </Button>
  );
}