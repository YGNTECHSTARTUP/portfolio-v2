"use client"

import { motion } from "framer-motion"

interface LastUpdatedProps {
  date: string
}

export function LastUpdated({ date }: LastUpdatedProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-sm text-muted-foreground"
    >
      Last Updated {date}
    </motion.div>
  )
}

