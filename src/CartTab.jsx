import React from 'react';

const CartTab = ({ cart, setCart }) => {

    const handleRemove = (id) => {
        console.log("Removing item with ID:", id);
        console.log("Current Cart IDs:", cart.map(i => i.id));

        const updatedCart = cart.filter((item) => item.id !== id);

        console.log("New Cart Length:", updatedCart.length);
        setCart(updatedCart);
    };

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
    );

    return (
        <div className='w-[90%] md:w-[75%] border mt-10 mb-20 border-gray-200 rounded-2xl p-10 mx-auto'>

            <h2 className="text-[24px] font-bold mb-6">Your Cart</h2>

            {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
            ) : (
                <div className='space-y-4'>
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between w-full items-center p-4 rounded-xl bg-gray-50"
                        >
                            <div className='flex gap-4 items-center'>

                                <div className='p-3 border border-gray-100 bg-white rounded-full'>
                                    <img className="w-8 h-8" src={item.image} alt={item.title} />
                                </div>

                                <div>
                                    <h3 className="font-bold">{item.title}</h3>
                                    <p className="text-sm text-gray-500">
                                        ${item.price}
                                    </p>
                                </div>

                            </div>

                            <button
                                onClick={() => handleRemove(item.id)}
                                className='btn text-[16px] font-bold text-red-600'
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <div className='flex justify-between mt-6'>
                <h3 className='text-[16px] text-gray-500'>Total</h3>
                <h3 className='text-[24px] font-bold'>
                    ${totalPrice}
                </h3>
            </div>

            <button className='bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[16px] text-center p-4 rounded-full font-bold w-full mt-4'>
                Proceed To Checkout
            </button>

        </div>
    );
};

export default CartTab;