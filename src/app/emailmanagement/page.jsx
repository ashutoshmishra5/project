"use client"
import SideNav from "@/components/SideNav/SideNav";
import Image from "next/image";
import { useState } from "react";


const emailmanagement = () => {
  const [tableOpen,setTableOpen] = useState(false);

  const toggleTable = () => {
    setTableOpen(!tableOpen);
  };

    return (
        <div className="container-flex grid grid-cols-10 pt-14">

    <div className="flex md:col-span-2 bg-white border-r border-gray-200 ">  
     <SideNav />
    </div>

    <div className="flex md:col-span-1 bg-white ">
       
    </div>


    <div className="flex flex-col col-span-10 md:col-span-6 bg-white px-4 md:px-20 pt-12">
      
<div>
    <div className="mx-2">
        <h1 className="text-4xl font-bold">5 Best Email Management Courses in 2023</h1>
        <div className="mt-4">
          <h1 className="text-md">By Alex • Updated July 2, 2023</h1>
        </div>
        <div className="mt-4">
          <p>Do you find it difficult to keep on top of your email inbox? If so, you'll want to check out our selection of the best email management courses below.</p>
        </div>
        <div className="mt-2">
          <p>These courses will teach you how to reach inbox zero and reduce the time spent on dealing with emails.</p>
        </div>
        <h2 className="mt-8 font-semibold text-4xl mb-4">Best email management courses</h2>
        
        <ol className="list-decimal ml-2 underline">
          <li className="mb-2"><a href="https://www.udemy.com/course/email-productivity-masterclassName/" target="_blank" rel="noopener noreferrer">The Stack Method: Inbox Zero Email Productivity Skills by Prasanth Nair (Udemy)</a></li>
          <li className="mb-2"><a href="https://www.skillshare.com/classNamees/Email-Productivity-Work-Smarter-with-Your-Inbox/1149670606" target="_blank" rel="noopener noreferrer">Email Productivity: Work Smarter with Your Inbox by Alexandra Samuel (Skillshare)</a></li>
          <li className="mb-2"><a href="https://www.linkedin.com/learning/how-to-get-and-stay-on-top-of-your-inbox" target="_blank" rel="noopener noreferrer">How to Get (and Stay) On Top of Your Inbox by Mike Vardy (LinkedIn Learning)</a></li>
          <li className="mb-2"><a href="https://www.reed.co.uk/courses/email-management-inbox-management-inbox-zero/285842" target="_blank" rel="noopener noreferrer">Email Management / Inbox Management / Inbox Zero by Taming Your Inbox (Reed Courses)</a></li>
          <li className="mb-2"><a href="https://stephaniepellett.com/inboxzero/" target="_blank" rel="noopener noreferrer">Inbox Zero 101 by Stephanie Pellet</a></li>
        </ol>
        
        <h2 className="mt-8 font-semibold text-4xl mb-4">How to choose</h2>
        <div>
          <p>There are a lot of different courses on the market, so how do you choose the right one for you? The best way to decide is to think about what factors are important to you. Here are some things we considered:</p>
        </div>
        
        <ol className="list-disc ml-4 mt-6">
          <li className="mb-2"><span className="font-semibold">Reviews:</span> Do the course and teacher receive good student feedback?           </li>
          <li className="mb-2"><span className="font-semibold">Up-to-date:</span> Is the course content up-to-date?</li>
          <li className="mb-2"><span className="font-semibold">Price:</span> Is the course content up-to-date?</li>
          <li className="mb-2"><span className="font-semibold">Extras:</span> Is the course content up-to-date?</li>
        </ol>
        
        
        <h2 className="mt-8 font-semibold text-4xl mb-4">1. <a className=" underline decoration-gray-700 decoration-1" href="https://www.udemy.com/course/email-productivity-masterclassName/">The Stack Method: Inbox Zero Email Productivity Skills by Prasanth Nair (Udemy)</a></h2>
      </div>
    
      <div>
        <Image
 className="rounded-2xl  w-4/5 h-3/5" alt="image" src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/94240d1b-d376-4148-8c25-163b330acb40/Untitled/w=1080,quality=80,fit=scale-down" width={400} height={400} decoding="async" />
        <ul className="list-disc ml-6 mt-4">
          <li><strong>Price</strong>: $90</li>
          <li><strong>Content</strong>: 2.5 hours of on-demand video</li>
          <li><strong>Rating</strong>: 4.6 stars (100+ ratings)</li>
          <li><strong>Instructor</strong>: Prasanth Nair</li>
          <li><strong>Platform</strong>: Udemy</li>
          <li><strong>Guarantee</strong>: 30-day refund</li>
        </ul>
        <p className="mt-6 mb-8">The Stack Method is going to completely change the way you think about and process your email by creating a simple, habit-based approach taught by internationally acclaimed productivity expert Prasanth Nair.</p>
        <h2 className="mt-8 font-semibold text-4xl mb-4">2. <a className=" underline decoration-gray-700 decoration-1" href="https://www.skillshare.com/classNamees/Email-Productivity-Work-Smarter-with-Your-Inbox/1149670606">Email Productivity: Work Smarter with Your Inbox by Alexandra Samuel (Skillshare)</a></h2>
        <Image
 className="rounded-2xl  w-4/5 h-3/5" alt="image" src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/770a2587-d993-4be8-b009-6c14f1e4bfb0/Untitled/w=1080,quality=80,fit=scale-down" width={400} height={400} decoding="async" />
        <ul className="list-disc ml-6 mt-4">
          <li><strong>Price</strong>: $32/month (or $14/month billed annually)</li>
          <li><strong>Content</strong>: 45 minutes of on-demand video</li>
          <li><strong>Rating</strong>: n/a</li>
          <li><strong>Instructor</strong>: Alexandra Samuel</li>
          <li><strong>Platform</strong>: Skillshare</li>
          <li><strong>Guarantee</strong>: Free 30-day trial</li>
        </ul>
        <p className="mt-6 mb-4">In this straightforward className, Alexandra Samuel shares her step-by-step process to handle email efficiently and effectively, so you can stop spending time in your inbox and start spending time on the things that matter. You’ll learn how to:</p>
        <ul className="list-disc ml-6 mb-8">
          <li>Use automated filters to make your email work for you</li>
          <li>Create a flexible folder system to stay organized</li>
          <li>Find the right tools to proactively solve email overload</li>
        </ul>
      </div>
      <h2 className="mt-8 font-semibold text-4xl mb-4">3. <a className=" underline decoration-gray-700 decoration-1" href="https://www.linkedin.com/learning/how-to-get-and-stay-on-top-of-your-inbox">How to Get (and Stay) On Top of Your Inbox by Mike Vardy (LinkedIn Learning)</a></h2>
      <div>
        <Image
 className="rounded-2xl  w-4/5 h-3/5" alt="image" src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/600ca5d8-a7da-4efc-962e-4c58d1547f69/Untitled/w=1080,quality=80,fit=scale-down" width={400} height={400} decoding="async" />
      
        <ul className="list-disc ml-4 mt-4 mb-4">
          <li><strong>Price</strong>: $30/month</li>
          <li><strong>Content</strong>: 25 minutes of on-demand video</li>
          <li><strong>Rating</strong>: 4.6 stars (150+ ratings)</li>
          <li><strong>Instructor</strong>: Mike Vardy</li>
          <li><strong>Platform</strong>: LinkedIn Learning</li>
          <li><strong>Guarantee</strong>: Free 30-day trial</li>
        </ul>
      </div>
      <div>
        <p className="my-4">In this interview-style course, productivity strategist and time management expert Mike Vardy shows you how to respond to emails proactively instead of reactively with too much haste.</p>
        <p className="mb-4">Learn how to implement a system for managing your inbox, with tips to keep bad habits out of your workflow. Mike provides three simple approaches for how to prioritize and respond to emails, as well as timing strategies to optimize your output and automate certain responses.</p>
      </div>
      
      <h2 className="mt-8 font-semibold text-4xl mb-4">4. <a className=" underline decoration-gray-700 decoration-1" href="https://www.reed.co.uk/courses/email-management-inbox-management-inbox-zero/285842">Email Management / Inbox Management / Inbox Zero by Taming Your Inbox (Reed Courses)</a></h2>
      <div>
        <Image
 className="rounded-2xl  w-4/5 h-3/5" alt="image" src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/f6418290-974e-4023-ad8d-7784aa8874b7/Untitled/w=1080,quality=80,fit=scale-down" width={400} height={400} decoding="async" />
        <ul className="list-disc ml-4 mt-4 mb-4">
          <li><strong>Price</strong>: $250</li>
          <li><strong>Content</strong>: 3 hours of live online className</li>
          <li><strong>Rating</strong>: n/a</li>
          <li><strong>Instructor</strong>: Taming Your Inbox</li>
          <li><strong>Platform</strong>: Reed Courses</li>
          <li><strong>Guarantee</strong>: n/a</li>
        </ul>
      </div>
      <div>
        <p className="pb-4">This course explains the concepts of "Taming Your Inbox" which include how you manage email, your thought process and mindset when dealing with email, and email habits you may have had for years and how these affect productivity.</p>
      </div>
      
      <h2 className="mt-8 font-semibold text-4xl mb-4">5. <a className=" underline decoration-gray-700 decoration-1" href="https://stephaniepellett.com/inboxzero/">Inbox Zero 101 by Stephanie Pellet</a></h2>
      <div>
        <Image
 className="rounded-2xl  w-4/5 h-3/5 w-4/5 h-3/5" alt="image" src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/6e21a255-fb78-4257-9641-399a636484ce/Untitled/w=1080,quality=80,fit=scale-down" width={400} height={400} decoding="async" />
        <ul className="list-disc ml-4 mt-4 mb-4">
          <li><strong>Price</strong>: $49 (or $65 for live className)</li>
          <li><strong>Content</strong>: 9 on-demand video lessons (or 3-hour live online className)</li>
          <li><strong>Rating</strong>: n/a</li>
          <li><strong>Instructor</strong>: Stephanie Pellet</li>
          <li><strong>Platform</strong>: n/a</li>
          <li><strong>Guarantee</strong>: 7-day refund</li>
        </ul>
      </div>
      <div>
        <p>This course covers strategies for managing email overload and achieving inbox zero. It includes 9 on-demand video lessons or a 3-hour live online className with Stephanie Pellet, providing actionable tips and techniques to declutter your inbox and improve productivity.</p>
      </div>
      <div>
        <p className="my-2">This course covers:</p>
      </div>
      <ul className="list-disc ml-8 mt-4">
        <li>How to set boundaries around your time &amp; energy, and create processes for managing incoming messages.</li>
        <li>Great apps, tips and resources for managing incoming messages on an ongoing basis.</li>
        <li>Learn the nitty-gritty of re-evaluating what you're letting in, and how to filter, sort &amp; manage your mail.</li>
        <li>Adopting new strategies for reducing the number of emails you receive.</li>
      </ul>
      <div>
        <p></p>
      </div>


  <button className="flex items-center px-2 py-1 mt-10 mb-6" onClick={toggleTable}>
  {tableOpen===false ? (<i className="material-icons">keyboard_arrow_right</i>) : (<i className="material-icons">keyboard_arrow_down</i>)}
  <span>Compare Courses</span>
  </button>

      {tableOpen && 
      (<table id="tableContent">
        <thead className="border-y-gray-200 border-y-2">
          <tr>
            <th className="px-4 py-2 text-gray-500 font-normal text-left">Name</th>
            <th className="px-4 py-2 text-gray-500 font-normal text-left">URL</th>
            <th className="px-4 py-2 text-gray-500 font-normal text-left">Creator</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-y-gray-200 border-y-2 px-4 py-2">How to Manage Your Email Inbox</td>
            <td className="border-y-gray-200 border-y-2 px-4 py-2"><a href="https://www.happy.co.uk" target="_blank" rel="noopener noreferrer">www.happy.co.uk</a></td>
            <td className="border-y-gray-200 border-y-2 px-4 py-2">Happy</td>
          </tr>
          <tr>
            <td className="border-y-gray-200 border-y-2 px-4 py-2">Email Management / Inbox Management / Inbox Zero</td>
            <td className="border-y-gray-200 border-y-2 px-4 py-2"><a href="https://www.reed.co.uk" target="_blank" rel="noopener noreferrer">www.reed.co.uk</a></td>
            <td className="border-y-gray-200 border-y-2 px-4 py-2">Taming Your Inbox (via Reed Courses)</td>
          </tr>
          <tr>
            <td className="border-y-gray-200 border-y-2 px-4 py-2">The Stack Method: Inbox Zero Email Productivity Skills</td>
            <td className="border-y-gray-200 border-y-2 px-4 py-2"><a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer">www.udemy.com</a></td>
            <td className="border-y-gray-200 border-y-2 px-4 py-2">Prasanth Nair (via Udemy)</td>
          </tr>
          <tr>
            <td className="border-y-gray-200 border-y-2 px-4 py-2">Email Productivity: Work Smarter with Your Inbox</td>
            <td className="border-y-gray-200 border-y-2 px-4 py-2"><a href="https://www.skillshare.com" target="_blank" rel="noopener noreferrer">www.skillshare.com</a></td>
            <td className="border-y-gray-200 border-y-2 px-4 py-2">Alexandra Samuel (via Skillshare)</td>
          </tr>
          <tr>
            <td className="border-y-gray-200 border-y-2 px-4 py-2">How to Get (and Stay) On Top of Your Inbox</td>
            <td className="border-y-gray-200 border-y-2 px-4 py-2"><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">www.linkedin.com</a></td>
            <td className="border-y-gray-200 border-y-2 px-4 py-2">Mike Vardy (via LinkedIn Learning)</td>
          </tr>
          <tr>
            <td className="border-y-gray-200 border-y-2 px-4 py-2">Inbox Zero 101</td>
            <td className="border-y-gray-200 border-y-2 px-4 py-2"><a href="https://stephaniepellett.com" target="_blank" rel="noopener noreferrer">stephaniepellett.com</a></td>
            <td className="border-y-gray-200 border-y-2 px-4 py-2">Stephanie Pellet</td>
          </tr>
        </tbody>
      </table>
    )
}


    <div className="flex md:col-span-1 bg-white "> 
    </div>


</div>

  
  </div></div>
    );
};

export default emailmanagement;