"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { LastUpdated } from "@/components/last-updated"
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

export function NowContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      
    
<h1 className="text-2xl lg:text-4xl font-semibold">Personal</h1>
      <motion.div variants={item}>
        <Card className="p-6">
        <div className="prose prose-gray dark:prose-invert max-w-none">
  <p className=" ">
    Sigh. Another year is coming to an end—just one more days left. 😔 . 2024 has been an incredibly 
    <span className="font-semibold">intense year</span>—a year of drastic change, loss, and transformation. 💔✨
  </p>
  <p>
    From <span className="font-semibold">December 2023 to December 2024</span>, I went through moments that reshaped my life in ways I never anticipated. 
    I lost many things—both <span className="font-semibold">personally</span> and <span className="font-semibold">professionally</span>. 
    I lost people who were close to me, and in the process, <span className="font-semibold">I changed</span>—everything about me did. 
    The way I look, the way I think, the way I approach life—none of it is the same anymore. 🔄 btw its not same anymore. i am Getting revived and i am not alone anymore this time.
  </p>
  <p>
    This year will forever remain <span className="font-semibold">unforgettable</span> for me, not because of accomplishments, 
    but because of the <span className="font-semibold">sheer intensity</span> it brought into my life. ⚡ There were things I couldn&apos;t achieve 
    and plans that didn&apos;t work out as I had hoped. And if I&apos;m being honest, I spent a lot of my time <span className="font-semibold">overthinking</span> 🤯, 
    <span className="font-semibold">daydreaming</span> about the future ☁️, and researching things that, looking back, 
    <span className="font-semibold">didn&apos;t really matter much</span> to me.
  </p>
  <p>
    I also wasn&apos;t coding as <span className="font-semibold">consistently</span> as I wanted to. 💻 You can even see that reflected in my &nbsp;
    <Link target="_blank" href={
      "https://github.com/YGNTECHSTARTUP"
    } className="underline d hover:transition-all hover:ease-in-out hover:no-underline decoration-wavy hover:text-yellow-700 dark:hover:text-yellow-500    decoration-yellow-600 decoration-2 decoration-none ">
    Github Contributions &nbsp;
    </Link>this year—it&apos;s a reminder of the <span className="font-semibold">highs</span> and 
    <span className="font-semibold">lows</span> I&apos;ve been through. 📉📈
  </p>
  <p>
    As 2024 comes to a close, I&apos;m hoping to spend this final week being as <span className="font-semibold">productive</span> as possible 🛠️ and making time 
    for the people who <span className="font-semibold">matter</span>—especially my family. ❤️
  </p>
  <p className="italic">
    That&apos;s it from me for now. I&apos;ll see you in the new year! 🌟 Wishing you a <span className="font-semibold">very Happy New Year</span> in advance if 
    you&apos;re reading this before it, and a <span className="font-semibold">belated Happy New Year</span> if you&apos;re reading it after. 🎉🥳
  </p>
  <p className="text-center font-semibold">
    Take care, and goodbye for now. 👋
  </p>
</div>


        </Card>
        <motion.div variants={item} className="mt-2">
          <LastUpdated date="30 December, 2024" />
        </motion.div>
      </motion.div>
      <h1 className="text-2xl lg:text-4xl font-semibold">Academic</h1>
      <motion.div variants={item}>
      <Card className="p-6">
  <div className="prose prose-gray dark:prose-invert max-w-none">
    <p>
      Man, I’ve been <span className="font-semibold">literally crying</span> over my academic performance lately. 😭💔 
      I feel like I’m lagging so far behind that if procrastination were a sport, I’d win gold every semester. 🏅 
      With exams just around the corner next month, you’d think I’d start preparing, but nope—motivation is currently on vacation. ✈️🌴
    </p>
    <p>
      And don’t even get me started on college assignments. They keep piling up like a never-ending boss battle, and I, the so-called protagonist, 
      keep postponing everything until the last possible moment. Then comes <span className="font-semibold">deadline day</span>, and suddenly I’m sprinting like I’m in a coding 
      hackathon—but only to finish a single assignment. 🏃‍♂️📄 Needless to say, it’s exhausting.
    </p>
    <p>
      To top it all off, opportunities are knocking at my door. 🚪✨ But instead of being excited, I’m standing there like: <span className="font-semibold">Do I accept this or run away screaming?</span> 
      I really need to learn how to say <span className="font-semibold">NO</span> when I know I can’t take on more stuff. But saying no is harder than debugging a 
      <code className="bg-gray-200 text-sm rounded px-1 py-0.5 dark:bg-gray-800 dark:text-gray-200">NullPointerException</code> while sleep-deprived. 😵‍💫
    </p>
  </div>
</Card>
<motion.div variants={item} className="mt-2" >
          <LastUpdated date="30 December, 2024" />
        </motion.div>
</motion.div>


    </motion.div>
  )
}

