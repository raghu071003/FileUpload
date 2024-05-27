import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='flex justify-center items-center h-96 w-full'>
            <div className='block py-2 pr-4 pl-3 duration-200 lg:p-0 text-white font-extrabold text-3xl'>
               <p>Hey User! Please Login to view Files</p>
               <p>If you are aldready logged in , Please <Link to='/folders' className='underline'>Click Here</Link></p>
            </div>
      </div>
    </div>
  )
}

export default Home
 