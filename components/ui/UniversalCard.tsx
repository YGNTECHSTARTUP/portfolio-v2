"use client"

import React from 'react'
import { HTMLMotionProps, motion } from 'framer-motion'
import { cn } from "@/lib/utils"

interface UniversalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function UniversalCard({ children, className, ...props }: UniversalCardProps & HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-xl bg-gradient-to-br from-neutral-50/10 to-neutral-200/20 p-1",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-neutral-50/10 before:to-transparent",
        "after:absolute after:inset-0 after:bg-background/80 after:backdrop-blur-xl",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

