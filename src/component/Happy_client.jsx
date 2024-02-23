import React from 'react'
import { Icon1, Star } from './Icon'

const Happy_client = () => {
    return (
        <div className='lg:pt-20 pt-4 pb-5 lg:pb-20'>
            <div className=' max-w-[1400px] mx-auto px-3'>
                <h2 className=' ff_LibreCaslon font-normal lg:pb-10 pb-0 text-[#000000] lg:text-4xl md:text-3xl text-2xl text-center leading-[42.3px]' >Check out our <span className=' italic text-[#88C701] font-medium text-center'>happy clients</span></h2>
                <div className=' flex-wrap flex  px-[-8.5px]'>
                    <div className='w-full md:w-6/12 lg:w-4/12 lg:mt-0 mt-4 flex justify-center mx-auto px-[9.5px]'>
                        <div className=' px-[19px] py-5 border-[1px] mx-auto max-w-[450px] rounded-[16px] w-full border-[#E5E5E5]'>
                            <Icon1 />
                            <p className=' max-w-[412px] text-[#61676F] opacity-[70%] py-[15px] ff_poppins text-base italic leading-6'>Evergreen provided high quality service in a timely manner for me. David was a pleasure to deal with, his honesty and customer service is unparalleled. If you want the job done right, use Evergreen!</p>
                            <p className=' ff_LibreCaslon font-normal text-base leading-[25.6px]'>E. B.</p>
                            <Star />
                        </div>
                    </div>
                    <div className='w-full md:w-6/12 lg:w-4/12 lg:mt-0 mt-4 flex justify-center mx-auto px-[9.5px]'>
                        <div className=' px-[19px] py-5 border-[1px] mx-auto max-w-[450px] rounded-[16px]  w-full border-[#E5E5E5]'>
                            <Icon1 />
                            <p className=' max-w-[412px] text-[#61676F] opacity-[70%] py-[15px] ff_poppins text-base italic leading-6'>It is quite clear that Dave truly cares about his clients and about the work he does for them. If you hire his service, your lawn care goals and ambitions will become is own, and he will ensure you are not just satisfied but thrilled.</p>
                            <p className=' ff_LibreCaslon font-normal text-base leading-[25.6px]'>S. K.</p>
                            <Star />
                        </div>
                    </div>
                    <div className='w-full lg:w-4/12 lg:mt-0 mt-4 flex justify-center mx-auto px-[8.5px]'>
                        <div className=' px-[19px] py-5 max-w-[450px] mx-auto rounded-[16px] w-full border-[1px] border-[#E5E5E5]'>
                            <Icon1 />
                            <p className=' max-w-[412px] text-[#61676F] opacity-[70%] ff_poppins py-[15px] text-base italic leading-6'>Evergreen Landscapes does amazing work and they are very well priced. I definitely will use them for all my landscaping needs.</p>
                            <p className=' ff_LibreCaslon font-normal text-base leading-[25.6px]'>Y. C.</p>
                            <Star />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Happy_client