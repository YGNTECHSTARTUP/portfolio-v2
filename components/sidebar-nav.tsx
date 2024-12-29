"use client"

import Link from "next/link"
import { Home, User, Clock, Code2, Layout, Headphones, Palette, Moon, SunDimIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import React from "react"

const navItems = [
  { icon: Home, href: "/" },
  { icon: User, href: "/about" },
  { icon: Clock, href: "/now" },
  { icon: Code2, href: "/projects" },
  { icon: Layout, href: "/dashboard" },
  { icon: Headphones, href: "/music" },
  { icon: Palette, href: "/blog" },
]

export function SidebarNav() {
  const { setTheme,theme } = useTheme();
  return (
    <nav className="fixed left-0 top-0 h-screen w-16 flex flex-col items-center py-8 bg-background border-r z-10">
      <div className="space-y-4 w-full">
        {navItems.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={item.href}>
                <Button
                  variant="ghost"
                  className="w-full p-2 justify-center hover:bg-muted"
                >
                  <Icon className="h-5 w-5" />
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
  )
}

