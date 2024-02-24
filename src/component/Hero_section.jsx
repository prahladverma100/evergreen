import React, { useState } from 'react'
import evergreen_logo from '../assets/image/webp/evergreen_logo.webp'
import hero_img1 from '../assets/image/webp/hero_img1.webp'
import Slider from "react-slick";
import arrow_right from '../assets/image/webp/arrow_right.webp'
import park from '../assets/image/webp/park.webp'
import hero_green from '../assets/image/webp/hero_green.webp'
import arrow_left from '../assets/image/webp/arrow_lefrt.webp'
import Hamburger from 'hamburger-react'

const Hero_section = () => {
    const [Show, setShow] = useState(false)
    const [isOpen, setOpen] = useState(false)
    if (Show === true) {
        document.body.classList.add("max-lg:overflow-hidden")
    }
    else {
        document.body.classList.remove("max-lg:overflow-hidden")
    }
    const moment = () => {
        setShow(!Show);
        setOpen(!isOpen);
    };

    const slider = React.useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear'
    };
    return (
        <div className=''>
            <div className=' relative'>
                <div className=' z-40 absolute hidden lg:block top-[50%] cursor-pointer right-[3%]'>
                    <img onClick={() => slider?.current?.slickNext()} src={arrow_right} alt="" />
                </div>
                <div className=' z-40 hidden lg:block absolute top-[50%] cursor-pointer left-[3%]'>
                    <img onClick={() => slider?.current?.slickPrev()} src={arrow_left} alt="" />
                </div>
                <nav className=' flex justify-center'>
                    <div className='flex items-center absolute z-10 top-0 w-full bg-white justify-between'>
                        <img className='w-full z-30 cursor-pointer max-w-[250px] sm:max-w-[333px] ' src={evergreen_logo} alt="" />
                        <ul className={`flex xl:gap-7 gap-5 lg:justify-end bg-white justify-center ${Show ? 'left-0' : 'left-[-100%]'} h-full w-full  flex-col lg:flex-row top-0 text-center z-20   items-center duration-500 fixed lg:static`}>
                            <li><a href="#Home" onClick={moment} className=' ff_poppins font-normal text-[#4D4D4D] text-base leading-5 relative after:absolute after:w-0 after:h-[2px] after:bg-[#4D4D4D] after:transition-all after:duration-300 after:ease-linear hover:after:w-full after:bottom-0 after:start-0'>Home</a></li>
                            <li><a href="#About" onClick={moment} className=' ff_poppins font-normal text-[#4D4D4D] text-base leading-5 relative after:absolute after:w-0 after:h-[2px] after:bg-[#4D4D4D] after:transition-all after:duration-300 after:ease-linear hover:after:w-full after:bottom-0 after:start-0'>About us</a></li>
                            <li><a href="#Services" onClick={moment} className=' ff_poppins font-normal text-[#4D4D4D] text-base leading-5 relative after:absolute after:w-0 after:h-[2px] after:bg-[#4D4D4D] after:transition-all after:duration-300 after:ease-linear hover:after:w-full after:bottom-0 after:start-0'>Our Services</a></li>
                            <li><a href="#Gallery" onClick={moment} className=' ff_poppins font-normal text-[#4D4D4D] text-base leading-5 relative after:absolute after:w-0 after:h-[2px] after:bg-[#4D4D4D] after:transition-all after:duration-300 after:ease-linear hover:after:w-full after:bottom-0 after:start-0'>Gallery</a></li>
                            <li><a href="#Contact" onClick={moment} className=' ff_poppins font-normal text-[#4D4D4D] text-base leading-5 relative after:absolute after:w-0 after:h-[2px] after:bg-[#4D4D4D] after:transition-all after:duration-300 after:ease-linear hover:after:w-full after:bottom-0 after:start-0'>Contact Us</a></li>
                            <li><button className='ml-0 lg:ml-3 lg:py-[38px] py-5 px-5 lg:px-[34px] text-white ff_poppins font-medium text-base leading-5 duration-300 ease-in-out hover:bg-[#86a83b] bg-[#88C701]'>Request a quote</button></li>
                        </ul>
                        <div className='z-30 lg:hidden' onClick={() => setShow(!Show)}>
                            <button className='{ show ?}'><Hamburger toggled={isOpen} toggle={setOpen} /></button>
                        </div>
                    </div>
                </nav>
                <Slider ref={slider} {...settings}>
                    <div className='relative '>
                        <img className='md:h-screen h-[80vh] object-cover w-full' src={hero_img1} alt="" />
                        <div className=' absolute bottom-[49px] z-20 left-[10%]' data-aos="fade-right">
                            <h1 className='ff_LibreCaslon max-w-[471px] md:text-[40px] text-3xl pb-2 md:leading-[47px] leading-9 font-bold text-white'>Ut pretium egestas sagittis <span className='ff_LibreCaslon italic'>convallis</span></h1>
                            <p className='ff_poppins font-normal text-white max-w-[548px] pb-[30px] text-base leading-5'>Platea neque amet a dolor. Libero malesuada pellentesque ultrices urna pellentesque. Varius in est porttitor pellentesque.</p>
                            <button className='ff_poppins font-normal text-white hover:bg-[white] hover:text-[#88C701] duration-300 ease-in-out bg-[#88C701] py-[15px] px-[27px] rounded-[25px] text-base leading-5'>Request a quote</button>
                        </div>
                    </div>
                    <div className='relative' id='Home'>
                        <img className='md:h-screen h-[80vh] object-cover w-full' src={park} alt="" />
                        <div className=' absolute bottom-[49px] z-20 left-[10%]'>
                            <h1 className='ff_LibreCaslon max-w-[471px] md:text-[40px] text-3xl pb-2 md:leading-[47px] leading-9 font-bold text-white'>Donec <span className='ff_LibreCaslon italic'>orci mauris</span>in enim viverra</h1>
                            <p className='ff_poppins font-normal text-white max-w-[548px] pb-[30px] text-base leading-5'>Platea neque amet a dolor. Libero malesuada pellentesque ultrices urna pellentesque. Varius in est porttitor pellentesque.</p>
                            <button className='ff_poppins font-normal text-white bg-[#88C701] py-[15px] px-[27px]  hover:bg-[white] hover:text-[#88C701] duration-300 ease-in-out rounded-[25px] text-base leading-5'>Request a quote</button>
                        </div>
                    </div>
                    <div className='relative'>
                        <img className='md:h-screen h-[80vh] object-cover w-full' src={hero_green} alt="" />
                        <div className=' absolute bottom-[49px] z-20 left-[10%]'>
                            <h1 className='ff_LibreCaslon max-w-[471px] md:text-[40px] text-3xl pb-2 md:leading-[47px] leading-9 font-bold text-white'>Sit amet in <span className='ff_LibreCaslon italic'>vulputate</span> ultrices </h1>
                            <p className='ff_poppins font-normal text-white max-w-[548px] pb-[30px] text-base leading-5'>Platea neque amet a dolor. Libero malesuada pellentesque ultrices urna pellentesque. Varius in est porttitor pellentesque.</p>
                            <button className='ff_poppins font-normal  hover:bg-[white] hover:text-[#88C701] duration-300 ease-in-out text-white  bg-[#88C701] py-[15px] px-[27px] rounded-[25px] text-base leading-5'>Request a quote</button>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    )
}

export default Hero_section