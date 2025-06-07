import React from 'react';

const amp = [
  {
    id: 1,
    image: 'https://videos.pexels.com/video-files/4769579/4769579-sd_360_640_25fps.mp4', 
    rating: '5.0 (392 reviews)',
    title: 'How to work with prototype design with adobe xd featuring tools',
    views: '2,538 students watched',
  },
  {
    id: 2,
    image: 'https://videos.pexels.com/video-files/6325286/6325286-sd_360_640_24fps.mp4', 
    rating: '5.0 (392 reviews)',
    title: 'How to work with prototype design with adobe xd featuring tools',
    views: '2,538 students watched',
  },
  {
    id: 3,
    image: 'https://videos.pexels.com/video-files/5183271/5183271-sd_640_360_30fps.mp4', 
    rating: '5.0 (392 reviews)',
    title: 'How to work with prototype design with adobe xd featuring tools',
    views: '2,538 students watched',
  },
  {
    id: 4,
    image: 'https://videos.pexels.com/video-files/5904566/5904566-sd_360_640_24fps.mp4', 
    rating: '5.0 (392 reviews)',
    title: 'How to work with prototype design with adobe xd featuring tools',
    views: '2,538 students watched',
  },

  
];

const QualityFeatures = () => {
  return (
    <div className='min-h-[70vh] px-[8%] mx-auto flex flex-col items-center justify-center w-full '>
      <p className='text-[#EF9E48] font-sans'>QualityFeatures</p>
      <h1 className='text-[20px] font-[500] pb-16'>Tutorials that people love most</h1>

      {/* Cards Container */}
      <div className=' touch-auto  flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 w-full px-32'>
      {amp.map((item) => (
        <div
        key={item.id}
        className='w-[300px] min-w-[300px] mb-3 pb-7 h-[360px] flex flex-col flex-shrink-0 gap-y-3 rounded-md overflow-hidden shadow-md'
      >
            <div className='h-[60%] '>
              <video  className='w-full h-full object-cover rounded-lg'
    src={item.image} 
    autoPlay
    muted
    loop
    playsInliner />
            </div>
            <p className='text-[#0F2137] text-[14px] px-4 flex gap-4  items-center'><img src="https://i.postimg.cc/T3n1QbDw/1.png" className='h-[12px]' alt="" />{item.rating}</p>
            <p className='text-[#0F2137] px-4 font-bold'>{item.title}</p>
            <p className='text-[#0F2137] px-4 text-[14px]  flex justify-center items-center'>
            👁
              {item.views}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QualityFeatures;
