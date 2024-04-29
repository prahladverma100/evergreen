import React from 'react'
import { Facebook, Insta, Tiwtter } from './Icon'
import foter from '../assets/image/webp/foter.webp'

const Last_section = () => {
    return (
        <div className=' bg_gradient lg:pt-[65px] pt-5'>
            <div className=' mx-auto px-3 max-w-[1136px]'>
                <div className=' flex justify-between lg:flex-row flex-col  items-center'>
                    <div className=' items-center'>
                        <img className=' mx-auto lg:mx-0 cursor-pointer' src={foter} alt="" />
                        <p className=' pt-3 lg:pt-0 lg:text-start text-center ff_poppins font-normal opacity-[70%] max-w-[410px] text-base leading-[25px] text-[#000]'>Lorem ipsum dolor sit amet consectetur. Suspendisse semper felis vulputate leo. Id duis morbi facilisis consequat mattis facilisi. </p>

                    </div>
                    <div>
                        <ul className=' gap-7 flex pt-3 flex-wrap justify-center  mx-auto lg:pt-0'>
                            <li className=' list-none'><a href="#home" className='ff_poppins font-normal opacity-[70%] max-w-[410px] text-base leading-[25px] text-[#000]'>Home</a></li>
                            <li className=' list-none'><a href="#Services" className='ff_poppins font-normal opacity-[70%] max-w-[410px] text-base leading-[25px] text-[#000]'>Our Services</a></li>
                            <li className=' list-none'><a href="#Photos" className='ff_poppins font-normal opacity-[70%] max-w-[410px] text-base leading-[25px] text-[#000]'>Photos</a></li>
                            <li className=' list-none'><a href="#Contact" className='ff_poppins font-normal opacity-[70%] max-w-[410px] text-base leading-[25px] text-[#000]'>Contact Us</a></li>
                        </ul>
                        <div className=' flex gap-4 pt-[21px] lg:justify-end justify-center'>
                            <a href="https://twitter.com/?lang=en" className=' cursor-pointer duration-500 ease-in-out hover:translate-y-[-5.2px]'><Tiwtter /></a>
                            <a href="https://www.facebook.com/" className=' cursor-pointer duration-500 ease-in-out hover:translate-y-[-5.2px]'><Facebook /></a>
                            <a href="https://www.instagram.com/accounts/login/" className=' cursor-pointer duration-500 ease-in-out hover:translate-y-[-5.2px]'><Insta /></a>
                        </div>
                    </div>
                </div>
                <div className=' w-full h-[1px] bg-black opacity-[20%] lg:mt-[54px] mt-5 '></div>
                <p className='lg:mt-[35.5px] mt-5 ff_poppins font-normal opacity-[70%] text-center lg:pb-[33px] pb-5 text-base leading-[25px] text-[#000]'>Copyright © 2023 Evergreen Landscapes LLC. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Last_section