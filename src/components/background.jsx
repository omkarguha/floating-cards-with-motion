import React from 'react';


function background() {
  return (
    <>
      <div className='fixed z-[2] w-full h-screen'>
        <div className='absolute top-[5%] w-full py-10 flex justify-center text-300 text-zinc-600 text-[1.5vw] font-semibold'>Documents</div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[10vw] leading-none tracking-tight font-semibold text-zinc-900'>Docs.</h1>
      </div>
    </>
  )
}

export default background
