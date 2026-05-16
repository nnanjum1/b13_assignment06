const Navbar = () => {
    return (




        <div className="navbar bg-white">
            <div className="w-[90%] md:[75%] flex mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className=" font-bold text-4xl
          bg-gradient-to-r from-blue-500 to-purple-500
         bg-clip-text text-transparent leading-normal">
                        DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className="flex items-center gap-5"><li><a><img className="w-4 h-4" src="./assets/products/shopping-cart.png" alt="" /></a></li>
                        <li><a></a>Login</li>
                        <li><a className="btn bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white">Get Started</a>
                        </li>  </ul>
                </div>
            </div>
        </div>

    )
}
export { Navbar };