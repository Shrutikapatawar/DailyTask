import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

 

export default function Process() {

 

 const steps = [

   {

     title: "Discovery",

     description: "Understand business, audience, and opportunities.",

     icon: <Search size={28} />

   },

   {

     title: "Strategy",

     description: "Create a customized roadmap.",

     icon: <Lightbulb size={28} />

   },

   {

     title: "Execution",

     description: "Launch and manage campaigns.",

     icon: <Rocket size={28} />

   },

   {

     title: "Optimization",

     description: "Continuously improve performance.",

     icon: <TrendingUp size={28} />

   },

 ];

 

 return (

   <section className="px-6 md:px-16 py-20  bg-[hsl(var(--green-bg))]/50">

     

     {/* Heading */}

     <h2 className="text-3xl md:text-5xl font-semibold text-[#1e4d32] mb-12">

       Our Process

     </h2>

 

     {/* Cards */}

     <div className="grid gap-6 md:grid-cols-4">

       

       {steps.map((step, index) => (

         <div

           key={index}

           className="group relative bg-white border border-gray-200

           p-6 rounded-2xl

           hover:shadow-xl hover:-translate-y-2

           transition duration-300 cursor-pointer"

         >

           

           {/* Step Number */}

           <span className="absolute -top-4 left-4 bg-[#1e4d32] text-white text-xs px-3 py-1 rounded-full">

             Step {index + 1}

           </span>

 

           {/* Icon */}

           <div className="w-12 h-12 flex items-center justify-center rounded-full

             bg-[#e7f0ea] text-[#1e4d32] mb-4 group-hover:bg-[#f59e0b] group-hover:text-white transition">

             {step.icon}

           </div>

 

           {/* Title */}

           <h3 className="text-lg font-semibold text-[#1e4d32] mb-2 group-hover:text-[#1e4d32]">

             {step.title}

           </h3>

 

           {/* Description */}

           <p className="text-gray-500 text-sm leading-relaxed">

             {step.description}

           </p>

 

         </div>

       ))}

 

     </div>

   </section>

 );

}