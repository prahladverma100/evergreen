import React from 'react'
import { Meaasge, Phone } from './Icon'
import group_layer from '../assets/image/webp/group_layer.webp'
import groupl from '../assets/image/webp/groupl.webp'

const Contact_us = () => {
    return (
        <div className=' bg-img lg:mt-24 mt-0 lg:mb-20 mb-0 lg:pb-20 pb-4 lg:pt-16 pt-5 z-[2] relative' id='Contact'>
            <img className=' absolute top-0 right-0 z-[-1]' src={group_layer} alt="" />
            <img className=' absolute bottom-0 left-0 z-[-1]' src={groupl} alt="" />
            <div className=' max-w-[948px] mx-auto px-3 lg:relative'>
                <div className=' flex lg:flex-row flex-col '>
                    <div className='w-full lg:w-1/2'>
                        <h4 className=' ff_LibreCaslon font-normal lg:text-4xl md:text-3xl text-2xl leading-[49px] text-center lg:text-start'>Contact Us</h4>
                        <div className=' flex items-center pt-5 lg:justify-start justify-center gap-4'>
                            <a href="tel:+4733378901" className=' cursor-pointer'> <Phone /></a>
                            <p className=' ff_poppins font-normal text-base leading-[25.6px] text-[#000] opacity-[70%]'>(312) 610-9790</p>
                        </div>
                        <div className=' flex items-center lg:justify-start justify-center flex-wrap pt-1 lg:pt-[11px] gap-4 pb-1 lg:pb-7'>
                            <a href="info@evergreenlandscapesco.com" className=' cursor-pointer'>    <Meaasge /></a>
                            <p className=' ff_poppins font-normal text-base leading-[25.6px] text-[#000] opacity-[70%]'>info@evergreenlandscapesco.com</p>
                        </div>
                        <p className=' ff_LibreCaslon lg:text-start text-center font-normal text-base leading-[25.6px] text-[#000]'>Hours</p>
                        <p className=' ff_poppins lg:text-start text-center max-w-full lg:max-w-[161px] font-normal text-base leading-[25.6px] text-[#000] opacity-[70%]'>MON-FRI: 9AM - 5PM
                            SAT-SUN: CLOSED</p>
                        <p className=' ff_poppins lg:text-start text-center font-normal text-base leading-[25.6px] text-[#000] max-w-full lg:max-w-[309px] lg:pt-5 pt-1 opacity-[70%]'>Contact us today for a free no obligation consultation</p>
                    </div>
                    <div className='w-full lg:w-1/2'>
                    </div>

                </div>
                <div className=' border-[6px] px-3 lg:px-0 mt-3 lg:absolute mx-auto top-[-40%] right-0 border-[#EEF7EA] max-w-[489px] w-full lg:w-[489px] lg:pt-8 pt-3 lg:pb-9 pb-3 rounded-[16px] bg-white '>
                    <h3 className=' ff_LibreCaslon mx-auto text-center lg:text-start leading-[38px] max-w-[422px] w-full font-normal text-2xl pb-7'>Contact us! someone from <span className=' italic text-[#88C701]'>Evergreen</span> will reach out to you soon</h3>
                    <div className=' mx-auto'>

                        <input type="text" className='flex  focus:border-[#88c701] focus:outline-[2.5px] focus:outline-[#E6E6E6] focus:outline-offset-[0px] justify-center  max-w-[424px] border-[1px] mx-auto rounded-[10px] border-[#EBF7E5] outline-none w-full h-[48px] pl-3' placeholder='Jhone Doe' />
                        <input type="number" name='number' className='flex focus:border-[#88c701] focus:outline-[2.5px] ocus:outline-[#E6E6E6] focus:outline-offset-[0px] justify-center border-[1px] mx-auto rounded-[10px] mt-[9px] max-w-[424px] w-full border-[#EBF7E5]  outline-none h-[48px] pl-3' placeholder='Phone' />
                        <input type="text" className=' flex focus:border-[#88c701] focus:outline-[2.5px] focus:outline-[#E6E6E6] focus:outline-offset-[0px] justify-center  border-[1px] mx-auto  mt-[9px] border-[#EBF7E5] max-w-[424px] rounded-[10px] outline-none w-full h-[48px] pl-3' placeholder=' Email' />
                        <input type="text" className='flex focus:border-[#88c701] focus:outline-[2.5px] focus:outline-[#E6E6E6] focus:outline-offset-[0px] justify-center border-[1px] mx-auto mt-[9px] border-[#EBF7E5] max-w-[424px] rounded-[10px] outline-none w-full h-[48px] pl-3' placeholder='Address' />
                        <textarea type="text" className='flex focus:border-[#88c701] focus:outline-[2.5px] focus:outline-[#E6E6E6] focus:outline-offset-[0px] justify-center border-[1px] mx-auto rounded-[10px] mt-[9px] border-[#EBF7E5] max-w-[424px] pt-4 resize-none outline-none w-full h-[148px] pl-3' placeholder='Message'></textarea>
                    </div>
                    <div className=' w-full mx-auto'>
                        <button className=' bg-[#88C701] border-[1px] border-[#88C701] hover:bg-[white] hover:text-[#88C701] duration-300 ease-in-out w-full justify-center flex py-[15px] lg:mt-8 mt-3 max-w-[424px] mx-auto rounded-[25px] text-white ff_poppins font-medium text-base leading-5 '>Send Message</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact_us