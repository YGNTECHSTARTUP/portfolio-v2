"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navItems } from "@/components/sidebar-nav"
import { useTheme } from "next-themes"
import { CircleArrowDown, Moon, Sun } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-sm border-b z-50 flex items-center justify-between px-4 md:hidden">
   <Link href="/" className="text-xl font-bold">
          YGN
        </Link>
        <div className="flex items-center gap-2">
        <div className="mt-auto">
        <Button
          variant="ghost"
          size="icon"
          className="w-full p-2"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
              <CircleArrowDown fill="black" size={25} className='mt-1  text-white   '/>

      </SheetTrigger>
    
      <SheetContent side="bottom" className="h-[80vh]">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Menu</h2>
           
          </div>
          <nav className="flex-grow">
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-4 gap-4"
                >
                  {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                      <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                        <Button
                          variant={isActive ? "default" : "ghost"}
                          className="w-full h-full flex flex-col items-center justify-center py-4"
                        >
                          <Icon className="h-6 w-6 mb-2" />
                          <span className="text-xs">{item.label}</span>
                        </Button>
                      </Link>
                    )
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
          <div className="mt-auto pt-4 border-t">
            <Button
              variant="outline"
              className="w-full justify-center"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark")
                setOpen(false)
              }}
            >
              {theme === "dark" ? "Light" : "Dark"} Mode
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
    </div>
    </div>
  )
}

