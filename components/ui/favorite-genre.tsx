import { motion } from "framer-motion"

export function FavoriteGenre() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h3 className="text-3xl font-bold mb-4">Rock</h3>
      <p className="text-muted-foreground">
        From classic rock to modern alternative, the energy and creativity of rock music never fails to inspire.
      </p>
    </motion.div>
  )
}

