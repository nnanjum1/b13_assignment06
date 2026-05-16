import React from 'react'

const GetStarted = () => {

    const steps = [
        {
            id: "01",
            title: "Create Account",
            desc: "Sign up for free in seconds. No credit card required to get started.",
            icon: "/assets/user.png"
        },
        {
            id: "02",
            title: "Choose Products",
            desc: "Browse our catalog and select the tools that fit your needs.",
            icon: "/assets/package.png"
        },
        {
            id: "03",
            title: "Start Creating",
            desc: "Download and start using your premium tools immediately.",
            icon: "/assets/rocket.png"
        },
    ];

    return (
        <div className="flex flex-col items-center text-center bg-[#F9FAFC] py-30 justify-center mx-auto ">
            <h1 className="text-[48px] font-extrabold">Get Started in 3 Steps</h1>
            <p className="text-[16px] text-gray-400">Start using premium digital tools in minutes, not hours.</p>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-10 w-[90%] md:w-[75%] mx-auto p-8">

                {steps.map((step, index) => (
                    <div key={index} className=" relative flex flex-col border bg-white border-gray-200 rounded-2xl items-center text-center space-y-4 ">


                        <div className='absolute top-4 right-4 rounded-full px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500'>
                            <p className='text-white font-bold'>{step.id}</p>
                        </div>


                        <div className='p-4 mt-20 rounded-full bg-purple-200'>
                            <img className='w-10 h-10' src={step.icon} alt="" />
                        </div>


                        <h3 className='text-[24px] font-bold'>{step.title}</h3>
                        <p className="text-[16px] mb-22 text-gray-400">
                            {step.desc}
                        </p>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default GetStarted