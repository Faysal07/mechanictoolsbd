// Header Logo Link Here
import HeaderLogo from "../../public/images/Logo.png";

export default function Header() {
    return(
        <header className="pt-[20px] pb-[20px]">
            <div className="container md:max-w-[1370px] m-auto">
                <div className="grid md:grid-cols-5 sm:grid-cols-1 gap-6">
                    <div className="headerLogo">
                        <a href="#"><img src={HeaderLogo} alt="" /></a>
                    </div>
                    <div className="searchBox col-span-2 content-center">
                        <label className="input w-full">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" required placeholder="Search for Products, Brand & More . . ." />
                        </label>
                    </div>
                    <div className="buttons col-span-2 text-center content-center">
                        <button className="btn btn-neutral md:mr-[10px] md:ml-[10px]"><i className="fa-solid fa-gift"></i>Sell</button>
                        <button className="btn btn-primary md:mr-[10px] md:ml-[10px]"><i className="fa-solid fa-cart-shopping"></i>Cart</button>
                        <button className="btn btn-secondary md:mr-[10px] md:ml-[10px]"><i className="fa-solid fa-ranking-star"></i>Points</button>
                        <button className="btn btn-accent md:mr-[10px] md:ml-[10px]"><i className="fa-solid fa-user"></i>Sign In</button>
                    </div>
                </div>
                <div className="grid grid-col-1 md:mt-[30px]">
                    <div className="navbar bg-primary text-primary-content shadow-sm">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                </div>
                                <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li>
                                        <summary>Mechanic Products</summary>
                                        <ul className="p-2 bg-base-100 w-40 z-1">
                                            <li><a href="#">Protector Cuting Machine</a></li>
                                            <li><a href="#">Microscope, Camera</a></li>
                                            <li><a href="#">OCA Bubble Remover Machine</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <summary>Electric Products</summary>
                                        <ul className="p-2 bg-base-100 w-40 z-1">
                                            <li><a href="#">SMD Rework Station</a></li>
                                            <li><a href="#">Power Supply</a></li>
                                            <li><a href="#">Touch Separator</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <summary>Repairing Products</summary>
                                        <ul className="p-2 bg-base-100 w-40 z-1">
                                            <li><a href="#">Mobile Repair Tools</a></li>
                                            <li><a href="#">iPhone Repair Tools</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="navbar-center hidden lg:flex content-center">
                            <ul className="menu menu-horizontal px-1 w-full">
                                <li className="px-5 font-bold text-[15px]"><a href="#">Home</a></li>
                                <li className="px-5 font-bold text-[15px]"><a href="#">About Us</a></li>
                                <li className="px-5 font-bold text-[15px]">
                                    <details>
                                        <summary>Mechanic Products</summary>
                                        <ul className="p-2 bg-base-100 w-40 z-1">
                                            <li><a href="#">Protector Cuting Machine</a></li>
                                            <li><a href="#">Microscope, Camera</a></li>
                                            <li><a href="#">OCA Bubble Remover Machine</a></li>
                                        </ul>
                                    </details>
                                </li>
                                <li className="px-5 font-bold text-[15px]">
                                    <details>
                                        <summary>Electric Products</summary>
                                        <ul className="p-2 bg-base-100 w-40 z-1">
                                            <li><a href="#">SMD Rework Station</a></li>
                                            <li><a href="#">Power Supply</a></li>
                                            <li><a href="#">Touch Separator</a></li>
                                        </ul>
                                    </details>
                                </li>
                                <li className="px-5 font-bold text-[15px]">
                                    <details>
                                        <summary>Repairing Products</summary>
                                        <ul className="p-2 bg-base-100 w-40 z-1">
                                            <li><a href="#">Mobile Repair Tools</a></li>
                                            <li><a href="#">iPhone Repair Tools</a></li>
                                        </ul>
                                    </details>
                                </li>
                                 <li className="px-5 font-bold text-[15px]"><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="navbar-end">

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}