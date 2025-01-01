
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
    <div
     
      className="bg-card  cursor-pointer hover:bg-gradient-to-br hover:from-primary/20 hover:via-primary/5 hover:to-transparent bg-gradient-to-br  from-primary/10 via-primary/5 to-transparent border-primary/20 border-2 text-card-foreground rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
    >
      <div className="p-6">
        <h3
          className="text-2xl font-bold mb-2"
        >
          {name}
        </h3>
        <p
          className="text-muted-foreground mb-4"
        >
          {description}
        </p>
        <div
          className="flex flex-wrap gap-2 mb-4"
        >
          {
            topics.length >= 1 ? topics.map((topic, index) => (
              <Badge key={index} className='bg-gradient-to-br   from-primary/40 via-primary/15 to-transparent border-primary/60'>{topic}</Badge>
            ))
           :  <Badge className='bg-gradient-to-br   from-primary/40 via-primary/15 to-transparent border-primary/60'>{language}
            </Badge>
}
        
         
        </div>
        <div
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
        </div>
      </div>
    </div>
  )
}

