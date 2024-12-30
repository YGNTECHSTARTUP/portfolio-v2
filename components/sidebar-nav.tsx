"use client"

import Link from "next/link"
import { Home, User, Clock, Code2, Layout, Headphones, Palette, Moon, Menu, SunDimIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

const navItems = [
  { icon: Home, href: "/", label: "Home" },
  { icon: User, href: "/about", label: "About" },
  { icon: Clock, href: "/experience", label: "Experience" },
  { icon: Code2, href: "/projects", label: "Projects" },
  { icon: Layout, href: "/blog", label: "Blog" },
  { icon: Headphones, href: "/music", label: "Music" },
  { icon: Palette, href: "/stack", label: "Stack" },
]

export function SidebarNav() {
  const pathname = usePathname()
  const {theme,setTheme} = useTheme();
  return (
    <>
      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="fixed top-4 left-4 z-50 md:hidden"
            size="icon"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <nav className="flex flex-col h-full p-4">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      className="w-full justify-start"
                    >
                      <Icon className="h-5 w-5 mr-2" />
                      {item.label}
                    </Button>
                  </Link>
                )
              })}
            </div>
            <Button variant="ghost" size="icon" className="mt-auto">
              <Moon className="h-5 w-5" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Desktop Navigation */}
      <nav className="fixed left-0 top-0 hidden h-screen w-16 flex-col items-center py-8 bg-background border-r md:flex">
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
                    variant={isActive ? "secondary" : "ghost"}
                    className="w-full p-2 justify-center hover:bg-muted relative group"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{item.label}</span>
                    <div className="absolute left-full ml-2 px-2 py-1 bg-secondary text-secondary-foreground rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      {item.label}
                    </div>
                  </Button>
                </Link>
              </motion.div>
            )
          })}
        </div>
        <div className="mt-auto">
        {
          theme == "dark" ? <Button variant="ghost" size="icon" onClick={()=>setTheme("light")} className="w-full p-2">
          <Moon className="h-5 w-5" />
        </Button> :  <Button variant="ghost" size="icon" onClick={()=>setTheme("dark")} className="w-full p-2">
          <SunDimIcon className="h-5 w-5" />
        </Button>
        }
        
       
      </div>
      </nav>
    </>
  )
}

