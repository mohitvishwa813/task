import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const FreeTutorial = () => {
    const cards = [
        {
          id: 1,
          title: 'Convert your web layout theming easily with sketch zeplin extension',
          subtitle: 'Interactive content',
          video: 'https://videos.pexels.com/video-files/5183278/5183278-sd_640_360_30fps.mp4',
          stars: 5.0,
          reviews: 392,
          students: 1037,
        },
        {
            id: 2,
            title: 'Convert your web layout theming easily with sketch zeplin extension',
            subtitle: 'Interactive content',
            video: 'https://videos.pexels.com/video-files/6985449/6985449-sd_640_360_25fps.mp4',
            stars: 5.0,
            reviews: 392,
            students: 1037,
          },
          {
            id: 3,
            title: 'Convert your web layout theming easily with sketch zeplin extension',
            subtitle: 'Interactive content',
            video: 'https://videos.pexels.com/video-files/7084649/7084649-sd_640_360_25fps.mp4',
            stars: 5.0,
            reviews: 392,
            students: 1037,
          },
          {
            id: 4,
            title: 'Convert your web layout theming easily with sketch zeplin extension',
            subtitle: 'Interactive content',
            video: 'https://videos.pexels.com/video-files/6985246/6985246-sd_640_360_25fps.mp4',
            stars: 5.0,
            reviews: 392,
            students: 1037,
          },
      ];
  return ( 
    <div className='pb-32 md:pb-0 px-[8%] min-h-[85vh] w-full flex  items-center mx-auto relative '>
    <div className='flex lg:flex-row flex-col w-full items-center justify-center  lg:h-[70vh]'>
   {/* 1st div */} 
   <div className=' h-full md:px-[5%]   gap-y-10  w-[80%]   lg:w-[50%] flex  justify-center relative overflow-hidden'>
   <div className="w-full  md:p-4 relative overflow-x-hidden">
      <Swiper spaceBetween={20} slidesPerView={1.2}>
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-center">
              <video
                className="rounded-md mb-4"
                controls
                muted
                autoPlay
                loop
                src={card.video}
              />
               <div className="text-[#0F2137] mt-2">
                ⭐⭐⭐⭐⭐ {card.stars} ({card.reviews} reviews)
              </div>
              <h3 className="font-semibold text-lg">{card.title}</h3>
              {/* <p className="text-sm text-gray-500">{card.subtitle}</p> */}
             
              <div className="text-gray-400 text-sm">{card.students} students watched</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <img src="https://i.postimg.cc/8CWW8BHv/Group-2.png" alt=""   className='absolute w-[100%]  z-[-1]'/>
   </div>
   {/* 2nd div */}
   <div className='w-[80%]   pl-[2rem] lg:w-[50%]  flex flex-col  justify-center item-center'>
   
   <div className='lg:w-[60%]  h-[60vh]  flex flex-col gap-y-3'>
   <p className='text-[#EF9E48] font-sans'>Free tutorial</p>
   <h1 className='text-[27px] font-[500]'>More than  thousand
of free tutorial upload
every weeks</h1>
   
   <p className='leading-[2.3rem]'>Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
   <div className='bg-[#FFDC6B] text-[#ec8e00] px-4 py-2 rounded-md w-fit '>
   Explore details
</div>

   </div>
   </div>
    </div>
   
   
       </div>
  )
}

export default FreeTutorial