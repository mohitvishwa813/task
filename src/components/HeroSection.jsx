import React from 'react'

const HeroSection = () => {
  return (
    <div className='px-[8%] min-h-[85vh] mx-auto relative pt-8'>
 <div className='flex md:flex-row flex-col lg:h-[70vh]'>
{/* 1st div */} 
<div className='pr-[16%] gap-y-5   md:w-[50%] flex flex-col justify-center '>
<p className='text-sm  flex gap-4'>
  <img src="https://i.postimg.cc/bJDKHxZV/image.png" alt="" className='w-[140px] h-[20px]' />
Trused by over 4,332 students
</p> 
<h1 className='sm:text-3xl lg:text-5xl font-bold lg:leading-[3.3rem]'>
Learn Design
<br />
with Nia Matos

</h1>
<p className='w-full flex justify-end items-end -mt-6 '>
  <img src="https://i.postimg.cc/SN8vKQ98/Frame.png" alt="" />
</p>
<p  className='text-sm leading-[2rem]'>
Get your blood tests delivered at let home collect sample from the victory of the managments that supplies best
design system guidelines ever.
</p>

<div className='px-4 py-3 flex justify-between items-center rounded-sm   text-[#02073E] bg-white' >
Search course name 
<img src=" https://i.postimg.cc/HWR3GGVN/Combined-shape-15225.png" alt="" className='w-[15px] h-[15px]'  />
</div> 
<div className='flex gap-5  pb-10 md:pb-0 flex-wrap  items-center'>
  <p className='w-fit '>
  Sponsored by: </p>
  <div className='w-[80px] '>
  <img src="https://i.postimg.cc/5yXVXcVG/paypal.png
  " alt=" "  className=' h-fit w-fit '/>
  </div>
  <div className='w-[90px] '>
    
  <img src="https://i.postimg.cc/xCKsgtPC/google.png
  " alt=""  className='  h-fit w-fit' />
  </div>
  <div className='w-[90px] '
  >
    
    <img src="https://i.postimg.cc/1txCpLw2/Dropbox-logo-2017.png
  " alt="" className=' h-fit w-fit ' />

  </div>


</div>
</div>
{/* 2nd div */}
<div className='   md:w-[50%] flex flex-col justify-center item-center'>
{/* 
<div className='w-[60%]  h-[60vh] '>
    <img src="https://i.postimg.cc/nhHWMhqn/image.png" alt="" />
</div> */}
<div className='md:w-[60%] h-[60vh]'>
  <video
    className='w-full h-full object-cover rounded-lg'
    src="https://videos.pexels.com/video-files/5184440/5184440-sd_360_640_30fps.mp4" 
    autoPlay
    muted
    loop
    playsInline
  />
</div>
</div>
 </div>
 <img src="https://i.postimg.cc/MKz5mrHD/BG.png" alt="" className=' h-[90vh] absolute  -top-20 left-0 z-[-1]' />


    </div>
  )
}

export default HeroSection