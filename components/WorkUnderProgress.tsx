import Image from "next/legacy/image"
import React from 'react'

const WorkUnderProgress = ({text}:{text:string}) => {
  return (
    <div className='flex justify-center items-center min-h-screen min-w-full mx-auto text-center'>
      <div>
      <Image src="/sorry.png" alt="404" width={400} height={400} className='' />
      <div className='text-5xl'>{text}🧑‍💻</div>
      </div>


    </div>
  )
}

export default WorkUnderProgress