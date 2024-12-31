import { motion } from "framer-motion"

export function TopMusic() {
  const topSongs = [
   "Ocean - Anuv Jain",
   "Savera - Iqlipse Nova",
   "Star Boy - The Weeknd",
   "Never Ending Story - Limahl",
   "Die With A Smile - Bruno Mars",
   "Mishri - Anuv Jain",
  ]

  return (
    <ul className="space-y-2">
      {topSongs.map((song, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-background p-2 rounded-md shadow"
        >
          {song}
        </motion.li>
      ))}
    </ul>
  )
}

