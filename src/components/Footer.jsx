import React from 'react'

const Footer = () => {
    const aboutus=[
        {
            quicklinks:[
                'Support Center',
                'Customer Support',
                "About Us",
                'Copyright'
                ,
                'Popular Campaign'

            ],
            title:'About Us'

        }
    ]
    const ourinfo=[
        {
            quicklinks:[
                'Return Policy' ,
'Privacy Policy',
'Terms & Conditions',
'Site Map',
'Store Hours',
                
            ],
            title:'Our Information'

        }
    ]
    const myacc=[
        {
            quicklinks:[
                'Press inquiries',
'Social media ',
'directories',
'Images & B-roll',
'Permissions'

            ],
            title:'My Account'

        }
    ]
    const policy=[
        {
            quicklinks:[
                'Application security'
                ,
'Software principles',
'Unwanted software policy',
'Responsible supply chain'

            ],
            title:'Policy'

        }
    ]
    
  return (
    <div className='min-h-[70vh] flex justify-between items-center px-[8%]  '  >
     
<div className='flex  flex-col justify-between gap-y-5'>
{ aboutus.map((items)=>(
<><h1 className='text-[20xp] font-semibold'>{items.title}</h1>
<ul className='flex flex-col gap-y-5'>
    {  items.quicklinks.map((laink,i)=>(
<p className=' text-[#02073E] text-[15px]' key={i}>
    { laink
    }
    </p> ))
    }
</ul>
</>
    ))
}


</div>
<div className='flex  flex-col justify-between gap-y-5'>
{ ourinfo.map((items)=>(
<><h1 className='text-[20xp] font-semibold'>{items.title}</h1>
<ul className='flex flex-col gap-y-5'>
    {  items.quicklinks.map((laink,i)=>(
<p className=' text-[#02073E] text-[15px]' key={i}>
    { laink
    }
    </p> ))
    }
</ul>
</>
    ))
}


</div>
<div className='flex  flex-col justify-between gap-y-5'>
{ myacc.map((items)=>(
<><h1 className='text-[20xp] font-semibold'>{items.title}</h1>
<ul className='flex flex-col gap-y-5'>
    {  items.quicklinks.map((laink,i)=>(
<p className=' text-[#02073E] text-[15px]' key={i}>
    { laink
    }
    </p> ))
    }
</ul>
</>
    ))
}


</div>
<div className='flex  flex-col justify-between gap-y-5'>
{ policy.map((items)=>(
<><h1 className='text-[20xp] font-semibold'>{items.title}</h1>
<ul className='flex flex-col gap-y-5'>
    {  items.quicklinks.map((laink,i)=>(
<p className=' text-[#02073E] text-[15px]' key={i}>
    { laink
    }
    </p> ))
    }
</ul>
</>
    ))
}


</div>

    </div>
  )
}

export default Footer