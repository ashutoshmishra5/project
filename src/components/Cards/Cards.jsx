import Image from "next/image";
const Cards = ({src,title,href}) => {
    return(
        <div classNameName="rounded-xl overflow-hidden bg-gray-200 hover:shadow-lg transform hover:-translate-y-1 duration-1000">
            <a href={href}>
            <Image classNameName="h-40" src={src} alt="" width={400} height={400} />
            <div classNameName="flex items-center justify-center bg-gray-200 font-semibold text-gray-500 text-md"><h1 classNameName="my-4">{title}</h1>
            </div>
            </a>
    </div>
    );
};
 export default Cards;