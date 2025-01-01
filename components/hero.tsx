"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Spotlight } from "./ui/spotlight"

export function Hero() {
  return (
    
    <div className="relative bg-transparent bg-gradient-to-tr from-primary/0 via-primary/5 to-primary/10 ">
       <Spotlight
        className="-top-40 right-0 absolute md:left-48 md:-top-20"
        fill="orange"
      />
      
        <div className="flex flex-col md:flex-row items-center justify-between py-20 gap-10 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Gagan Yarramsetty
            </h1>
            <p className="text-xl flex text-muted-foreground">
             Solo Developer Kinda Student 🦀
            </p>
            <p className="max-w-xl text-muted-foreground">
              Learning about Real Time Data Distribution and trying to Grind Advent Of Code
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">
              <Image
                src="/pic.png"
                alt="Profile"
                width={192}
                height={192}
                className="object-cover lg:dark:grayscale lg:dark:hover:grayscale-0"
              />
            </div>
          </motion.div>
        </div>
    </div>
  )
}

