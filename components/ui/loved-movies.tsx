import { motion } from "framer-motion"

export function LovedMovies() {
  const movies = [
    "Social Network",
    "The Billion Dollor Code",
    "Interstellar",
    ""
  ]

  return (
    <ul className="space-y-2">
      {movies.map((movie, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-background p-2 rounded-md shadow flex items-center"
        >
          <span className="text-2xl mr-2">🎬</span>
          {movie}
        </motion.li>
      ))}
    </ul>
  )
}

