"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star, GitFork } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  stars: number
  forks: number
}

export function ProjectCard({ title, description, stars, forks }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="p-6 h-full cursor-pointer group">
        <div className="space-y-2">
          <h3 className="font-medium group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1" />
              <span>{stars}</span>
            </div>
            <div className="flex items-center">
              <GitFork className="h-4 w-4 mr-1" />
              <span>{forks}</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

