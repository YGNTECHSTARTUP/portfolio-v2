"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { FileAudio, AudioWaveformIcon as Waveform } from 'lucide-react'

export function AudioQualityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      <Card className="p-6 bg-gradient-to-br   from-primary/10 via-primary/5 to-transparent border-primary/20">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileAudio className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Audio Quality</h2>
            </div>
            <Waveform className="h-5 w-5 text-primary animate-pulse" />
          </div>
          <p className="text-muted-foreground">
            I take my music seriously. That&apos;s why I prefer{" "}
            <span className="text-primary font-medium">.FLAC</span> format for the highest quality listening experience. 
            Nothing beats the clarity and depth of lossless audio.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="space-y-1">
              <p className="font-medium">Format</p>
              <p className="text-muted-foreground">FLAC (Free Lossless Audio Codec)</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium">Bit Depth</p>
              <p className="text-muted-foreground">16/24-bit</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium">Sample Rate</p>
              <p className="text-muted-foreground">44.1/96 kHz</p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

