"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface ArtistImageProps {
  name: string
  imageUrl: string
}

export function ArtistImage({ name, imageUrl }: ArtistImageProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-24 h-24 rounded-full overflow-hidden"
    >
      <Image
        src={imageUrl}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-sm font-medium text-center px-2">{name}</span>
      </div>
    </motion.div>
  )
}

