import React from 'react'
import green1 from '../assets/image/webp/green1.webp'

const Everygreen = () => {
    return (
        <div className=' lg:pt-20 pt-0 lg:pb-11 pb-6'>
            <div className=' max-w-[1140px] px-3 mx-auto mt-11'>
                <div className=' lg:flex-row flex-col flex items-center justify-between'>
                    <div className='w-full  lg:w-5/12' data-aos="fade-right">
                        <img className=' mx-auto max-w-[485px] w-full pe-3' src={green1} alt="" />
                    </div>
                    <div className='w-full lg:w-6/12' data-aos="fade-left">
                        <h3 className='text-center lg:text-start font-normal lg:text-4xl md:text-3xl text-2xl text-[#222222] leading-9 lg:leading-[42.3px] ff_LibreCaslon'>Evergreen Landscapes is a full-service landscaping company servicing the <span className=' italic text-[#88C701]'>Chicago</span> land area.</h3>
                        <p className='font-normal  pt-[18px] lg:text-start text-center mx-auto max-w-none lg:max-w-[570px] text-[#808080]  text-base ff_poppins'>Our team is dedicated to giving our clients the very best of landscaping in a safe and professional manner. <br />
                            Founded in 2012, Evergreen Landscapes (formerly David's Lawn Care) has come a long way from its beginnings. When we first started out, our passion for providing quality and affordable services to our valuable clients drove us to take action and gave us the momentum to turn hard work and inspiration into a growing landscaping company. We now serve customers all over the Chicago land area and are thrilled to be a part of the landscaping industry. <br />
                            We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Everygreen