"use client"
import Image from "next/image";
import { useState } from "react";




const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="bg-white border-b border-gray-200 fixed top-0 w-full z-50">
        <nav className="container sm:mx-auto px-2 py-3"> 
            <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-black">
                    <a href="/"><Image className="h-7 transition-opacity duration-500 ease-in-out hover:opacity-70" src="/logo.png" alt="" width={200} height={100} /></a>
                </div>
                <div className="hidden md:block">
                    <ul className="flex items-center space-x-8">
                        <li><a href="/apps" className="text-black font-medium">Apps</a></li>
                        <li><a href="/courses" className="text-black font-medium">Courses</a></li>
                        <li><a href="/books" className="text-black font-medium">Books</a></li>
                    </ul>
                </div>
                <div className="md:hidden">
                    <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
                        <svg className="w-6 h-6 text-black" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
    
            {menuOpen && (
            <div id="mobile-menu" className="md:hidden bg-white top-0 left-0 w-full h-full pr-1 pt-4">
                <div className="flex h-screen w-screen">
                    <ul className="w-screen">
                        <li className="w-screen"><a href="/apps" className="rounded-lg block pl-2 py-2 mx-6 hover:bg-gray-100 hover:text-gray-500">Apps</a></li>
                        <li className="w-screen"><a href="/courses" className="rounded-lg block pl-2 py-2 mx-6 hover:bg-gray-100 hover:text-gray-500">Courses</a></li>
                        <li className="w-screen"><a href="/books" className="rounded-lg block pl-2 py-2 mx-6 hover:bg-gray-100 hover:text-gray-500">Books</a></li>
                    </ul>
                </div>
            </div>
        )}
            

    
        </nav>
    </div>
    );
};
export default Header;