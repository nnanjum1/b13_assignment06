import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='bg-[#101727]'>


            <div className='grid grid-cols-1 sm:grid-cols-2 text-center lg:text-left lg:grid-cols-12 gap-12 w-[90%] md:w-[75%] mx-auto pt-20 pb-16'>
                <div className='lg:col-span-4 space-y-4'>
                    <h2 className='text-3xl md:text-4xl font-extrabold text-white'>
                        DigiTools
                    </h2>
                    <p className='text-sm md:text-[16px] text-white'>
                        Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                    </p>
                </div>


                <div className='lg:col-span-2 space-y-3'>
                    <h2 className='text-[16px] font-medium text-white'>Product</h2>
                    <ul className='text-white space-y-1'>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                        <li>Integrations</li>
                    </ul>
                </div>

                <div className='lg:col-span-2 space-y-3'>
                    <h2 className='text-[16px]  font-medium text-white'>Company</h2>
                    <ul className='text-white space-y-1'>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                </div>
                <div className='lg:col-span-2 space-y-3'>
                    <h2 className='text-[16px]  font-medium text-white'>Resources</h2>
                    <ul className='text-white space-y-1'>
                        <li>Documentation</li>
                        <li>Help Center</li>
                        <li>Community</li>
                        <li>Contact</li>
                    </ul>
                </div>


                <div className='lg:col-span-2 space-y-3'>
                    <h2 className='text-[16px]  font-medium text-white'>Social</h2>

                    <div className='flex gap-3 text-black items-center justify-center lg:justify-start'>
                        <div className='p-2 bg-white rounded-full'><FaInstagram /></div>
                        <div className='p-2 bg-white rounded-full'><FaFacebook /></div>
                        <div className='p-2 bg-white rounded-full'><FaXTwitter /></div>
                    </div>
                </div>

            </div>

            <div className="border-t border-white w-[90%] md:w-[75%] mx-auto"></div>


            <div className='w-[90%] md:w-[75%] mx-auto py-6 flex flex-col md:flex-row gap-4 justify-between items-center'>

                <p className='text-sm text-white'>
                    © 2026 DigiTools. All rights reserved.
                </p>

                <div className='flex flex-wrap gap-4 text-sm text-white justify-center'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>

            </div>

        </div>
    )
}

export default Footer