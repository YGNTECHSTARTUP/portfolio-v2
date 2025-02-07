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
      &quot;When they cast you down, and you say, ‘Exaltation will come!’ Then He will save the humble person&quot;
    </p>
  </blockquote>
  <p className="text-right text-sm text-muted-foreground mt-2">
    - Job 22:29 
  </p>
      </Card>
    </motion.div>
  )
}

