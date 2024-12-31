// "use client"

// import { motion } from "framer-motion"
// import { useState } from "react"
// import { BlogPost } from "@/lib/blog"
// import { EnhancedBlogCard } from "@/components/enhanced-blog-card"
// import { Input } from "@/components/ui/input"
// import { Search } from 'lucide-react'

// interface BlogGridProps {
//   initialPosts: BlogPost[]
// }

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// }

// export function BlogGrid({ initialPosts }: BlogGridProps) {
//   const [searchQuery, setSearchQuery] = useState("")
  
//   const filteredPosts = initialPosts.filter(post => 
//     post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     post.brief.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     post.tags.some(tag => tag.name.toLowerCase().includes(searchQuery.toLowerCase()))
//   )

//   return (
//     <div className="space-y-8">
//       <div className="relative">
//         <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//         <Input
//           placeholder="Search posts..."
//           className="pl-10"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>
      
//       <motion.div
//         variants={container}
//         initial="hidden"
//         animate="show"
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//       >
//         {filteredPosts.map((post) => (
//           <EnhancedBlogCard key={post.id} post={post} />
//         ))}
//       </motion.div>
      
//       {filteredPosts.length === 0 && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-center py-12"
//         >
//           <p className="text-muted-foreground">No posts found matching your search.</p>
//         </motion.div>
//       )}
//     </div>
//   )
// }

