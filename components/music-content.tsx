"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Music2, Disc3, Languages, Headphones, FileAudio } from 'lucide-react'
import { AudioQualityCard } from "@/components/audio-quality-card"
import { ArtistImage } from "@/components/artist-image"

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

const genres = [
  "Alternative Rock",
  "Progressive Metal",
  "Jazz Fusion",
  "Classical",
  "Electronic",
  "Ambient",
  "Post-Rock",
  "Math Rock"
]

const languages = [
  "English",
  "Japanese",
  "Hindi",
  "Korean",
  "French",
  "Italian"
]

const artists = [
  { name: "Pink Floyd", imageUrl: "/placeholder.svg?height=200&width=200" },
  { name: "Tool", imageUrl: "/placeholder.svg?height=200&width=200" },
  { name: "Radiohead", imageUrl: "/placeholder.svg?height=200&width=200" },
  { name: "King Crimson", imageUrl: "/placeholder.svg?height=200&width=200" },
  { name: "Porcupine Tree", imageUrl: "/placeholder.svg?height=200&width=200" },
  { name: "Steven Wilson", imageUrl: "/placeholder.svg?height=200&width=200" },
  { name: "Opeth", imageUrl: "/placeholder.svg?height=200&width=200" },
  { name: "Dream Theater", imageUrl: "/placeholder.svg?height=200&width=200" },
  { name: "Yes", imageUrl: "/placeholder.svg?height=200&width=200" },
  { name: "Rush", imageUrl: "/placeholder.svg?height=200&width=200" }
]

export function MusicContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      <AudioQualityCard />

      <motion.div variants={item}>
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Music2 className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Favorite Genres</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <span
                  key={genre}
                  className="px-3 py-1 rounded-full bg-muted text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Languages className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Languages</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((language) => (
                <span
                  key={language}
                  className="px-3 py-1 rounded-full bg-muted text-sm"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Disc3 className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Favorite Artists</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {artists.map((artist) => (
                <ArtistImage key={artist.name} name={artist.name} imageUrl={artist.imageUrl} />
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  )
}

