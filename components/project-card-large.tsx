"use client"

import { motion } from "framer-motion"
import Image from "next/legacy/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  type: string
  github: string
  demo: string
  featured?: boolean
  index: number
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  type,
  github,
  demo,
  featured,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      className={featured ? "md:col-span-2" : ""}
    >
      <Card className="overflow-hidden h-full">
        <div className="relative aspect-video">
          <Image
            src={image}
            alt={title}
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="pointer-events-none">
                {type}
              </Badge>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Live Demo</span>
                  </a>
                </Button>
              </div>
            </div>
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

