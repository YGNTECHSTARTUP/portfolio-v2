"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { LastUpdated } from "@/components/last-updated"

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

export function NowContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <motion.div variants={item}>
        <Card className="p-6">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p>
              <em>Sigh</em>, the year is about to end in like 3 days, feels like I was writing the last content for my{" "}
              <code className="text-primary">now</code> page the last week only. 2022 has been a{" "}
              <span className="font-medium">not-so-good-but-not-so-bad</span> year for me. There were things I 
              couldn't accomplish but there were also a large number of things I did accomplish. In fact I was able 
              to check out most of the stuff from my 2022 checklist and that's a huge accomplishment according to me.
            </p>

            <p>
              I did make a lot of memories worth remembering this year, made new friends, lost some friends but in 
              the end none of it really matters except the fact that I survived yet another year. So, in case you want 
              to know what I have been doing, I have been wasting a good amount of time playing Valorant and apart 
              from that I tried exploring{" "}
              <Link href="https://kit.svelte.dev" className="text-primary hover:underline">
                Svelte Kit
              </Link>
              . I haven't been coding consistently tbh but I did try Advent of Code and sadly I lost on day 14 :(
            </p>

            <p>
              These last 3 days of 2022, I'm going to spend most of it doing productive things <em>hopefully</em> and spend 
              some time with family since college is closed for holidays. This is it for this time ig, see ya next year -- 
              and wishing you a very happy new year in advance in case you read it before it and a very happy belated new 
              year in case you read it after it. Bye.
            </p>
          </div>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <LastUpdated date="28 December, 2022" />
      </motion.div>
    </motion.div>
  )
}

