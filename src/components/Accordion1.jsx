import React, { useState } from 'react';

const accordionData = [
  {
    id: 1,
    review:[

      '5.0 (392 reviews)',

      '2,538 students watched'

    ],
    question: 'Professional graphic design tutorial full course with exercise file',

    points: [
      'How to reduce file pixel dimentions without loosing quality',
      'How to make logo pixel perfects with different extension',
      'Create vector file from restarize layer styles',
      'Make color gradient with photoshop build-in tools',
      
    ],
    
  },
  {
    id: 2,
    review:[

      '5.0 (392 reviews)',

      '2,538 students watched'

    ],
    question: 'Become ultimate photoshop expert within 30 days',

    points: [
      'How to reduce file pixel dimentions without loosing quality',
      'How to make logo pixel perfects with different extension',
      'Create vector file from restarize layer styles',
      'Make color gradient with photoshop build-in tools'
    ],
    img: "https://i.postimg.cc/RVXhrzdz/Group-1.png"
  },
  {
    id: 3,
    review:[

      '5.0 (392 reviews)',

      '2,538 students watched'

    ],
    question: 'Adobe illustrator vector art design mockup',

    points: [
      'How to reduce file pixel dimentions without loosing quality',
      'How to make logo pixel perfects with different extension',
      'Create vector file from restarize layer styles',
      'Make color gradient with photoshop build-in tools'
    ],
    img: "https://i.postimg.cc/RVXhrzdz/Group-1.png"
  },
];

const Accordion1 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full mx-auto px-[8%] max-w-[1200px]  pb-24">
<div>

<p className='text-[#EF9E48] font-sans flex justify-center'>Quality features</p>
<h1 className='text-[27px] font-[500] flex justify-center pb-16 '>Popular Designing Course</h1>
</div>

      {accordionData.map((item, index) => (
        <div key={item.id} className="border px-5  mb-3 border-gray-300">
     
        <p className='pt-4 pl-10 text-[#0F2137] text-[14px] px-4 flex gap-4  items-center'><img src="https://i.postimg.cc/T3n1QbDw/1.png" className='h-[12px]' alt="" />
        
        {item.review.map((rating,i)=>(
<p className='flex ' key={i}>
👁
  {rating}
</p>
        ))}
        
        
        </p>

        
        
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center py-4 text-left"
          >
            <img src="https://i.postimg.cc/y8h2kVJD/play.png" alt="" />
            <span className="text-[18px] font-medium text-[#0F2137]">{item.question}</span>
           
            <div className='justify-center items-center w-full flex  '>
    <div className='bg-[#3FDBB1] text-[14px] w-fit mt-3 flex text-[#FFFFFF] px-3 py-1 rounded-md'>
    7 Video Classes | 4 hrs
</div>
    </div>
            <span className="text-xl text-[#050505] h-[3px]">
              {activeIndex === index ? '˄' : '˅'}
            </span>
          </button>
          {activeIndex === index && (
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2   text-sm text-gray-600 pl-6 pb-4 list-disc">
              {item.points.map((point, i) => (
                <div className='flex gap-3 items-center justify-start'>
                     <img src="https://i.postimg.cc/RVXhrzdz/Group-1.png" className='w-[15px] h-[15px]' alt="c" />
                     <li key={i} className='list-none'>{point}</li>
                </div>
           
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion1;
