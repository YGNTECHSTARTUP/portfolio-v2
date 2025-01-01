"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface ArtistImageProps {
  name: string
  imageUrl: string
}

export function ArtistImage({ name, imageUrl }: ArtistImageProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/0 animate-pulse group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300" />
        <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-background to-background/80 z-10" />
        <div className="absolute inset-[3px] rounded-full overflow-hidden z-20">
          <Image
            src={imageUrl}
            alt={name}
           fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
        <Card className="px-3 py-1.5 bg-background/80 backdrop-blur-sm border-primary/20">
          <span className="text-xs font-medium text-primary whitespace-nowrap">
            {name}
          </span>
        </Card>
      </div>
    </motion.div>
  )
}

