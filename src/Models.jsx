import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Models = ({ cart, setCart }) => {
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
        if (badge === "Best Seller") return "bg-orange-200 text-orange-500";
        if (badge === "Popular") return "bg-purple-200 text-purple-500";
        if (badge === "New") return "bg-green-200 text-green-500";
        if (badge === "Hot") return "bg-red-200 text-red-500";
        if (badge === "Limited") return "bg-blue-200 text-blue-500";
        return "bg-teal-200 text-teal-500";
    };

    const handleBuyNow = (item) => {
        const existing = cart.find((p) => p.id === item.id);

        if (existing) {
            toast.info("Already in cart");
            return;
        }

        setCart([...cart, { ...item, quantity: 1 }]);
        toast.success(`${item.title} added to cart`);
    };

    return (
        <div className="w-[90%] md:w-[75%] mx-auto mb-20 grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-white">
            {models.map((item) => {
                const isInCart = cart.some((p) => p.id === item.id);

                return (
                    <div
                        key={item.id}
                        className="flex flex-col bg-white rounded-3xl border border-gray-200 p-6 shadow-sm"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center p-2">
                                <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                            </div>

                            <p className={`rounded-full py-1 px-3 text-xs font-bold ${getBadgeStyle(item.badge)}`}>
                                {item.badge}
                            </p>
                        </div>

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

                        <button
                            onClick={() => handleBuyNow(item)}
                            disabled={isInCart}
                            className={`w-full mt-auto py-4  text-white font-bold rounded-2xl transition-colors shadow-lg shadow-purple-100 ${isInCart
                                ? "bg-green-600 cursor-not-allowed"
                                : "bg-[#8B2CFF] hover:bg-[#7045a0]"
                                }`}
                        >
                            {isInCart ? "Added to Cart" : "Buy Now"}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Models;