"use client"

import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

export function Counter({
  value,
  direction = "up",
  decimals = 0,
}: {
  value: number
  direction?: "up" | "down"
  decimals?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === "down" ? value : 0)
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value)
    }
  }, [motionValue, isInView, value, direction])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(decimals)
      }
    })
  }, [springValue, decimals])

  return <span ref={ref} />
}

