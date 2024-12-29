import { Hero } from "@/components/hero"
import { SidebarNav } from "@/components/sidebar-nav"
import { BlogCard } from "@/components/blog-card"
import { ProjectCard } from "@/components/project-card"

const blogs = [
  {
    title: "[Boost]",
    likes: 0
  },
  {
    title: "Creating a full-stack AI based calorie/nutrition tracker in just 8 hrs using Supabase & Lovable",
    likes: 20
  },
  {
    title: "Creating a Pokémon guessing game using Supabase, Drizzle, and Next.js in just 2 hours!",
    likes: 77
  }
]

const projects = [
  {
    title: "asrvd.me",
    description: "personal site made using the t3 stack",
    stars: 150,
    forks: 9
  },
  {
    title: "favmoji",
    description: "use emojis (twemoji) as favicon in your project using link tags",
    stars: 16,
    forks: 2
  },
  {
    title: "ohmypoll",
    description: "nextjs app to create and share polls",
    stars: 16,
    forks: 4
  },
  {
    title: "ponsor",
    description: "getting sponsored made easy with widgets !",
    stars: 0,
    forks: 0
  },
  {
    title: "onigiri",
    description: "a very dark, minimal, powerful and fully customizable",
    stars: 0,
    forks: 0
  },
  {
    title: "flow",
    description: "a minimal ocean themed startpage (WIP)",
    stars: 0,
    forks: 0
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SidebarNav />
      <main className="pl-16">
        <Hero />
        
        <div className="max-w-5xl mx-auto py-20 space-y-20">
          <section>
            <h2 className="text-3xl font-bold mb-8">Recent Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogs.map((blog, index) => (
                <BlogCard key={index} {...blog} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8">Top Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

