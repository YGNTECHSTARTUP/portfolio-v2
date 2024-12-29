"use client"

import { motion } from "framer-motion"
import { BackgroundBeams } from "@/components/ui/background-beams"
import Image from "next/image"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card"

export function Hero() {
  return (
    <div className="">
      <div className="flex items-center justify-between max-w-5xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          
          <h1 className="text-5xl font-bold tracking-tight">Gagan Yarramsetty</h1>
          <p className="text-xl text-muted-foreground">
          Solo <HoverCard>
         
            <HoverCardTrigger>Rustacean🦀</HoverCardTrigger>
            <HoverCardContent>
            A Rustacean is a developer passionate about using and promoting Rust.
            </HoverCardContent>
            </HoverCard>   kinda Beginner
          </p>
          <p className="max-w-xl text-muted-foreground">
            Learning about web and trying to help out other devs in the process. I love open
            source and writing about tech occasionally.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-48 h-48 rounded-full overflow-hidden">
            <Image
              src="/pic.png"
              alt="Profile"
              width={192}
              height={192}
              className=" rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </div>
      <BackgroundBeams />
    </div>
  )
}

