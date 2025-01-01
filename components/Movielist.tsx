"use client"

import { motion } from "framer-motion"
import Image from "next/legacy/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from 'lucide-react'

interface Movie {
  title: string
  imageUrl: string
  status: "Watching" | "Watched"
  rating: number | null
}

const movies: Movie[] = [
 
  {
    title: "Solo Leveling Season 2",
    imageUrl: "/solo.png",
    status: "Watching",
    rating: null
  },
  {
    title: "Silicon Valley",
    imageUrl: "/sil.png",
    status: "Watching",
    rating: null
  },
  {
    title: "Social Network",
    imageUrl: "/social.png",
    status: "Watched",
    rating: 8.5
  },
  {
    title: "Billion Dollar Code",
    imageUrl: "/bil.png",
    status: "Watched",
    rating: 8.7
  },
  {
    title: "Lucky Bhaskar",
    imageUrl: "/luck.png",
    status: "Watched",
    rating: 8.2
  },
  {
    title: "Hunter X Hunter",
    imageUrl: "/hunter.png",
    status: "Watched",
    rating: 9.1
  },
  {
    title: "Hunger Games",
    imageUrl: "/hunger.png",
    status: "Watched",
    rating: 8.6
  },
  {
    title: "Stranger Things",
    imageUrl: "/stranger.png",
    status: "Watched",
    rating: 9.0
  }
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

export function MovieList() {
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
        Recent watched Movies & TV Series
      </motion.h2>
      
      <motion.div 
        variants={item}
        className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-thin scrollbar-thumb-primary/10 scrollbar-track-transparent"
      >
        {movies.map((movie) => (
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
                    variant={movie.status === "Watching" ? "default" : "secondary"}
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

