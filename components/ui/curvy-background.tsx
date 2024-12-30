"use client"

import { motion } from "framer-motion"

export const CurvyBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden container">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,0 Q50,50 100,0 V100 H0 Z"
          fill="url(#gradient)"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary-foreground) / 0.3)" />
            <stop offset="50%" stopColor="hsl(var(--primary-foreground) / 0.1)" />
            <stop offset="100%" stopColor="hsl(var(--background))" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

