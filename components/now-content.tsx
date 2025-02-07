/* eslint-disable react/no-unescaped-entities */
"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { LastUpdated } from "@/components/last-updated"
import Link from "next/link"
import { VerseOnMind } from "./verse-on-mind"
import { SongOnMind } from "./song-on-mind"

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
  <p>
    Aaagh! The first month of <span className="font-semibold">2025</span> has been a ride. 🚀  
    So many <span className="font-semibold">opportunities</span>, so many lessons—but if I had to pick one,  
    it’s how to <span className="font-semibold">stay confident</span> in myself, no matter what.  
  </p>
  <p>
    It started with a <span className="font-semibold">failed interview</span> in the first week. 😞  
    Not because I lacked <span className="font-semibold">tech skills</span>, but because my problem-solving wasn’t up to the mark.  
    That stung. I felt embarrassed—like having all the right tools but not knowing how to use them. 🔧🧠  
  </p>
  <p>
    But instead of dwelling on it, I spent the first half of the month diving into <span className="font-semibold">new tech</span>,  
    exploring <span className="font-semibold">project ideas</span>, and just researching everything I could. 🔍  
    A deep dive into the unknown—equal parts exciting and overwhelming.  
  </p>
  <p>
    Then, reality hit: <span className="font-semibold">my semester was coming up</span>. 📚  
    I told myself, "Time to focus," but my mind had other plans.  
    One moment, I’m studying. The next? I’m watching a random video on "How Does Microservice architecture was Deployed." 🌌🤦‍♂️  
  </p>
  <p>
    I tried pushing through, but then—plot twist—my university <span className="font-semibold">postponed the semester</span>. 😳  
    Great news, right? Well… sort of. Instead of using the extra time wisely, I ended up postponing everything else too. 😂  
  </p>
  <p>
    Just when I thought I had a break, my <span className="font-semibold">internship</span> called. ☎️  
    “Hey, we need you to work on a project. Urgently.”  
    I thought, "Two days of work? No big deal." So, I got it done—<span className="font-semibold">90% finished</span>, submitted it,  
    and told them, "Don't disturb me during my semester!" 😌  
  </p>
  <p>
    But guess what? The <span className="font-semibold">production launch</span> happened right in the middle of my exams. 😩  
    Suddenly, I was juggling between fixing <span className="font-semibold">bugs</span>, taking unexpected <span className="font-semibold">calls</span>,  
    and trying to focus on my studies. My brain was officially running on multiple threads. 🏃‍♂️💻📖  
  </p>
  <p>
    It was a wild month—one where I learned a lot, struggled a bit, and somehow made it through.  
    <span className="font-semibold">Lesson learned:</span> Life won’t always wait for the "perfect" time, so you just have to roll with it.  
  </p>
  <p>
    <span className="font-semibold">And that’s how my January went.</span> Let’s see what February brings. 🤞  
  </p>
</div>



        </Card>
        <motion.div variants={item} className="mt-2">
          <LastUpdated date="07 February, 2025" />
        </motion.div>
      </motion.div>
      <h1 className="text-2xl lg:text-4xl font-semibold">Academic</h1>
      <motion.div variants={item}>
      <Card className="p-6">
      <div className="prose prose-gray dark:prose-invert max-w-none">
  <p>
    Man, I literally have no words right now. I’m on the verge of tears over my <span className="font-semibold">academic performance</span>. 😭  
    This month was all about my <span className="font-semibold">semester exams</span>, which meant I had to focus on studying…  
    but life had other plans.  
  </p>
  <p>
    See, I was also doing an <span className="font-semibold">internship</span>, and juggling both was straight-up chaos. 💀  
    To make it work, I made the ultimate sacrifice—<span className="font-semibold">my sleep</span>. 🛌❌  
  </p>
  <p>
    My schedule? A masterpiece of madness:  
    <ul className="">
      <li>☀️ <span className="font-semibold">Morning</span>: Internship work, fixing bugs, handling tasks. 👨‍💻🐛</li>
      <li>🌙 <span className="font-semibold">Afternoon</span>: Study time... or at least, that was the plan.  
        But sometimes, urgent fixes dragged me back to work. 😵‍💫</li>
      <li>🌌 <span className="font-semibold">Night</span>: PANIC MODE. 🚨 I’d barely covered two lessons,  
        but I needed at least five to score decently. Time to <span className="font-semibold">activate the grind</span>. ⚡</li>
    </ul>
  </p>
  <p>
    From <span className="font-semibold">night till 2 AM</span>, I locked in—no distractions, no nonsense, just raw studying. 📚😤  
    Then, with barely three hours of sleep, I was up again at <span className="font-semibold">5 AM</span>,  
    cramming last-minute topics and solving <span className="font-semibold">PYQs</span> like my life depended on it.  
    By some miracle, I finished the last lesson just in time. 🎯  
  </p>
  <p>
    But after writing my <span className="font-semibold">first exam</span>, something hit me. 🤯  
    I felt this deep sadness, this crushing doubt—like, <span className="italic">what if I’m just not good enough?</span> 😞  
    The stress, the exhaustion, the constant switching between work and studies… it all got to me.  
    And at that moment, I had a realization: <span className="font-semibold">The semester isn’t everything.</span> 🤷‍♂️  
  </p>
  <p>
    So, I took a step back. Instead of forcing an impossible study schedule,  
    I started preparing <span className="font-semibold">just the day before</span> each exam. 🥲  
    The funny thing? It actually worked! 😂 By the grace of the exam gods,  
    things lined up perfectly, and I managed to write my papers well.  
  </p>
  <p>
    Now, there's just <span className="font-semibold">one last exam</span> left, and once that’s done,  
    I’ll officially be done with my <span className="font-semibold">BTech 2nd-year, 1st semester</span>. 🎉  
    Then, it’s back to my real plans—the ones that actually excite me. 🚀  
  </p>
  <p>
    Just gotta survive this last exam. Wish me luck. 🤞😆  
  </p>
</div>

</Card>
<motion.div variants={item} className="mt-2" >
          <LastUpdated date="07 Feb, 2025" />
        </motion.div>
</motion.div>
<motion.div variants={item}>
        <VerseOnMind />
      </motion.div>

      <motion.div variants={item}>
        <SongOnMind />
      </motion.div>

      <motion.div variants={item}>
        <LastUpdated date="07 Feb, 2025" />
      </motion.div>


    </motion.div>
  )
}

