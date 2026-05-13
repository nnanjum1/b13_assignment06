const Banner = () => {
    return (
        <div className="Banner my-[85px] flex md:flex-wrap gap-10 w-[90%] md:w-[75%] md:mx-auto">
            <div className="w-[53%] space-y-4 flex flex-col  justify-center" >
                <div className="inline-flex w-fit bg-purple-100 items-center gap-1.5 rounded-full py-2 px-4 mb-4">
                    <div className="w-4 h-4 rounded-full  bg-purple-200 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full  bg-purple-300 flex items-center justify-center" >
                            <div className="w-1.5 h-1.5  rounded bg-purple-500 flex items-center justify-center">
                            </div>
                        </div>
                    </div>
                    <p className="text-[16px] font-medium text-purple-500">New: AI-Powered Tools Available</p>
                </div>
                <div>
                    <h1 className="text-[60px] md:text-[65px]  text-[#101727] font-extrabold">Supercharge Your Digital Workflow
                    </h1>
                    <p className="text-[18px] text-[#627382] mt-4">Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.

                        Explore Products
                    </p>
                    <div className="flex gap-4 mt-8">
                        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full p-4 transition-all duration-300 hover:from-purple-300 hover:to-blue-500">
                            Explore Products
                        </button>
                        <button className="group relative text-4 font-bold rounded-full p-4 flex gap-2.5 overflow-hidden">

                            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></span>

                            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300 flex items-center gap-2">
                                <img className="h-4 w-4" src="/assets/Play.png" alt="" />
                                Watch Demo
                            </span>

                            <span className="absolute inset-0 rounded-full border-2 border-purple-500 pointer-events-none"></span>
                        </button> </div>
                </div>
            </div>
            <div className="w-[42%]"><img src="/assets/banner.png" alt="" /></div>
        </div>
    )

}
export default Banner;