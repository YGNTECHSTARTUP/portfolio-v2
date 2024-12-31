"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Laptop, Eye, Headphones } from 'lucide-react'

interface HardwareItemProps {
  name: string
  description: string
  icon: string
}

const iconMap = {
  laptop: Laptop,
  eye: Eye,
  headphones: Headphones,
}

export function HardwareItem({ name, description, icon }: HardwareItemProps) {
  const Icon = iconMap[icon as keyof typeof iconMap]

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card className="p-4 h-full flex flex-col justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-secondary/10 p-2 rounded-full">
            <Icon className="h-6 w-6 text-secondary" />
          </div>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

