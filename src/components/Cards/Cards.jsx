import Image from "next/image";
const Cards = ({src,title,href}) => {
    return(
        <div className="rounded-xl overflow-hidden bg-gray-200 hover:shadow-lg transform hover:-translate-y-1 duration-1000">
            <a href={href}>
            <div className="flex items-center justify-center"><Image className="h-40 w-auto" src={src} alt="" width={400} height={400} /></div>
            <div className="flex items-center justify-center bg-gray-200 font-semibold text-gray-500 text-md"><h1 className="my-4 mx-4">{title}</h1>
            </div>
            </a>
    </div>
    );
};

 export default Cards;
