"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, User, Clock, Code2,  Headphones, Moon, Sun, } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Wrench } from "lucide-react"
import { FileUser } from "lucide-react"
import { NotebookPen } from "lucide-react"
import { SquarePen } from "lucide-react"
export const navItems = [
  { icon: Home, href: "/", label: "Home" },
  { icon: User, href: "/about", label: "About" },
  { icon: Clock, href: "/now", label: "Now" },
  { icon: Code2, href: "/projects", label: "Projects" },
  { icon: Wrench, href: "/utilities", label: "Utilites" },
  { icon: Headphones, href: "/music", label: "Music" },
  {icon:FileUser, href:"/experience", label:"Experience" },
  {icon:NotebookPen, href:"/GuestBook", label:"GuestBook" },
  {icon:SquarePen, href:"/Blogs", label:"Blog" }

]

export function SidebarNav() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <nav className="fixed left-0 top-0 bottom-0 w-16 flex-col items-center py-8 bg-background border-r z-10 hidden md:flex">
      <div className="space-y-4 w-full">
        {navItems.map((item, index) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full p-2 justify-center hover:bg-muted",
                    isActive && "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{item.label}</span>
                </Button>
              </Link>
            </motion.div>
          )
        })}
      </div>
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
    </nav>
  )
}

