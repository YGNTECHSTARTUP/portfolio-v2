"use client"

import { motion } from "framer-motion"
import Image from "next/legacy/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from 'lucide-react'

interface Books {
  title: string
  imageUrl: string
  status: "Completed" | "Reading"
  rating: number | null
}

const Books: Books[] = [
  {
    title: "Think And Grow Rich",
    imageUrl: "/think.png",
    status: "Reading",
    rating: null
  },
  {
    title: "Dhruva 2500 AD",
    imageUrl: "/dhruva.png",
    status: "Completed",
    rating: 9.7
  },
    {
        title: "Rich Dad Poor Dad",
        imageUrl: "/rich.png",
        status: "Completed",
        rating: 8.5
      },
    
      {
        title: "The Alchemist",
        imageUrl: "/alch.png",
        status: "Completed",
        rating: 9.0
      },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function BookList() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      <motion.h2 
        variants={item}
        className="text-2xl font-semibold"
      >
        Recent Books and Audio Series
        </motion.h2>
      
      <motion.div 
        variants={item}
        className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-thin scrollbar-thumb-primary/10 scrollbar-track-transparent"
      >
        {Books.map((movie) => (
          <motion.div
            key={movie.title}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Card className="w-[200px] overflow-hidden">
              <div className="relative aspect-[3/4]">
                <Image
                  src={movie.imageUrl}
                  alt={movie.title}
                  layout="fill"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-2 left-2">
                  <Badge 
                    variant={movie.status === "Reading" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {movie.status}
                  </Badge>
                </div>
              </div>
              <div className="p-3 space-y-1">
                <h3 className="font-medium line-clamp-1">{movie.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="h-3 w-3 mr-1 fill-primary text-primary" />
                  <span>{movie.rating}/10</span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

