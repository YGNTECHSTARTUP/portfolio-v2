'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { Project as ProjectCardProps } from '@/app/constant'
import { Badge } from './ui/badge'


export function ProjectCard({
  topics,
  description,
  url,
  home,
  language,
  name,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
     
      className="bg-card  cursor-pointer hover:bg-gradient-to-br hover:from-primary/20 hover:via-primary/5 hover:to-transparent bg-gradient-to-br  from-primary/10 via-primary/5 to-transparent border-primary/20 border-2 text-card-foreground rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
    >
      <div className="p-6">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold mb-2"
        >
          {name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground mb-4"
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-4"
        >
          {
            topics.length >= 1 ? topics.map((topic, index) => (
              <Badge key={index} className='bg-gradient-to-br   from-primary/40 via-primary/15 to-transparent border-primary/60'>{topic}</Badge>
            ))
           :  <Badge className='bg-gradient-to-br   from-primary/40 via-primary/15 to-transparent border-primary/60'>{language}
            </Badge>
}
        
         
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-between items-center"
        >
          <Link
            href={url}
            className="text-primary hover:underline flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-4 h-4 mr-1" />
            {name}
          </Link>
          {home && (
            <Link
              href={home}
              className="text-primary hover:underline flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Visit
            </Link>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

