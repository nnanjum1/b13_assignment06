const Navbar = () => {
    return (
        <div className="navbar w-[90%] md:w-[75%] md:mx-auto">
            <div className="navbar-start">
                <div className="flex items-center gap-1 font-bold text-4xl
     bg-gradient-to-r from-blue-500 to-purple-500
     bg-clip-text text-transparent leading-normal">
                    DigiTools
                </div>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal gap-10 px-1 text-lg">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>

                </ul>
            </div>
            <div className="navbar-end gap-5 hidden md:flex">
                <ul className="flex items-center gap-5"><li><a><img className="w-4 h-4" src="./assets/products/shopping-cart.png" alt="" /></a></li>
                    <li><a></a>Login</li>
                    <li><a className="btn bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white">Get Started</a>
                    </li>  </ul>          </div>
        </div>
    )
}
export { Navbar };