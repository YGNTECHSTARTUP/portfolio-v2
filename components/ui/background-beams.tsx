"use client"

import { cn } from "@/lib/utils"
import React from "react"

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 opacity-20",
        className
      )}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent"
        style={{
          maskImage: "radial-gradient(circle at center, transparent 0%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, transparent 0%, black 100%)",
        }}
      />
    </div>
  )
}

