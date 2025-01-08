
import { SidebarNav } from "@/components/sidebar-nav"
import { ProjectGrid } from "@/components/project-grid"



export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SidebarNav />
      <main
        className="p-3  md:pl-16 "
        
      >
        <div className="relative">
          <div className="max-w-6xl mx-auto py-20">
            <div className="space-y-8">
              <div
           
                className="space-y-2"
              >
                <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
                <p className="text-lg text-muted-foreground">
                  A collection of projects I&apos;ve worked on
                </p>
              </div>
              <ProjectGrid />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

