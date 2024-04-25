import Cards from "@/components/Cards/Cards";
import SideNav from "@/components/SideNav/SideNav";

const courses = () => {
    return(
        <>
        <div className="container-flex grid grid-cols-10 pt-14">

<div className="flex md:col-span-2 bg-white border-r border-gray-200 ">
   
<SideNav />

</div>

<div className="flex md:col-span-1 bg-white ">
   
</div>


<div className="flex flex-col col-span-10 md:col-span-6 bg-white mx-8 md:px-20 pt-12">
  <div className="mx-2">
        <h1 className="text-4xl font-bold ">Best Productivity Training Courses in 2023</h1>
        
        <div className="mt-4">
            <h1 className="text-md">By Alex • Updated July 2, 2023</h1>
        </div>
        <div className="pt-10 text-4xl font-semibold">
          Course Picks
      </div>

      <div className="container grid sm:grid-cols-2 gap-7 mt-6 mb-36"> 

        <Cards src= "/R.jpg" title="ChatGPT"/>
        <Cards src= "/R.jpg" title="ChatGPT"/>
        <Cards src= "/R.jpg" title="ChatGPT"/>
        <Cards src= "/R.jpg" title="ChatGPT"/>
        <Cards src= "/R.jpg" title="ChatGPT"/>
        <Cards src= "/R.jpg" title="ChatGPT"/>
        <Cards src= "/R.jpg" title="ChatGPT"/>
        <Cards src= "/R.jpg" title="ChatGPT"/>

      </div>

  </div> 
</div>

<div className="flex md:col-span-1 bg-white ">
   
</div>


</div>
        </>
    );
};
export default courses;