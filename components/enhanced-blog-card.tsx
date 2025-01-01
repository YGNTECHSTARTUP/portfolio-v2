"use client"

import { motion } from "framer-motion"
import Image from "next/legacy/image"
import Link from "next/link"
import { format } from "date-fns"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Clock } from 'lucide-react'
import { BlogPost } from "@/lib/blog"

interface EnhancedBlogCardProps {
  post: BlogPost
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function EnhancedBlogCard({ post }: EnhancedBlogCardProps) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`https://hashnode.com/${post.slug}`} target="_blank">
        <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
          <div className="relative aspect-[16/9]">
            <Image
              src={post.coverImage?.url || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  <span>{post.reactionCount}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" />
                  <span>{post.responseCount}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground line-clamp-3">
                {post.brief}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag.name} variant="secondary">
                    {tag.name}
                  </Badge>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                {format(new Date(post.dateAdded), 'MMMM d, yyyy')}
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}

