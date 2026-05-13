import React, { useState } from "react";

const ToolTabs = ({ cart, activeTab, setActiveTab }) => {

    return (
        <div className="flex flex-col items-center mt-8">

            <div className="border-gray-200 border rounded-full p-1 shadow-md flex gap-2">

                <button
                    onClick={() => setActiveTab("products")}
                    className={`px-6 py-2 rounded-full text-[16px] font-medium transition-all 
            ${activeTab === "products"
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                            : "text-[#25065D] hover:bg-gray-100"
                        }`}
                >
                    Products
                </button>


                <button
                    onClick={() => setActiveTab("cart")}
                    className={`relative px-6 py-2 rounded-full text-[16px]  flex font-medium transition-all 
                        ${activeTab === "cart"
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md"
                            : "text-[#25065D] hover:bg-gray-100"
                        }`}
                >
                    Cart


                    {cart && cart.length > 0 && (
                        <span>
                            ({cart.length})
                        </span>
                    )}
                </button>
            </div>

        </div>
    );
};

export default ToolTabs;