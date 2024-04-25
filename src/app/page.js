import Footer from "@/components/Footer/Footer";
import Cards from "@/components/Cards/Cards"
import Image from "next/image";

export default function Home() {
  return (
    <>
           <div className="container-flex grid grid-cols-7 pt-14">
        
        <div className="flex md:col-span-1 bg-white "></div>

        <div className="flex flex-col col-span-7 md:col-span-5 bg-white pt-12 mx-4">

        <div className="mx-2 border-b border-gray-200">
            
                <h1 className="text-4xl font-bold ">Welcome to Productivity School
                </h1>

                <div className="mt-4">
                    <h1 className="text-lg">Learn how to maximize your time, energy, and focus
                    </h1>
                    <button className="rounded-full bg-gray-200 mt-16"> <h1 className="text-lg px-3 py-3 font-medium text-gray-600">start our free masterclassName</h1></button>
                </div>
                <div className="text-4xl pt-16 font-medium">Productivity Resources</div>
            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 pt-4 mb-36">
    
    
               
                <Cards src="https://th.bing.com/th/id/R.f2b4eab7aee92bebd33547a479f993a2?rik=Vx7lXcODtPIM9A&riu=http%3a%2f%2fmedia.npr.org%2fassets%2fbakertaylor%2fcovers%2ft%2fthe-power-of-habit%2f9781400069286_custom-401a0d258f36abc0afccb673d3bab1de7926e20e-s6-c30.jpg&ehk=qqlRcN%2bxxclEPS6EwxuBYimtw54UUFtiAOvcCLNTvYE%3d&risl=&pid=ImageRaw&r=0" title = "Apps" href = "/apps" />
                <Cards src="https://th.bing.com/th/id/R.f2b4eab7aee92bebd33547a479f993a2?rik=Vx7lXcODtPIM9A&riu=http%3a%2f%2fmedia.npr.org%2fassets%2fbakertaylor%2fcovers%2ft%2fthe-power-of-habit%2f9781400069286_custom-401a0d258f36abc0afccb673d3bab1de7926e20e-s6-c30.jpg&ehk=qqlRcN%2bxxclEPS6EwxuBYimtw54UUFtiAOvcCLNTvYE%3d&risl=&pid=ImageRaw&r=0" title = "Books" href = "/books"/>
                <Cards src="https://th.bing.com/th/id/R.f2b4eab7aee92bebd33547a479f993a2?rik=Vx7lXcODtPIM9A&riu=http%3a%2f%2fmedia.npr.org%2fassets%2fbakertaylor%2fcovers%2ft%2fthe-power-of-habit%2f9781400069286_custom-401a0d258f36abc0afccb673d3bab1de7926e20e-s6-c30.jpg&ehk=qqlRcN%2bxxclEPS6EwxuBYimtw54UUFtiAOvcCLNTvYE%3d&risl=&pid=ImageRaw&r=0" title = "Setup Guides" href = "/#"/>
                <Cards src="https://th.bing.com/th/id/R.f2b4eab7aee92bebd33547a479f993a2?rik=Vx7lXcODtPIM9A&riu=http%3a%2f%2fmedia.npr.org%2fassets%2fbakertaylor%2fcovers%2ft%2fthe-power-of-habit%2f9781400069286_custom-401a0d258f36abc0afccb673d3bab1de7926e20e-s6-c30.jpg&ehk=qqlRcN%2bxxclEPS6EwxuBYimtw54UUFtiAOvcCLNTvYE%3d&risl=&pid=ImageRaw&r=0" title = "Courses" href = "/courses"/>
                <Cards src="https://th.bing.com/th/id/R.f2b4eab7aee92bebd33547a479f993a2?rik=Vx7lXcODtPIM9A&riu=http%3a%2f%2fmedia.npr.org%2fassets%2fbakertaylor%2fcovers%2ft%2fthe-power-of-habit%2f9781400069286_custom-401a0d258f36abc0afccb673d3bab1de7926e20e-s6-c30.jpg&ehk=qqlRcN%2bxxclEPS6EwxuBYimtw54UUFtiAOvcCLNTvYE%3d&risl=&pid=ImageRaw&r=0" title = "Apps" href = "./apps"/>

        
        </div> 
        
        </div>

        <div>
        <Footer/>
        </div>

        </div>
    
        <div className="flex md:col-span-1 bg-white ">
        </div>

        </div>
    </>

  );
}
