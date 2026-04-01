import { useEffect, useState } from "react";

const Models = () => {
    const [models, setModels] = useState([]);

    useEffect(() => {
        const fetchModels = async () => {
            try {
                const res = await fetch("/models.json");
                const data = await res.json();
                setModels(data);
            } catch (err) {
                console.error("Failed to load models:", err);
            }
        };
        fetchModels();
    }, []);

    const getBadgeStyle = (badge) => {
        if (badge === "Best Seller") {
            return "bg-orange-200 text-orange-500";
        } else if (badge === "Popular") {
            return "bg-purple-200 text-purple-500";
        } else if (badge === "New") {
            return "bg-green-200 text-green-500";
        } else if (badge === "Hot") {
            return "bg-red-200 text-red-500";
        } else if (badge === "Limited") {
            return "bg-blue-200 text-blue-500";
        } else {
            return "bg-teal-200 text-teal-500";
        }
    };






    return (
        <div className="w-[90%] md:w-[75%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-gray-50">
            {models.map((item) => (
                <div key={item.id} className="flex flex-col bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center p-2">
                            <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                        </div>
                        <p className={`rounded-full py-1 px-3 text-xs font-bold ${getBadgeStyle(item.badge)}`}>
                            {item.badge}
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
                        <p className="text-gray-500 text-sm mt-2">{item.description}</p>
                        <div className="mt-4">
                            <span className="text-2xl font-black text-gray-900">${item.price}</span>
                            <span className="text-gray-400 text-sm ml-1">{item.billing}</span>
                        </div>
                        <ul className="mt-4 space-y-2 mb-6">
                            {item.features.map((f, i) => (
                                <li key={i} className="text-sm text-gray-600 flex items-center">
                                    <span className="text-green-500 mr-2">✓</span> {f}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className="w-full mt-auto py-4 bg-[#8B2CFF] text-white font-bold rounded-2xl hover:bg-[#7a1fe0] transition-colors shadow-lg shadow-purple-100">
                        Buy Now
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Models;