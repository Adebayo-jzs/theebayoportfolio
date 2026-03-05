"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { HugeiconsIcon } from "@hugeicons/react"
import { Sun01Icon, Moon02Icon } from "@hugeicons/core-free-icons"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="p-2 border-2 border-transparent">
        <div className="w-6 h-6" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2   text-black     hover:text-black   dark:text-white transition-all"
      // className="p-2 border-2 border-white text-black dark:border-white/20 rounded-full hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black transition-all"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <HugeiconsIcon icon={Sun01Icon} className="w-5 h-5" />
      ) : (
        <HugeiconsIcon icon={Moon02Icon} className="w-5 h-5" />
      )}
    </button>
  )
}
