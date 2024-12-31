"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Edit, Globe, Notebook, Monitor, Play, Clock } from 'lucide-react'

interface SoftwareItemProps {
  name: string
  description: string
  icon: string
}

const iconMap = {
  edit: Edit,
  globe: Globe,
  notebook: Notebook,
  monitor: Monitor,
  play: Play,
  clock: Clock,
}

export function SoftwareItem({ name, description, icon }: SoftwareItemProps) {
  const Icon = iconMap[icon as keyof typeof iconMap]

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card className="p-4 h-full flex flex-col justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-primary/10 p-2 rounded-full">
            <Icon className="h-6 w-6 text-primary" />
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

