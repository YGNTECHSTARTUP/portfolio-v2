"use client"

import { motion } from "framer-motion"
import { SidebarNav } from "@/components/sidebar-nav"
import { ProjectGrid } from "@/components/project-grid"
import { BackgroundBeams } from "@/components/ui/background-beams"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SidebarNav />
      <motion.main
        className="pl-16"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="relative">
          <div className="max-w-6xl mx-auto py-20">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="space-y-2"
              >
                <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
                <p className="text-lg text-muted-foreground">
                  A collection of projects I&apos;ve worked on
                </p>
              </motion.div>
              <ProjectGrid />
            </div>
          </div>
          <BackgroundBeams />
        </div>
      </motion.main>
    </div>
  )
}

