import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center min-h-screen min-w-full'>
      <div>
      <Image src="/sorry.png" alt="404" width={400} height={400} />
      <div>Work is Under Progress 🧑‍💻</div>
      </div>


    </div>
  )
}

export default page