"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {  Gamepad2, Tv, Leaf, BrainCircuit, PenIcon } from 'lucide-react'
import { CodeBlock } from "./ui/code-block"
import Link from "next/link"
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function AboutContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      <motion.div variants={item} className="space-y-2 container mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">Hello, World! 🌍🦀</h1>
        <p className="text-xl text-muted-foreground">
          I&apos;m <span className="font-semibold">Gagan</span>, but you can call me <span className="font-semibold">YGN</span> on the web.
          I&apos;m an <span className="font-semibold">18-year-old sophomore</span> at <span className="font-semibold">Andhra University</span>,
          and a proud member of the sacred Rustacean Clan. 🦀✨
        </p>
      </motion.div>

      <motion.div variants={item}>
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">How It All Began</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I dove headfirst into the coding universe right after acing my 10th-grade exams. 🚀💻 Thanks to my diploma,
              I got an early VIP pass to the tech world, tinkering with computers before most folks even knew what a <code>for</code> loop was. 😎✨
            </p>
            <p>
              I started my journey with <span className="font-medium">cybersecurity</span>, fueled by my childhood obsession with
              <span className="font-medium"> Kali Linux tools</span> and <span className="font-medium">ethical hacking</span>.
              Those days were all about exploring vulnerabilities and understanding how the digital world ticks. 🛡️💻
            </p>
            <p>
              Then, I took a creative detour into <span className="font-medium">game development</span>—or, more accurately,
              <span className="font-medium"> game design</span>—because I actually designed a game using the
              <span className="font-medium"> CORE game engine</span>! You can even check out a <Link href={"https://youtu.be/Sh2UfNZtg78"} target="_blank">
              <span className="underline decoration-wavy hover:transition-all hover:ease-in-out hover:no-underline decoration-wavy hover:text-yellow-700 dark:hover:text-yellow-500    decoration-yellow-600 decoration-2 decoration-none ">
              video
                </span>
              </Link> of it on YouTube. 🎮✨
            </p>
            <p>
              After that, I ventured into the vast world of <span className="font-medium">web development</span>, diving into all things frontend, backend, and beyond.
              But, as they say, the journey never stops. Now, I&apos;ve found myself deep in the <span className="font-medium">Rust world</span>,
              where I&apos;m focusing on building cutting-edge solutions for <span className="font-medium">real-time data distribution</span>. 🦀🚀
            </p>
          </div>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Languages I Speak (Well, Code)</h2>
          <p className="mb-4 text-muted-foreground">Let&apos;s just say I&apos;ve done a bit of globetrotting in the programming world:</p>
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">C</Badge>
              <Badge variant="secondary">C++</Badge>
              <Badge variant="secondary">Java</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">JavaScript</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              I passed exams and earned badges in these, but let&apos;s be honest: they&apos;re mostly NPCs in my coding story. 🎮
            </p>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Rust</Badge>
              <Badge variant="default">TypeScript</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              These are my <em>main characters</em>. Rust is like that strict teacher who refuses to let you make a mistake (thanks, borrow checker),
              but also the one who makes you better every day. TypeScript? That&apos;s my go-to for building sleek UIs and keeping bugs at bay.
            </p>
          </div>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Full-Stack Adventures</h2>
          <p className="text-muted-foreground">
            I&apos;ve built my own <Link href={"https://ygntech.vercel.app/MyTechStack" 
            } target="_blank">
            <span className="font-medium underline decoration-wavy hover:transition-all hover:ease-in-out hover:no-underline decoration-wavy decoration-yellow-600 hover:text-yellow-700 dark:hover:text-yellow-500    decoration-2 decoration-none ">YGN Tech Stack</span>
            </Link> , crafted with love and lots of sleepless nights.
            It&apos;s a mix of everything I&apos;ve learned so far, so go ahead and check it out—it&apos;s my magnum opus (for now).
          </p>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Writing? Soon™</h2>
          <p className="text-muted-foreground">
            When I&apos;m not coding or geeking out over Rustacean quirks, I&apos;m trying to explore the world of
            <span className="font-medium"> technical writing and blogging</span>. I&apos;m still getting my feet wet there,
            but hey, maybe one day I&apos;ll blow your mind with my posts. Stay tuned for that!
          </p>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Outside the Code Editor…</h2>
          <p className="mb-4 text-muted-foreground">When I&apos;m not debugging or Coding, I like to unwind with:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <Gamepad2 className="h-5 w-5 text-primary" />
              <span><strong>Gaming</strong>: Right now, I&apos;m all about <Link href={"https://genshin.hoyoverse.com/en/" 
            } target="_blank">
<span className="font-medium underline decoration-wavy hover:transition-all hover:ease-in-out hover:no-underline decoration-wavy decoration-yellow-600 hover:text-yellow-700 dark:hover:text-yellow-500   decoration-2 decoration-none "><em>Genshin Impact </em> </span> 
            </Link>
             (aka Primogem Poverty Simulator). 🎮</span>
            </li>
            <li className="flex items-center gap-2">
              <Tv className="h-5 w-5 text-primary" />
              <span><strong>Anime & Web Series</strong>: Binge-watching is my superpower. Give me good recommendations, and we&apos;ll be besties. 💻</span>
            </li>
            <li className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              <span><strong>Nature Escapades</strong>: I often retreat to the terrace with some soft <Link href={"/music"}>
              <span className="font-medium underline  decoration-yellow-600 decoration-2  hover:transition-all hover:ease-in-out hover:no-underline decoration-wavy hover:text-yellow-700 dark:hover:text-yellow-500   ">music</span>
              </Link>, lost in thoughts about Future and the mysteries of life. 🌿 </span> 
            </li>
            <li className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-primary" />
              <span>Also, let&apos;s not forget my daily grind of <strong>overthinking</strong>. It&apos;s like a while loop with no <code>break</code>. 🌀</span>
            </li>
            <li className="flex items-center gap-2">
              <PenIcon className="h-5 w-5 text-primary" />
              <span>
                <strong>Doodling</strong>: I&apos;m no Picasso, but I love sketching random stuff when I&apos;m not writing or Debugging code. 🎨
              </span>

            </li>
          </ul>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Let&apos;s Be Friends!</h2>
          <p className="text-muted-foreground">
            Despite being a bit of an <span className="font-medium">introvert</span>, I love connecting with people—whether it&apos;s about Rust,
            anime plot twists, or just some random life chatter. Hit me up anytime (don&apos;t worry, I&apos;ll reply once I&apos;m done overanalyzing how to say &quot;hi&quot;). 🫣
          </p>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Me in a Nutshell (Or <code>Option&lt;T&gt;</code>)</h2>
          <p className="mb-4 text-muted-foreground">If you asked the Rust compiler to define me, it might look like this:</p>
          <CodeBlock
            code={`struct Gagan {
    age: u8,
    skills: Vec<String>,
    passions: Vec<String>,
}

impl Gagan {
    fn chill(&self) {
        println!("On terrace, overthinking with soft music...");
    }

    fn debug_life(&self) {
        println!("Why am I like this? 🌀");
    }
}`}
            language="rust"
          />
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="p-6">
          <p className="text-muted-foreground">
            That&apos;s all about me! If you know something about me that I don&apos;t, feel free to <span className="text-yellow-700 text-primary bg-transparent bg-gradient-to-tr from-primary-foreground/80  ">
            hit_me_up();   </span>.
            Until then, let&apos;s keep our code clean, our dreams big 🚀
          </p>
          <p className="mt-4 font-semibold">
            Cheers and happy hacking,
          </p>
          <p className="font-bold text-lg">
            Gagan 🦀
          </p>
        </Card>
      </motion.div>
    </motion.div>
  )
}

