import Image from "next/image";

const Footer = () => {
    return (
        <>
        <div>
                <div className="flex items-center justify-center mt-16"><a href="/"><Image className="hover:opacity-70 duration-500 ease-in-out" src="/logo.png" width={250} height={400} alt="" /></a></div>
                <div className="container flex flex-row items-center justify-center mt-8">
                    <div className="mx-1 underline text-gray-400 hover:text-gray-800"><a href="">Terms</a></div>
                    <div className="mx-1 underline text-gray-400 hover:text-gray-800"><a href="">Privacy</a></div>
                    <div className="mx-1 underline text-gray-400 hover:text-gray-800"><a href="">About Us</a></div>
                </div>                
                <div className="container flex flex-row items-center justify-center mt-8">
                    <div className="mx-4 text-3xl"><a href="#"><i className="fab fa-linkedin text-blue-400 hover:text-blue-600 duration-1000"></i></a></div>
                    <div className="mx-4 text-3xl"><a href="#"><i className="fab fa-twitter text-blue-400 hover:text-blue-600 duration-1000"></i></a></div>
                    <div className="mx-4 text-3xl"><a href="#"><i className="fab fa-facebook text-blue-400 hover:text-blue-600 duration-1000"></i></a></div>
                </div>

                <div className="flex items-center justify-center mt-8 text-gray-500">© 2024 Productivity School</div>
                
            </div>
        </>
    );
}

export default Footer;
