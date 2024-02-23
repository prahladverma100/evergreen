import React from 'react'
import park1 from '../assets/image/webp/park1.webp'
import house_park from '../assets/image/webp/house_park.webp'
import terctor from '../assets/image/webp/terctor.webp'

const Our_Services = () => {
    return (
        <div>
            <div className=' max-w-[1164px] px-3 mx-auto' id='Services'>
                <h3 className=' text-[#000000] ff_LibreCaslon font-normal lg:text-4xl md:text-3xl text-2xl leading-[42.3px] text-center  lg:pt-20 lg:pb-[37px] pb-3' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">Our Services</h3>
                <div className=' flex lg:flex-row px-[-12px] flex-wrap'>
                    <div className=' w-full md:w-1/2 lg:w-4/12 px-3 flex justify-center' data-aos="fade-right">
                        <div className=' relative box inline-block mt-3 cursor-pointer lg:mt-0'>
                            <img className=' max-w-[364px] h-full  w-full' src={park1} alt="" />
                            <div className='box_shadow absolute duration-500 ease-in-out  w-full pt-[100px] md:pt-[60px] lg:pt-[139px] px-3 rounded-[10px] pb-[11px] max-w-[364px] h-full top-0 bottom-0  opacity-0'>
                                <p className=' text-white font-normal ff_LibreCaslon text-center text-[22px] leading-7'>Winter services</p>
                                <p className=' text-base font-normal ff_poppins opacity-[70%] text-center text-[#BFBDB6]'>Snow Shoveling</p>
                                <p className=' text-center font-normal text-[#BDBBB2] ff_poppins text-base opacity-[70%]'> Snow Plowing</p>
                                <p className=' text-center font-normal text-[#BDBBB2] ff_poppins text-base opacity-[70%]'>    Cleaning of Walkways &</p>
                                <p className=' text-center font-normal text-[#BDBBB2] ff_poppins text-base opacity-[70%]'>Sidewalks Ice Melt Applications</p>
                            </div>
                            <p className='text_opcity max-w-[364px] absolute left-[16px] px-2 ff_LibreCaslon text-center lg:text-[22px] text-xl leading-6 text-white bottom-5'>Commercial Property Services </p>
                        </div>
                    </div>
                    <div className=' w-full md:w-1/2 lg:w-4/12 px-3 flex justify-center' data-aos="fade-up"
                        data-aos-duration="1000">
                        <div className=' relative box inline-block cursor-pointer mt-3 lg:mt-0'>
                            <img className=' max-w-[364px]  w-full' src={house_park} alt="" />
                            <div className='box_shadow duration-500 ease-in-out absolute w-full pt-[100px] md:pt-[60px] lg:pt-[139px] rounded-[10px] pb-[11px] px-3 max-w-[364px] h-full top-0 bottom-0  opacity-0'>
                                <p className=' text-white font-normal ff_LibreCaslon text-center text-[22px] leading-7'>Winter services</p>
                                <p className=' text-base font-normal ff_poppins opacity-[70%] text-center text-[#BFBDB6]'>Snow Shoveling</p>
                                <p className=' text-center font-normal text-[#BDBBB2] ff_poppins text-base opacity-[70%]'> Snow Plowing</p>
                                <p className=' text-center font-normal text-[#BDBBB2] ff_poppins text-base opacity-[70%]'>    Cleaning of Walkways &</p>
                                <p className=' text-center font-normal text-[#BDBBB2] ff_poppins text-base opacity-[70%]'>Sidewalks Ice Melt Applications</p>
                            </div>

                            <p className='text_opcity max-w-[364px] absolute left-[16px] px-2 ff_LibreCaslon text-center lg:text-[22px] text-xl leading-6 text-white bottom-5'>Commercial Property Services </p>
                        </div>
                    </div>
                    <div className=' w-full  lg:w-4/12 px-3 flex justify-center' data-aos="fade-left">
                        <div className=' relative box inline-block cursor-pointer mt-3 lg:mt-0'>
                            <img className=' max-w-[364px]  w-full' src={terctor} alt="" />
                            <div className='box_shadow absolute duration-500 ease-in-out  w-full pt-[100px] md:pt-[60px] lg:pt-[139px] rounded-[10px] pb-[11px] px-3 max-w-[364px] h-full top-0 bottom-0  opacity-0'>
                                <p className=' text-white font-normal ff_LibreCaslon text-center text-[22px] leading-7'>Winter services</p>
                                <p className=' text-base font-normal ff_poppins opacity-[70%] text-center text-[#BFBDB6]'>Snow Shoveling</p>
                                <p className=' text-center font-normal text-[#BDBBB2] ff_poppins text-base opacity-[70%]'> Snow Plowing</p>
                                <p className=' text-center font-normal text-[#BDBBB2] ff_poppins text-base opacity-[70%]'>    Cleaning of Walkways &</p>
                                <p className=' text-center font-normal text-[#BDBBB2] ff_poppins text-base opacity-[70%]'>Sidewalks Ice Melt Applications</p>
                            </div>
                            <p className='text_opcity max-w-[364px] absolute left-[16px] px-2 ff_LibreCaslon text-center lg:text-[22px] text-xl leading-6 text-white bottom-5'>Commercial Property Services </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Our_Services