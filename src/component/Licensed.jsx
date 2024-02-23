import React from 'react'
import { Creative, Customer, Peace } from './Icon'
import layer from '../assets/image/webp/layer.webp'
import layer2 from '../assets/image/webp/layer2.webp'

const Licensed = () => {
    return (
        <div>
            <h5 className=' px-3 text-center ff_LibreCaslon font-medium lg:text-4xl md:text-3xl text-2xl leading-[42.3px] lg:py-[94px] py-5 italic' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="900">Licensed <span className=' text-[#88C701]'>-</span> Bonded <span className=' text-[#88C701]'>-</span>Insured</h5>
            <div className=' bg-img bg-cover bg-center bg-no-repeat relative z-[2]' id='About'>
                <img className=' absolute top-0 right-0 z-[-1]' src={layer2} alt="" />
                <img className=' absolute bottom-0 left-0 z-[-1]' src={layer} alt="" />
                <div className=' max-w-[859px] px-3 mx-auto'>
                    <h5 className='text-[#222222] px-3 text-center font-normal max-w-[500px] lg:pt-[76px] pt-5 lg:pb-11 pb-2 mx-auto lg:text-4xl md:text-3xl text-2xl ff_LibreCaslon leading-[42.3px]' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000">Why <span className=' text-[#88C701] italic font-medium'>customers choose</span> Evergreen Landscapes LLC</h5>
                    <div className=' flex lg:flex-row flex-wrap justify-between lg:pb-[76px] pb-7'>
                        <div className='w-full sm:w-1/2 lg:w-4/12  flex justify-center'>
                            <div className=' bg-[#F0F8EC] box lg:mt-0 mt-3 hover:bg-[white] pb-[49px] duration-700 ease-in-out border-[1px]  w-[267px] rounded-[10px] pt-[41px] pl-6 border-[#DEEDD6]' data-aos="fade-right">
                                <span className=' hover:fill-black'>   <Creative /></span>
                                <p className=' font-medium text-xl leading-[23px] ff_LibreCaslon pt-7 pb-3'>Creative Solutions</p>
                                <p className='text-[#787C76] ff_poppins text-base font-normal'>Landscape Design & Build</p>
                            </div>
                        </div>
                        <div className='w-full sm:w-1/2 lg:w-4/12 flex justify-center'>
                            <div className=' bg-[#F0F8EC] box lg:mt-0 mt-3 hover:bg-[white]  pb-[26px] duration-500 ease-in-out border-[1px] w-[267px] rounded-[10px] pt-[41px] pl-6 border-[#DEEDD6]' data-aos="fade-up"
                                data-aos-duration="1000">
                                <span className=' hover:fill-black'>   <Customer /></span>
                                <p className=' font-medium text-xl leading-[23px] ff_LibreCaslon pt-7 pb-3'>Customer Service</p>
                                <p className='text-[#787C76] ff_poppins text-base font-normal'>Our team is on call to deliver excellence to our clients</p>
                            </div>
                        </div>
                        <div className='w-full lg:w-4/12 flex justify-center'>
                            <div className=' bg-[#F0F8EC] box lg:mt-0 mt-3 hover:bg-[white] pb-[49px] duration-500 ease-in-out border-[1px] w-[267px] rounded-[10px] pt-[41px] pl-6 border-[#DEEDD6]' data-aos="fade-left">
                                <span className=' hover:fill-black'>   <Peace /></span>
                                <p className=' font-medium text-xl leading-[23px] ff_LibreCaslon pt-7 pb-3'>Peace of mind</p>
                                <p className='text-[#787C76] ff_poppins text-base font-normal'>Proven Proactive Approach</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Licensed