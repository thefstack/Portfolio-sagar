import React from 'react'
import MouseIcon from '@mui/icons-material/Mouse';

const ScrollDown = () => {
  return (
    <div className='w-full relative'>
      <div className=' flex justify-center items-center gap-2 w-full'>
        <p className="text-gray-300">Scroll down</p>
        <div className='h-1 w-[20%] bg-gray-300/50 rounded-4xl'></div>
        <div className='h-2 w-8 flex justify-center items-center relative'>
          <MouseIcon className='animate-bounce text-white absolute top-1' />
        </div>
        
        <div className='h-1 w-[20%] bg-gray-300/50 rounded-4xl'></div>
        <p className="text-gray-300">to see projects</p>

      </div>
    </div>
  )
}

export default ScrollDown
