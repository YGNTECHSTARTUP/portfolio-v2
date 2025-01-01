"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Music2, Languages,  } from 'lucide-react'
import { AudioQualityCard } from "@/components/audio-quality-card"
import { MovieList } from "./Movielist"

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
"Lofi",
"Ambient",
"Acoustic",
"Phonk"
]

const languages = [
 "Telugu",
 "Tamil",
 "Hindi",
 "English",
 "Japanese",
]

// const artists = [
//   { name: "AnuvJain", imageUrl: "/anuv.png" },
//   { name: "Iqlipse Nova", imageUrl: "/nova.png" },
//   { name: "Ed Shareen", imageUrl: "/ed.png" },
//   { name: "XXX Tentacion", imageUrl: "/xxx.png" },
//   { name: "Sid Sriram", imageUrl: "/sid.png" },
//   { name: "Arjith Singh", imageUrl: "/arj.png" },
//   { name: "A.R Rahman", imageUrl: "/ar.png" },
//   { name: "Anirudh Ravichander", imageUrl: "/rudh.png" },
//   { name: "S.P BalaSubrahmanyam", imageUrl: "/sp.png" },
//   { name: "Raj Prakash Paul", imageUrl: "/raj.png" }
// ]

export function Musicee() {
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
        <MovieList />
      </motion.div>
    </motion.div>
  )
}

