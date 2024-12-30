import { AboutContent } from "@/components/about-content"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pl-16">
        <div className="">
          <div className="max-w-4xl mx-auto py-20 ">
            <AboutContent />
          </div>
        </div>
      </main>
    </div>
  )
}

