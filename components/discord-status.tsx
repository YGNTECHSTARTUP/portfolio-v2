"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import Image from "next/image"

interface DiscordStatusProps {
  status: "online" | "offline" | "idle" | "dnd"
  username: string
  avatar?: string
}

export function DiscordStatus({ status, username, avatar }: DiscordStatusProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="p-4 flex items-center gap-4">
        <div className="relative">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={avatar || "/placeholder.svg"}
              alt={username}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background
            ${status === "online" ? "bg-green-500" : 
              status === "idle" ? "bg-yellow-500" :
              status === "dnd" ? "bg-red-500" : "bg-gray-500"
            }`}
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">{username}</span>
          <span className="text-sm text-muted-foreground">{status}</span>
        </div>
      </Card>
    </motion.div>
  )
}

