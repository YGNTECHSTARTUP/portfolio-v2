import { motion } from "framer-motion"
import Image from "next/image"

export function FavoriteArtist() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <Image
        src="/placeholder.svg?height=150&width=150"
        alt="Favorite Artist"
        width={150}
        height={150}
        className="rounded-full mx-auto mb-4"
      />
      <h3 className="text-2xl font-semibold mb-2">The Beatles</h3>
      <p className="text-muted-foreground">
        Iconic and influential, The Beatles revolutionized popular music and continue to inspire generations.
      </p>
    </motion.div>
  )
}

