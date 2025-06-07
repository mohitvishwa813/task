import React from 'react';

const howitwsork = [
  {
    id: "01",
    image: 'https://i.postimg.cc/8P1M1254/arrow.png',
    title: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
    para: 'Set disbursement Instructions',
  },
  {
    id: "02",
    image: 'https://i.postimg.cc/sfP5CjV1/arrow-1.png',
    title: 'Get your blood tests delivered at home collect a sample from theyour blood tests.',
    para: 'Assembly retrieves funds from your account',
  },
  {
    id: "03",
    image: 'https://i.postimg.cc/8P1M1254/arrow.png',
    title: 'Get your blood tests delivered at home collect a sample from the your blood tests.',
    para: 'Assembly initiates disbursement',
  },
  {
    id: "04",
    image: 'https://i.postimg.cc/sfP5CjV1/arrow-1.png',
    title: 'How to work with prototype design with adobe xd featuring tools',
    para: 'Customer receives funds payments',
  },
];

const HowItWork = () => {
  return (
    <>
      <div className='bg-[#EBF9FF] flex justify-center items-center flex-col w-full min-h-[70vh]'>
        <div className='px-[8%] w-full flex justify-center items-center flex-col'>
          <p className='text-[#EF9E48] font-sans flex justify-center'>Whats the function</p>
          <h1 className='text-[27px] font-[500] flex justify-center'>Let’s see how it works</h1>

          <div className='flex flex-wrap justify-center gap-6 mt-6'>
            {howitwsork.map((item) => (
              <div
                key={item.id}
                className='flex flex-col gap-4 bg-[#EBF9FF]  w-[250px]  py-4 rounded-md '
              >
                <div className='flex justify-between items-center'>
                  <p className='w-[60px] h-[60px] rounded-[1rem] bg-white flex items-center justify-center text-[24px] font-bold text-[#0F2137]'>
                    {item.id}
                  </p>
                  <img src={item.image} alt="how it works" className='  w-[75%]  object-contain' />
                </div>
                <h1 className='pt-4 text-[18px] font-[500] text-[#0F2137] px-5'>
                {item.para}
              
                </h1>
                <p className= 'px-5 py-3 text-[#343D48] leading-[1.8rem] text-[14px]'>
                {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWork;
