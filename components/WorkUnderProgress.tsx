import Image from 'next/image'
import React from 'react'

const WorkUnderProgress = () => {
  return (
    <div className='flex justify-center items-center min-h-screen min-w-full'>
      <div>
      <Image src="/sorry.png" alt="404" width={400} height={400} className='md:ml-[6%]' />
      <div className='text-5xl'>Work is Under Progress 🧑‍💻</div>
      </div>


    </div>
  )
}

export default WorkUnderProgress