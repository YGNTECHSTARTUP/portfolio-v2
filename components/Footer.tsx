'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, MessageSquare, Mail, FileText } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/asrvd', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/_asheeshh', label: 'X (Twitter)' },
  { icon: Linkedin, href: 'https://linkedin.com/in/asrvd', label: 'LinkedIn' },
  { icon: MessageSquare, href: 'https://discord.com/users/asheeshh', label: 'Discord' },
  { icon: Mail, href: 'mailto:ashirvadbhushan@gmail.com', label: 'Email' },
  { icon: FileText, href: 'https://read.cv/asrvd', label: 'CV' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Footer() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.footer
      variants={container}
      initial="hidden"
      animate="show"
      className="relative bottom-0 left-0 right-0 bg-background backdrop-blur-sm border-t border-zinc-300 dark:border-zinc-800 py-4 px-4 "
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <motion.div variants={item} className="flex space-x-4">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
        <motion.div variants={item} className="flex items-center space-x-4 text-sm text-zinc-400">
          <p>made by <span className='font-bold'>gagan🦀</span></p>
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
        </motion.div>
      </div>
    </motion.footer>
  )
}

