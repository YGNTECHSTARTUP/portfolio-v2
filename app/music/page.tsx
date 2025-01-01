

import { MusicContent } from "@/components/music-content"


export default function MusicPage() {

  return (
    <div className="min-h-screen bg-background">
      <main
        className="p-3  md:pl-16 lg:pl-0"
       
    
      >
        <div className="relative">
          <div className="max-w-5xl mx-auto py-20">
            <div className="space-y-8">
              <div
               
              >
                <h1 className="text-4xl font-bold tracking-tight">Music</h1>
                <p className="text-lg text-muted-foreground">
                  A glimpse into my musical world
                </p>
              </div>
              <div>
                <MusicContent/>
      </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

