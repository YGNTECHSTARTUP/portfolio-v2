import Link from "next/link"
import { SidebarNav } from "@/components/sidebar-nav"
import { BackgroundBeams } from "@/components/ui/background-beams"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SidebarNav />
      <main className="pl-16">
        <div className="relative">
          <div className="max-w-5xl mx-auto py-20">
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
                <p className="text-lg text-muted-foreground">
                  Most of the things you (maybe) want to know about me
                </p>
              </div>

              <div className="space-y-6 text-muted-foreground">
                <p>
                  I&apos;m ashish aka asheeshh on the web. I&apos;m a 19 y/o student belonging to the Homo Sapiens species, a brother, a son, a friend, a self taught web developer and programmer, an open source enthusiasist, an extreme melophile and I go by the bio - <span className="underline">best of the worst sides</span>.
                </p>

                <p>
                  As my age already suggests, I&apos;m a high school graduate and an undergrad in college pursuing B.Tech (soon). I had already started programming back when I was in 11th standard as we had python in our school curriculum. I started web development one year later and I like working on the web a lot (mostly frontend). Oh, btw - I don&apos;t design my web apps 😅. If you want to know about what programming languages I know, they are - typescript, python, go and a little bit of ruby and cplusplus.
                </p>

                <p>
                  I&apos;m also into technical writing and blogging. I write mostly on{" "}
                  <Link href="https://dev.to" className="text-primary hover:underline">
                    Dev.to
                  </Link>
                  . I&apos;m also a freelace technical writer for{" "}
                  <Link href="https://scrimba.com" className="text-primary hover:underline">
                    Scrimba
                  </Link>{" "}
                  and{" "}
                  <Link href="https://kinsta.com" className="text-primary hover:underline">
                    Kinsta
                  </Link>
                  .
                </p>

                <p>
                  Things I do other than dev and programming? Not much, but I do play football (touching grass is important). I also just like to go on the terrace with soft music and watch clouds pass by 😌. I&apos;ve also started gaming recently (only{" "}
                  <Link href="https://playvalorant.com" className="text-primary hover:underline">
                    VALORANT
                  </Link>
                  ). Apart from these, I don&apos;t have much to do other than overthinking and staring at my phone screen.
                </p>

                <p>
                  I don&apos;t talk much over any platform but I like making friends (be it online or irl though I&apos;m somewhat introverted!). So, in case you want to talk about anything, just hit me up and I&apos;ll get back to you once I&apos;m active/online. All my social links are listed{" "}
                  <Link href="#" className="text-primary hover:underline">
                    here
                  </Link>
                  .
                </p>

                <p>
                  That&apos;s pretty much everything I know about me yet. In case you know something about me that I still don&apos;t, please let me know - I&apos;ll add it here.
                </p>
              </div>

              <footer className="pt-8 text-sm text-muted-foreground">
                <Link
                  href="https://opensource.org/licenses/MIT"
                  className="hover:text-primary hover:underline"
                >
                  MIT
                </Link>
                {" "}2022-present ©{" "}
                <Link
                  href="https://github.com/ashish"
                  className="hover:text-primary hover:underline"
                >
                  ashish
                </Link>
              </footer>
            </div>
          </div>
          <BackgroundBeams />
        </div>
      </main>
    </div>
  )
}

