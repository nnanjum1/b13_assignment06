import React from 'react'

const Pricing = () => {
    return (
        <div className='bg-white mb-20'>


            <h1 className="text-[48px] text-center font-extrabold mt-20">Simple, Transparent Pricing</h1>
            <p className="text-[16px] text-gray-400 text-center">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[90%] md:w-[75%] mx-auto p-8">
                <div className='p-6 rounded-xl bg-gray-50 border border-gray-200'>
                    <h3 className='text-[24px] font-bold'>Starter</h3>
                    <p className='text-[16px] text-gray-400'>Perfect for getting started</p>

                    <div className="mt-4 mb-6">
                        <span className="text-2xl font-bold text-gray-900">$0</span>
                        <span className="text-gray-400 text-sm ml-1">/Month</span>
                    </div>
                    <div>
                        <ul>
                            <li className='text-gray-400 text-[16px] font-medium'><span className='text-green-500'>✓ </span>Access to 10 free tools</li>
                            <li className='text-gray-400 text-[16px] font-medium'><span className='text-green-500'>✓ </span>Basic templates</li>
                            <li className='text-gray-400 text-[16px] font-medium'><span className='text-green-500'>✓ </span>Community support</li>
                            <li className='text-gray-400 text-[16px] font-medium'><span className='text-green-500'>✓ </span>1 project per month</li>

                        </ul>
                    </div>
                    <button className=' bg-gradient-to-r mt-20 from-blue-500 to-purple-500 text-white text-[16px] font-bold py-4 w-full rounded-full '>Get Started Free</button>
                </div>


                <div className=' relative p-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 '>
                    <div className='absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-100 px-3 py-1.5 text-center rounded-full'><p className='font-medium text-orange-700 '>Most Popular</p></div>
                    <h3 className='text-[24px] text-white font-bold'>Pro</h3>
                    <p className='text-[16px] text-white'>Best for professionals</p>

                    <div className="mt-4 mb-6">
                        <span className="text-2xl font-bold text-white">$29</span>
                        <span className="text-white text-sm ml-1">/Month</span>
                    </div>
                    <div>
                        <ul>
                            <li className='text-white text-[16px] font-medium'>✓ Access to all premium tools</li>
                            <li className='text-white text-[16px] font-medium'>✓ Unlimited templates</li>
                            <li className='text-white text-[16px] font-medium'>✓ Priority support</li>
                            <li className='text-white text-[16px] font-medium'>✓ Unlimited projects</li>
                            <li className='text-white text-[16px] font-medium'>✓ Cloud sync</li>
                            <li className='text-white text-[16px] font-medium'>✓ Advanced analytics</li>
                        </ul>
                    </div>
                    <button className=' text-blue-500 mt-6 bg-white hover:bg-blue-300 text-[16px] font-bold py-4 w-full rounded-full'>Start Pro <span className='text-purple-500'>Trial </span></button>
                </div>

                <div className='p-6 rounded-xl bg-gray-50 border border-gray-200'>
                    <h3 className='text-[24px] font-bold'>Enterprise</h3>
                    <p className='text-[16px] text-gray-400'>For teams and businesses</p>

                    <div className="mt-4 mb-6">
                        <span className="text-2xl font-bold text-gray-900">$99</span>
                        <span className="text-gray-400 text-sm ml-1">/Month</span>
                    </div>
                    <div>
                        <ul>
                            <li className='text-gray-400 text-[16px] font-medium'><span className='text-green-500'>✓ </span>Everything in Pro</li>
                            <li className='text-gray-400 text-[16px] font-medium'><span className='text-green-500'>✓ </span>Team collaboration</li>
                            <li className='text-gray-400 text-[16px] font-medium'><span className='text-green-500'>✓ </span>Custom integrations</li>
                            <li className='text-gray-400 text-[16px] font-medium'><span className='text-green-500'>✓ </span>Dedicated support</li>
                            <li className='text-gray-400 text-[16px] font-medium'><span className='text-green-500'>✓ </span>SLA guarantee</li>
                            <li className='text-gray-400 text-[16px] font-medium'><span className='text-green-500'>✓ </span>Custom branding</li>

                        </ul>
                    </div>
                    <button className=' bg-gradient-to-r mt-20 from-blue-500 to-purple-500 text-white text-[16px] font-bold py-4 w-full rounded-full'>Contact Sales</button>
                </div>

            </div>
        </div>

    )
}

export default Pricing