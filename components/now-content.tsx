"use client"

import { motion } from "framer-motion"
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
              Sigh. Another year is coming to an end—just two more days left. 😔 It feels like I was writing my last &quot;Now&quot; page only yesterday. 2024 has been an incredibly intense year for me—a year of drastic change, loss, and transformation. 💔✨
            </p>
            <p>
              From December 2023 to December 2024, I went through moments that reshaped my life in ways I never anticipated. I lost many things—both personally and professionally. I lost people who were close to me, and in the process, I changed—everything about me did. The way I look, the way I think, the way I approach life—none of it is the same anymore. 🔄 
            </p>
            <p>
              This year will forever remain unforgettable for me, not because of accomplishments, but because of the sheer intensity it brought into my life. ⚡ There were things I couldn&apos;t achieve and plans that didn&apos;t work out as I had hoped. And if I&apos;m being honest, I spent a lot of my time overthinking 🤯, daydreaming about the future ☁️, and researching things that, looking back, didn&apos;t really matter much to me.
            </p>
            <p>
              I also wasn&apos;t coding as consistently as I wanted to. 💻 You can even see that reflected in my GitHub contributions this year—it&apos;s a reminder of the highs and lows I&apos;ve been through. 📉📈
            </p>
            <p>
              As 2024 comes to a close, I&apos;m hoping to spend this final week being as productive as possible 🛠️ and making time for the people who matter—especially my family. ❤️
            </p>
            <p>
              That&apos;s it from me for now. I&apos;ll see you in the new year! 🌟 Wishing you a very Happy New Year in advance if you&apos;re reading this before it, and a belated Happy New Year if you&apos;re reading it after. 🎉🥳
            </p>
            <p>
              Take care, and goodbye for now. 👋
            </p>
          </div>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <LastUpdated date="29 December, 2024" />
      </motion.div>
    </motion.div>
  )
}

