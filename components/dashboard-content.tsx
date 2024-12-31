"use client"

import { motion } from "framer-motion"
import { SoftwareItem } from "./software-item"
import { HardwareItem } from "./hardware-item"
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

export function DashboardContent() {
  const softwareItems = [
    { name: "Helix", description: "A post-modern text editor", icon: "edit" },
    { name: "Zen", description: "A next-gen browser", icon: "globe" },
    { name: "Notion", description: "A note-taking app", icon: "notebook" },
    { name: "Windows", description: "Operating System", icon: "monitor" },
    { name: "Pot Player", description: "For media streaming", icon: "play" },
    { name: "Fliqlo", description: "For screen saver", icon: "clock" },
  ]

  const hardwareItems = [
    { name: "Acer Aspire Swift Go 14", description: "Laptop", icon: "laptop" },
    { name: "Sleepaxa Advance Amber tint Glasses", description: "Eye protection", icon: "eye" },
    { name: "Red Gear Headphones", description: "Audio", icon: "headphones" },
  ]

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      <motion.div variants={item} className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">My Setup</h1>
        <p className="text-xl text-muted-foreground">
          The tools and equipment I use daily
        </p>
      </motion.div>

      <motion.div variants={item}>
        <h2 className="text-2xl font-semibold mb-4">Software</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {softwareItems.map((software) => (
            <SoftwareItem key={software.name} {...software} />
          ))}
        </div>
      </motion.div>

      <motion.div variants={item}>
        <h2 className="text-2xl font-semibold mb-4">Hardware</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hardwareItems.map((hardware) => (
            <HardwareItem key={hardware.name} {...hardware} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

