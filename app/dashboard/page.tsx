import { SidebarNav } from "@/components/sidebar-nav"
import { DashboardContent } from "@/components/dashboard-content"
export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <SidebarNav />
      <main className="p-3">
        <div className="relative">
          <div className="max-w-5xl mx-auto py-20">
            <DashboardContent />
          </div>
        </div>
      </main>
    </div>
  )
}

