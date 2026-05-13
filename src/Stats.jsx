const Stats = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500">

            <div className="w-[90%] md:w-[75%] mx-auto py-12">

                <div className="flex flex-col md:flex-row items-center justify-between gap-10 text-center">

                    <div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
                            50K+
                        </h1>
                        <p className="text-lg md:text-2xl font-medium text-white">
                            Active Users
                        </p>
                    </div>




                    <div className="flex">
                        <div className=" w-px h-16 bg-white/40"></div>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
                                200+
                            </h1>
                            <p className="text-lg md:text-2xl font-medium text-white">
                                Premium Tools
                            </p></div>
                        <div className=" w-px h-16 bg-white/40"></div>

                    </div>



                    <div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
                            4.9
                        </h1>
                        <p className="text-lg md:text-2xl font-medium text-white">
                            Rating
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Stats;