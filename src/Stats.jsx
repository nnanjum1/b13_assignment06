const Stats = () => {
    return (
        <div className="flex flex grow py-15 items-center mb-30 justify-center mx-auto gap-30 bg-gradient-to-r from-blue-500 to-purple-500">
            <div>
                <h1 className="text-[60px] font-extrabold text-white">50K+</h1>
                <p className="text-[24px] font-medium text-white">Active Users</p>
            </div>
            <div className="flex items-center">
                <div className=" items-center w-1 h-[70px] bg-gray-400"></div>                <div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-[60px] font-extrabold text-white ">200+</h1>
                        <p className="text-[24px] font-medium text-white">Premium Tools</p></div>
                </div>
                <div className=" items-center w-1 h-[70px] bg-gray-400"></div>
            </div>
            <div>
                <h1 className="text-[60px] font-extrabold text-white">4.9</h1>
                <p className="text-[24px] font-medium text-white">Rating</p>
            </div>
        </div>
    )
}

export default Stats;
