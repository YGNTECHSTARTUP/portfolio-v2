"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { BookOpen } from 'lucide-react'

export function VerseOnMind() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold">Verse on my mind</h2>
        </div>
        <blockquote className="border-l-4 border-primary pl-4 italic">
        <p className="text-lg mb-2">
      &quot;You will be blessed when you come in and blessed when you go out. <br />
      The Lord will grant that the enemies who rise up against you will be defeated before you. <br />
      They will come at you from one direction but flee from you in seven.&quot;
    </p>
  </blockquote>
  <p className="text-right text-sm text-muted-foreground mt-2">
    - Deuteronomy 28:6-7
  </p>
      </Card>
    </motion.div>
  )
}

