"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Music } from 'lucide-react'
import Image from "next/image"

export function SongOnMind() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Music className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold">Song on my mind</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20 rounded-md overflow-hidden">
            <Image
              src="/favsong.png"
              alt="Album cover"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">Ocean</h3>
            <p className="text-muted-foreground">Anuv Jain</p>
            <p className="text-sm text-muted-foreground mt-1">
            
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

