import { SidebarNav } from "@/components/sidebar-nav"
import { StatCard } from "@/components/stat-card"
import { DiscordStatus } from "@/components/discord-status"
import { BackgroundBeams } from "@/components/ui/background-beams"

// This would typically come from your API or database
async function getStats() {
  return {
    age: 21.821267745,
    githubStars: 615,
    githubFollowers: 304,
    spotifyPlays: 51087,
    siteViews: 0,
    codingHours: 646
  }
}

export default async function DashboardPage() {
  const stats = await getStats()
  
  return (
    <div className="min-h-screen bg-background">
      <SidebarNav />
      <main className="pl-16">
        <div className="relative">
          <div className="max-w-5xl mx-auto py-20">
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-lg text-muted-foreground">
                  Random stats and stuff related to me.
                </p>
              </div>

              <DiscordStatus
                status="offline"
                username="asheeshh#0"
                avatar="/placeholder.svg"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <StatCard
                  title="My Age"
                  value={stats.age}
                  decimals={9}
                />
                <StatCard
                  title="GitHub Stars"
                  value={stats.githubStars}
                  link="https://github.com/asheeshh"
                />
                <StatCard
                  title="GitHub Followers"
                  value={stats.githubFollowers}
                  link="https://github.com/asheeshh?tab=followers"
                />
                <StatCard
                  title="Spotify Plays"
                  value={stats.spotifyPlays}
                  link="https://open.spotify.com/user/asheeshh"
                />
                <StatCard
                  title="Site Views"
                  value={stats.siteViews}
                />
                <StatCard
                  title="Coding Hours"
                  value={stats.codingHours}
                />
              </div>
            </div>
          </div>
          <BackgroundBeams />
        </div>
      </main>
    </div>
  )
}

