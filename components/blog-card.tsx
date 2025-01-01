"use client"

import { motion } from "framer-motion"
import { Heart } from 'lucide-react'
import { Card } from "./ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog"
import Image from "next/legacy/image"
interface BlogCardProps {
  title: string
  likes: number
}

export function BlogCard({ title, likes }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Dialog>
      <DialogTrigger>
      <Card className="p-6 h-full cursor-pointer group">
        <div className="space-y-2">
          <h3 className="font-medium group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-muted-foreground">
            <Heart className="h-4 w-4 mr-1" />
            <span>{likes}</span>
          </div>
        </div>
      </Card>
      </DialogTrigger>
     <DialogContent>
      <div>
        <Image src="/sorry.png" alt="blog" width={500} height={300} />
        <h3 className="font-medium text-xl lg:tex-4xl group-hover:text-primary transition-colors">
            I had Not Written Yet But I will Write Soon
          </h3>
      </div>
     </DialogContent>
      </Dialog>
     
    </motion.div>
  )
}

