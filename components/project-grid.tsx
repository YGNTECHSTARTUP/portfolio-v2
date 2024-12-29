"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card-large"

const projects = [
  {
    title: "Agency Website Template",
    description: "Modern agency website template built with React and Next.js. Features responsive design, animations, and dark mode support.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    type: "Website Template",
    github: "https://github.com/username/agency-template",
    demo: "https://agency-template.demo",
    featured: true
  },
  {
    title: "DevDreaming Blog",
    description: "Technical blog focusing on React.js tutorials and web development tips. Built with Next.js and MDX.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "MDX", "React", "Tailwind CSS"],
    type: "Blog Website",
    github: "https://github.com/username/devdreaming",
    demo: "https://devdreaming.com",
    featured: true
  },
  {
    title: "Portfolio v2",
    description: "Personal portfolio website built with Next.js and Framer Motion. Features smooth animations and responsive design.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Framer Motion", "TypeScript"],
    type: "Portfolio",
    github: "https://github.com/username/portfolio-v2",
    demo: "https://portfolio-v2.demo"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with beautiful visualizations and 7-day forecast.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "D3.js", "Weather API"],
    type: "Web App",
    github: "https://github.com/username/weather-dashboard",
    demo: "https://weather-dashboard.demo"
  },
  {
    title: "Task Manager",
    description: "Full-stack task management application with real-time updates and collaboration features.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Prisma", "tRPC", "TypeScript"],
    type: "Web App",
    github: "https://github.com/username/task-manager",
    demo: "https://task-manager.demo"
  },
  {
    title: "E-commerce Template",
    description: "Modern e-commerce template with cart functionality, user authentication, and payment integration.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
    type: "Website Template",
    github: "https://github.com/username/ecommerce-template",
    demo: "https://ecommerce-template.demo"
  },
  {
    title: "Music Player",
    description: "Web-based music player with playlist management and visualizations.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Web Audio API", "Styled Components"],
    type: "Web App",
    github: "https://github.com/username/music-player",
    demo: "https://music-player.demo"
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with group chat and direct messaging support.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Socket.io", "TypeScript"],
    type: "Web App",
    github: "https://github.com/username/chat-app",
    demo: "https://chat-app.demo"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function ProjectGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr"
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.title} {...project} index={index} />
      ))}
    </motion.div>
  )
}

