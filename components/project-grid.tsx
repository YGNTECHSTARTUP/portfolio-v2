"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"

  
const projects = [
  {
    name: "Minimal Kernel",
    description: "Minimal Kernel is created using Rust low-level code that can run directly on the hardware. The code prints 'Hello, World!' in the kernel using the VGA text buffer pointer.",
    topics: ["Rust", "Kernel Development", "Low-level Programming"],
    url: "https://github.com/YGNTECHSTARTUP/minimal-kernel",
    home: "https://linkedin.com/in/YGNTECHSTARTUP",
    language: "System Programming",
  },
  {
    name: "SubDomain Port Scanner",
    description: "Subdomain Port Scanner is a CLI tool built in Rust. It inputs a domain URL and searches for the open ports of that particular domain. It is related to offensive security.",
    topics: ["Rust", "Offensive Security", "Port Scanning"],
    url: "https://github.com/YGNTECHSTARTUP/subdomain-port-scanner",
    home: "https://linkedin.com/in/YGNTECHSTARTUP",
    language: "CLI Tool",
  },
  {
    name: "Sha1 Cracker",
    description: "Sha1 Cracker is a CLI tool that cracks the SHA1 algorithm. It is designed to test the security of SHA1 hashes by attempting to reverse them.",
    topics: ["Rust", "Cryptography", "CLI Tool"],
    url: "https://github.com/YGNTECHSTARTUP/sha1-cracker",
    home: "https://linkedin.com/in/YGNTECHSTARTUP",
    language: "CLI Tool",
  },
  {
    name: "Cross Roads With SHazin Hijazy",
    description: "Cross Roads with Shazin Hijazy, a talk show focused on promoting entrepreneurship, leadership, and innovation.",
    topics: ["Talk Show", "Leadership", "Innovation"],
    url: "https://github.com/YGNTECHSTARTUP/cross-roads",
    home: "https://crossroadswithshazin.vercel.app/",
    language: "Web Application",
  },
  {
    name: "GDGOC AUCE Website",
    description: "GDGOC AUCE is a community of Google Developer Groups On Campus at Andhra University College of Engineering. This website is built using Next.js and Tailwind CSS.",
    topics: ["Community", "Next.js", "Tailwind CSS"],
    url: "https://github.com/YGNTECHSTARTUP/gdg-auce",
    home: "https://gdgoc-auce.vercel.app/",
    language: "Static Website",
  },
  {
    name: "Profinaty Guardian",
    description: "Profinaty Guardian is a real-time content moderation API that uses embeddings to detect inappropriate content in text. It identifies profanity, hate speech, and other inappropriate content while processing thousands of requests per second.",
    topics: ["API", "Content Moderation", "Machine Learning"],
    url: "https://github.com/YGNTECHSTARTUP/profanity-api",
    home: "https://profinati-ui.vercel.app/",
    language: "Web Application",
  },
  {
    name: "Imaginify",
    description: "An image generation tool leveraging the power of AI to create images based on user input. Users can input text descriptions, generate images, and download them.",
    topics: ["AI", "Image Generation", "Creativity"],
    url: "https://github.com/YGNTECHSTARTUP/imaginify",
    home: "https://ygn-imaginify.vercel.app/",
    language: "Web Application",
  },
  {
    name: "Pricify",
    description: "Pricify is a platform that uses web scraping to fetch Amazon products using their URLs. It displays scraped data, including links to purchase products. The latest scraped products are added to the 'Our Products' section.",
    topics: ["Web Scraping", "E-commerce", "Automation"],
    url: "https://github.com/YGNTECHSTARTUP/price_tracker",
    home: "https://pricify-peach.vercel.app/",
    language: "Web Application",
  },
  {
    name: "PokeGuess",
    description: "PokeGuess is a game using the PokeAPI to fetch random Pokémon and display them. Users guess the Pokémon by typing its name. Correct guesses show success messages, while incorrect ones show error messages.",
    topics: ["Game", "PokeAPI", "Fun"],
    url: "https://github.com/YGNTECHSTARTUP/poke",
    home: "https://pokeguess-silk.vercel.app/",
    language: "Web Application",
  },
  {
    name: "Collage Website",
    description: "This is a college website made for AANM & VVRSR College as a project. It's built using Next.js and Tailwind CSS, is static, and is hosted on Vercel.",
    topics: ["College", "Next.js", "Tailwind CSS"],
    url: "https://github.com/YGNTECHSTARTUP/AANM-VVRSR",
    home: "https://aanm-vvrsr.vercel.app/",
    language: "Static Website",
  },

];


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
      {projects.map((project) => (
        <ProjectCard license={{
          name: ""
        }} key={project.name} {...project}  />
      ))}
    </motion.div>
  )
}

