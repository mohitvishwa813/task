import React, { useState } from 'react';
const card1 =[
    {
        id: 1,
        image: 'https://i.postimg.cc/tgxYtjDh/Combined-shape-16072.png', 
        text: 'Ultimate access to all course, exercises and assessmentsHow to work with prototype design with adobe xd featuring tools',
      },
      {
        id: 2,
        image: 'https://i.postimg.cc/tgxYtjDh/Combined-shape-16072.png', 
        text: 'Free acess for all kind of exercise corrections with downloads.',
      },
      {
        id: 3,
        image: 'https://i.postimg.cc/tgxYtjDh/Combined-shape-16072.png', 
        text: 'Total assessment corrections with free download access system',
      },
      {
        id: 4,
        image: 'https://i.postimg.cc/sXC1TN0b/Group.png', 
        text: 'Unlimited download of courses on the mobile app contents',
      },
      {
        id: 5,
        image: 'https://i.postimg.cc/sXC1TN0b/Group.png', 
        text: 'Download and print courses and exercises in PDF',
      },

]
const card2 =[
    {
        id: 1,
        image: 'https://i.postimg.cc/tgxYtjDh/Combined-shape-16072.png', 
        text: 'Ultimate access to all course, exercises and assessmentsHow to work with prototype design with adobe xd featuring tools',
      },
      {
        id: 2,
        image: 'https://i.postimg.cc/tgxYtjDh/Combined-shape-16072.png', 
        text: 'Free acess for all kind of exercise corrections with downloads.',
      },
      {
        id: 3,
        image: 'https://i.postimg.cc/tgxYtjDh/Combined-shape-16072.png', 
        text: 'Total assessment corrections with free download access system',
      },
      {
        id: 4,
        image: 'https://i.postimg.cc/tgxYtjDh/Combined-shape-16072.png', 
        text: 'Unlimited download of courses on the mobile app contents',
      },
      {
        id: 5,
        image: 'https://i.postimg.cc/tgxYtjDh/Combined-shape-16072.png', 
        text: 'Download and print courses and exercises in PDF',
      },

]
const Pricingpanel = () => {
  const [isAnnual, setIsAnnual] = useState(false); 
  
  const handleToggle = (value) => {
    setIsAnnual(value);
  };
  const cardsToRender = isAnnual ? card2 : card1;

  return (
    <div className='px-[8%] flex min-h-[70vh] justify-center items-center flex-col py-10 gap-y-3'>
      <p className='text-[#EF9E48] font-sans flex justify-center'>Pricing Plan</p>
      <h1 className='text-[27px] font-[500] flex justify-center'>Choose your pricing policy</h1>

      <div className='flex flex-col justify-center p-2 w-full  '>
        <div className='flex w-full justify-center  '>
          <div className='w-fit  rounded-sm bg-[#F7F8FB] p-2'
          >
               <button
            onClick={() => handleToggle(false)}
            className={`p-4 py-2 rounded-md ${
              !isAnnual ? 'bg-[#F7F8FB] ' : 'bg-white text-black'
            }`}
          >
            Monthly Plan
          </button>
          <button
            onClick={() => handleToggle(true)}
            className={`px-4 py-2 rounded-md  ${
              isAnnual ? 'bg-[#F7F8FB] ' : 'bg-white text-black'
            }`}
          >
            Annual Plan
          </button>
          </div>
       
        </div>

        <div className='w-full max-w-[1000px] flex flex-col md:flex-row gap-3 justify-center mx-auto mt-9'>
          {/* CARD 1 */}
          <div className='flex flex-col gap-y-5 w-full md:w-[40%] rounded-md shadow-sm px-6 pt-12 pb-4'>
            <div>
              <h1 className='text-[27px] font-[500]'>Free Plan</h1>
              <p className='text-[#343D48] text-[14px]'>For Small teams or office</p>
            </div>
            <ul className='flex flex-col gap-y-3 pt-4'>
              {cardsToRender.map((item) => (
                <li key={item.id} className='flex items-start gap-2 p-3'>
                  <img src={item.image} alt="icon" className='w-[20px] h-[20px] mt-1' />
                  <p className='text-[#343D48] text-[14px] w-[80%]'>{item.text}</p>
                </li>
              ))}
            </ul>
            <div className='justify-center items-center w-full flex'>
              <div className='bg-[#FFDC6B] w-fit mt-3 flex text-[#ec8e00] px-3 py-1 rounded-md'>
                Start free trial
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className='flex flex-col pb-4 gap-y-5 w-full md:w-[40%] border-[1px] rounded-md border-[#3FDBB1] px-6'>
            <div>
              <div className='bg-[#FFDC6B] w-fit mt-3 text-[#ec8e00] px-3 py-1 rounded-md'>Recommended</div>
              <h1 className='text-[27px] font-[500]'>Premium</h1>
              <p className='text-[#343D48] text-[14px]'>For startup enterprise</p>
            </div>
            <ul className='flex flex-col gap-y-3 pt-4'>
              {cardsToRender.map((item) => (
                <li key={item.id} className='flex items-start gap-2 p-3'>
                  <img src={item.image} alt="icon" className='w-[20px] h-[20px] mt-1' />
                  <p className='text-[#343D48] text-[14px] w-[80%]'>{item.text}</p>
                </li>
              ))}
            </ul>
            <div className='justify-center items-center w-full flex'>
              <div className='bg-[#FFDC6B] w-fit mt-3 flex text-[#ec8e00] px-3 py-1 rounded-md'>
                Subscribe Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricingpanel