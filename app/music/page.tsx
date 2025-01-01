"use client"

import { motion } from "framer-motion"

import { MusicContent } from "@/components/music-content"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export default function MusicPage() {

  return (
    <div className="min-h-screen bg-background">
      <motion.main
        className="p-3"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="relative">
          <div className="max-w-5xl mx-auto py-20">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold tracking-tight">Music</h1>
                <p className="text-lg text-muted-foreground">
                  A glimpse into my musical world
                </p>
              </motion.div>
              <MusicContent />
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  )
}

