'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, Variant, useInView } from 'framer-motion'

interface AnimatedScrollWrapperProps {
  children: React.ReactNode
  duration?: number
  delay?: number
  yOffset?: number
  animation?: 'fadeIn' | 'slideUp' | 'scaleUp' | 'rotateIn'
  className?: string
}

const animations: Record<string, Record<string, Variant>> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -5 },
    visible: { opacity: 1, rotate: 0 },
  },
}

export const AnimatedScrollWrapper: React.FC<AnimatedScrollWrapperProps> = ({
  children,
  duration = 0.5,
  delay = 0,
  animation = 'slideUp',
  className = '',
}) => {
  const controls = useAnimation()
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.3 })

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start('visible')
      setHasAnimated(true)
    }
  }, [controls, inView, hasAnimated])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animations[animation]}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

