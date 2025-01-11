// import globals.css
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { SidebarNav } from "@/components/sidebar-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/Footer"
import UmamiProvider from "next-umami"
export const metadata = {
  title: 'YGNs Portfolio',
  description: 'A Personalized Portfolio of Gagan 🦀',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UmamiProvider    websiteId="3374a1ff-279d-421a-99bc-7e77352e5af2"/>
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            >
               <header className="sticky top-0 z-40 border-b bg-background md:hidden">
                <div className="container flex h-16 items-center justify-between ">
                  <MobileNav />
                </div>
              </header>
              <SidebarNav />
              {children}
              <Footer/>
              </ThemeProvider></body>
    </html>
  )
}
