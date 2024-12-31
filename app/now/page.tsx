"use client"

import { motion } from "framer-motion"
import { NowContent } from "@/components/now-content"
import { Clock } from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export default function NowPage() {
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
        <div className="relative z-[1]">
          <div className="max-w-5xl mx-auto py-20">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="space-y-2"
              >
                <div className="flex items-center gap-3 container">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ 
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Clock className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h1 className="text-4xl font-bold tracking-tight ">Now</h1>
                </div>
                <p className="text-lg text-muted-foreground">
                  The answer to &quot;What are you upto these days?&quot;
                </p>
              </motion.div>
              <NowContent />
            </div>
          </div>
        </div>
      </motion.main>
    </div>
  )
}

