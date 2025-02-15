import Link from "next/link"

interface BlogPost {
  date: string
  title: string
  link: string
}

const blogPosts: BlogPost[] = [
  {
    date: "Feb 15, 2025",
    title: "Story Of Open Source",
    link: "https://ubiquitous-elderberry-49b.notion.site/Story-of-Open-Source-199c5c1589708094a89edb25414b50eb?pvs=4",
  }
]

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8 md:py-12 p-3 md:pl-16 md:mb-[35%] ">
      <h1 className="text-4xl md:text-5xl font-serif mb-6 ">Blogs</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Every week, I documente and articulate my acquired knowledge and personal perspectives on topics that captivate
        my interest. Here are all blogs I wrote to date.
      </p>
      <ul className="space-y-4">
        {blogPosts.map((post) => (
          <li key={post.link} className="flex flex-col sm:flex-row sm:items-center gap-2">
            <span className="font-mono text-muted-foreground whitespace-nowrap">{post.date} :</span>
            <Link href={post.link} className="text-blue-600 hover:text-blue-800 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

