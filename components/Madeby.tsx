'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function MadeBy() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex items-center justify-between text-sm  text-zinc-400 pt-8 border-t bg-background border-zinc-800   bottom-0 left-0 right-0 backdrop-blur-sm  p-4 z-10"
    >
      <div className="max-w-2xl w-full mx-auto flex justify-between">
        <p>made by ashish</p>
        <p>
          {date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          })}
          {', '}
          {date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
          }).toLowerCase()}
        </p>
      </div>
    </motion.div>
  )
}

