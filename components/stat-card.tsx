"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ExternalLink } from 'lucide-react'
import { Counter } from "@/components/counter"

interface StatCardProps {
  title: string
  value: number
  link?: string
  decimals?: number
}

export function StatCard({ title, value, link, decimals = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 relative group">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">
            <Counter value={value} decimals={decimals} />
          </p>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </a>
        )}
      </Card>
    </motion.div>
  )
}

