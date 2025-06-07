import React  , { useState }from 'react'

const Accordion2 = () => {
    const accordionData = [
        {
          id: 1,
          question: 'How to contact with riders emergency ?',
          points: [
            'An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.',
          ],
        },
        {
          id: 2,
          question: 'App installation failed, how to update system information?',
          points: [
            'An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.',
          ],
  
        },
        {
          id: 3,
          question: 'Website reponse taking time, how to improve?',
          points: [
            'An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.',
          ],
        
        },
        {
            id:4 ,
            question: 'New update fixed all bug and issues',
            points: [
              'An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.',
            ],
          
          },
      ];
      const [activeIndex, setActiveIndex] = useState(null);

      const toggleAccordion = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
      };
  return (
    <div className="w-full mx-auto px-[8%] max-w-[1200px]  pt-20 md:pt-0">
     <div>

<p className='text-[#EF9E48] font-sans flex justify-center'>Frequent Question</p>
<h1 className='text-[27px] font-[500] flex justify-center pb-16 '>Do you have any question</h1>
</div>

{accordionData.map((item, index) => (
        <div key={item.id} className="border px-5  mb-3 border-gray-300">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-start  gap-6 items-center py-4 text-left"
          >
               <span className=" text-xl flex justify-center items-center bg-[#3FDBB1] w-[20px] text-[#DADADA] pb-1 h-[20px] rounded-3xl ">
              {activeIndex === index ? '-' : '+'}
            </span>
            <span className="text-[18px] font-medium text-[#0F2137]">{item.question}</span>
      
         
          </button>
          {activeIndex === index && (
            <ul className="grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-gray-600 pl-6 pb-4 list-disc">
              {item.points.map((point, i) => (
                <div className='flex gap-3 justify-center items-center'>
                     
                     <p key={i} className='list-none leading-[2.3rem]'>{point}</p>
                </div>
           
              ))}
            </ul>
          )}
        </div>
      ))}

</div>
  )
}

export default Accordion2