"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navItems } from "@/components/sidebar-nav"
import { useTheme } from "next-themes"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
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
              variant="ghost"
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
  )
}

