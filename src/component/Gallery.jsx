import React from 'react'
import slider_img1 from '../assets/image/webp/slider_1mg1.webp'
import slider_img2 from '../assets/image/webp/slider_img2.webp'
import car_parking from '../assets/image/webp/car_parking.webp'
import road from '../assets/image/webp/road.webp'
import car from '../assets/image/webp/car.webp'
import house from '../assets/image/webp/house.webp'
import trunck from '../assets/image/webp/trunck.webp'
import grrden from '../assets/image/webp/grrden.webp'
import gerden1 from '../assets/image/webp/gerden1.webp'
import Slider from 'react-slick';


const Gallery = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
        ,
        autoplaySpeed: 0,
        arrows: false,
        cssEase: 'linear',
        variableWidth: true

        // responsive: [
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             slidesToShow: 4,
        //             // slidesToScroll: 3,

        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 2,
        //             initialSlide: 2
        //         }
        //     },
        //     {
        //         breakpoint: 576,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    };
    var setting = {
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 0,
        arrows: false,
        rtl: true,
        cssEase: 'linear',
        variableWidth: true,
        // responsive: [
        //     {
        //         breakpoint: 992,
        //         settings: {
        //             slidesToShow: 4,
        //             // slidesToScroll: 3,

        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 2,
        //             initialSlide: 2
        //         }
        //     },
        //     {
        //         breakpoint: 576,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    };
    return (
        <div className=' lg:pt-8 pt-0 lg:pb-8 pb-3' id='Gallery'>
            <h3 className=' text-[#000000] ff_LibreCaslon font-normal lg:text-4xl md:text-3xl text-2xl leading-[42.3px] text-center lg:pt-20 pt-8 pb-3 lg:pb-[41px]' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">Gallery</h3>
            <Slider {...settings}>
                <div className='pe-[16px]' id='Photos'>
                    <img className=' max-w-[486px] h-[200px] sm:h-[297px]' src={slider_img2} alt="" />
                </div>
                <div className='pe-[16px]'>
                    <img className=' max-w-[461px] h-[200px] sm:h-[297px]' src={car_parking} alt="" />
                </div>
                <div className='pe-[16px]'>
                    <img className=' max-w-[267px] h-[200px] sm:h-[297px]' src={house} alt="" />
                </div>
                <div className='pe-[16px]'>
                    <img className=' max-w-[486px] h-[200px] sm:h-[297px]' src={trunck} alt="" />
                </div>
                <div className='pe-[16px]'>
                    <img className=' max-w-[486px] h-[200px] sm:h-[297px]' src={slider_img2} alt="" />
                </div>

                <div className='pe-[16px]'>
                    <img className=' max-w-[461px] h-[200px] sm:h-[297px]' src={car_parking} alt="" />
                </div>
                <div className='pe-[16px]'>
                    <img className=' max-w-[267px] h-[200px] sm:h-[297px]' src={house} alt="" />
                </div>
                <div className='pe-[16px]'>
                    <img className=' max-w-[486px] h-[200px] sm:h-[297px]' src={trunck} alt="" />
                </div>
                <div className='pe-[16px]'>
                    <img className=' max-w-[486px] h-[200px] sm:h-[297px]' src={slider_img2} alt="" />
                </div>
            </Slider>

            <Slider className=' pt-2' {...setting}>
                <div className='pe-[16px]'>
                    <img className='h-[200px] sm:h-[297px]' src={grrden} alt="" />
                </div>
                <div className='pe-[16px]'>
                    <img className='h-[200px] sm:h-[297px]' src={slider_img1} alt="" />
                </div>
                <div className='pe-[16px]'>
                    <img className='h-[200px] sm:h-[297px]' src={road} alt="" />
                </div>
                <div className='pe-[16px]'>
                    <img className='h-[200px] sm:h-[297px]' src={car} alt="" />
                </div>
                <div className='pe-[16px]'>
                    <img className='h-[200px] sm:h-[297px]' src={gerden1} alt="" />
                </div>
                <div className='pe-[16px]'>
                    <img className='h-[200px] sm:h-[297px]' src={slider_img1} alt="" />
                </div>
                <div className='pe-[16px]'>
                    <img className='h-[200px] sm:h-[297px]' src={grrden} alt="" />
                </div>
                <div className='pe-[16px]'>
                    <img className='h-[200px] sm:h-[297px]' src={road} alt="" />
                </div>
                <div className='pe-[16px]'>
                    <img className='h-[200px] sm:h-[297px]' src={car} alt="" />
                </div>
                <div className='pe-[16px]'>
                    <img className='h-[200px] sm:h-[297px]' src={gerden1} alt="" />
                </div>
                <div className='pe-[16px]'>
                    <img className='h-[200px] sm:h-[297px]' src={slider_img1} alt="" />
                </div>
                <div className='pe-[16px]'>
                    <img className='h-[200px] sm:h-[297px]' src={road} alt="" />
                </div>
                <div className='pe-[16px]'>
                    <img className='h-[200px] sm:h-[297px]' src={car} alt="" />
                </div> <div className='pe-[16px]'>
                    <img className='h-[200px] sm:h-[297px]' src={slider_img1} alt="" />
                </div>
                <div className='pe-[16px]'>
                    <img className='h-[200px] sm:h-[297px]' src={road} alt="" />
                </div>
                <div className='pe-[16px]'>
                    <img className='h-[200px] sm:h-[297px]' src={car} alt="" />
                </div>
            </Slider>
        </div>
    )

}

export default Gallery