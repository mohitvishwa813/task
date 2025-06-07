import React from 'react'
const stats = [
    {
      value: "80K+",
      description: "We have more than students",
      color: "text-orange-500",
    },
    {
      value: "150+",
      description: "Free online tutorials videos available",
      color: "text-rose-500",
    },
    {
      value: "90+",
      description: "Daily updated blog post maintain",
      color: "text-pink-500",
    },
    {
      value: "& 3M",
      description: "Job posted everydays with qualification",
      color: "text-purple-400",
    },
  ];
const CoreFeatures = () => {
  return (
    <div className='px-[8%] min-h-[85vh] mx-auto relative pb-20 '>
    <div className='flex lg:flex-row flex-col   lg:h-[70vh]'>
   {/* 1st div */} 
   <div className='  gap-y-10  md:w-[80%]  lg:w-[50%] flex  justify-center  '>
   <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 max-w-4xl mx-auto  '>
   
   {stats.map((stat, index) => (
        <div
          key={index}
         className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center justify-center text-center w-[200px] h-[200px] mx-auto 
             transform transition duration-300 hover:scale-105 hover:-translate-y-2">
          <h2 className={`text-4xl font-bold mb-2 ${stat.color}`}>
            {stat.value}
          </h2>
          <p className="text-gray-600 text-sm">{stat.description}</p>
        </div>
      ))}


   </div>
 
   </div>
   {/* 2nd div */}
   <div className='w-[90%]  lg:w-[50%]  flex flex-col justify-center item-center'>
   
   <div className='lg:w-[60%]  h-[60vh]  flex flex-col gap-y-3'>
   <p className='text-[#EF9E48] font-sans'>Core features</p>
   <h1 className='text-[27px] font-[500]'>Smart Jackpots that you may love this anytime & anywhere</h1>
   
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

export default CoreFeatures