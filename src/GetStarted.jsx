import React from 'react'

const GetStarted = () => {

    const steps = [
        {
            id: "01",
            title: "Create Account",
            desc: "Sign up for free in seconds. No credit card required to get started.",
            icon: "/assets/package.png"
        },
        {
            id: "02",
            title: "Choose Tool",
            desc: "Browse and select the digital tools that fit your needs.",
            icon: "/assets/package.png"
        },
        {
            id: "03",
            title: "Start Using",
            desc: "Instant access to premium tools and features after setup.",
            icon: "/assets/package.png"
        },
    ];

    return (
        <div className="flex flex-col items-center text-center bg-[#F9FAFC] py-30 justify-center mx-auto ">
            <h1 className="text-[48px] font-extrabold">Get Started in 3 Steps</h1>
            <p className="text-[16px] text-gray-400">Start using premium digital tools in minutes, not hours.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 w-[90%] md:w-[75%]'>
                <div >
                    <div className='rounded-full mt-4 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 '><p className='text-center text-white'>01</p></div>

                    <div>
                        <div className='p-3 rounded-full bg-purple-200'><img className='w-10 h-10' src="/assets/package.png" alt="" /></div>
                        <h3 className='text-[24px] font-bold'>Create Account</h3>
                        <p className="text-[16px] text-gray-400">Sign up for free in seconds. No credit card required to get started.</p>
                    </div>

                </div>
                <div >
                    <div className='rounded-full mt-4 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 '><p className='text-center text-white'>01</p></div>

                    <div>
                        <div className='p-3 rounded-full bg-purple-200'><img className='w-10 h-10' src="/assets/package.png" alt="" /></div>
                        <h3 className='text-[24px] font-bold'>Create Account</h3>
                        <p className="text-[16px] text-gray-400">Sign up for free in seconds. No credit card required to get started.</p>
                    </div>

                </div>
                <div >
                    <div className='rounded-full mt-4 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 '><p className='text-center text-white'>01</p></div>

                    <div>
                        <div className='p-3 rounded-full bg-purple-200'><img className='w-10 h-10' src="/assets/package.png" alt="" /></div>
                        <h3 className='text-[24px] font-bold'>Create Account</h3>
                        <p className="text-[16px] text-gray-400">Sign up for free in seconds. No credit card required to get started.</p>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default GetStarted