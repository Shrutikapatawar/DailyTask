import {

 TrendingUp, Search, Share2, Target, PenTool, BarChart3

} from "lucide-react";

 

export default function Services() {

 

 const services = [

   {

     title: "Performance Marketing & Strategy",

     description: "We build high-performance marketing systems designed to deliver measurable ROI.",

     icon: <TrendingUp size={28} strokeWidth={1.5} />

   },

   {

     title: "Search Engine Optimization (SEO)",

     description: "We help your business rank higher and drive organic growth.",

     icon: <Search size={28} strokeWidth={1.5} />

   },

   {

     title: "Social Media Marketing",

     description: "We turn social platforms into growth channels.",

     icon: <Share2 size={28} strokeWidth={1.5} />

   },

   {

     title: "Google Ads & PPC Campaigns",

     description: "Drive instant traffic and high-quality leads.",

     icon: <Target size={28} strokeWidth={1.5} />

   },

   {

     title: "Content Marketing & Branding",

     description: "Craft compelling content that builds trust.",

     icon: <PenTool size={28} strokeWidth={1.5} />

   },

   {

     title: "Analytics & Reporting",

     description: "Track performance and make data-driven decisions for continuous growth.",

     icon: <BarChart3 size={28} strokeWidth={1.5} />

   }

 ];

 

 return (

   <section className="relative px-6 md:px-16 py-20 overflow-hidden

     bg-[hsl(var(--green-bg))]/50">

     

     {/* 🌿 Glow Background Elements */}

     <div className="absolute w-[400px] h-[400px] bg-[#1e4d32] opacity-10 rounded-full blur-3xl top-[-120px] left-[-120px]"></div>

     <div className="absolute w-[400px] h-[400px] bg-[#1e4d32] opacity-10 rounded-full blur-3xl bottom-[-120px] right-[-120px]"></div>

     <div className="absolute w-[300px] h-[300px] bg-[#86c5a3] opacity-20 rounded-full blur-3xl top-[40%] left-[30%]"></div>

 

     <div className="relative z-10">

       

       {/* Heading */}

       <h2 className="text-3xl md:text-5xl font-semibold text-[#1e4d32] leading-tight mb-4 flex items-center gap-3 flex-wrap">

         <span>Six capabilities,</span>

 

         <span className="text-2xl md:text-2xl font-normal text-gray-500 font-[cursive]">

           one growth engine

         </span>

       </h2>

 

       {/* Subtext */}

       <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mb-12">

         We don’t believe in one-size-fits-all marketing. Every brand has a unique

         audience, journey, and growth story — and we craft strategies that truly fit.

       </p>

 

       {/* Cards */}

       <div className="grid gap-6

         grid-cols-1

         sm:grid-cols-2

         md:grid-cols-3">

         

         {services.map((service, index) => (

           <div

             key={index}

             className="group

             bg-white/80 backdrop-blur-md

             border border-white/40

             p-6 rounded-2xl

             hover:bg-[#1e4d32] hover:text-white

             hover:shadow-xl hover:-translate-y-2

             transition duration-300

             cursor-pointer"

           >

             

             {/* Icon */}

             <div className="w-10 h-10 flex items-center justify-center rounded-full

               bg-[#e7f0ea] text-[#1e4d32] mb-4

               group-hover:bg-[#f59e0b] group-hover:text-white transition">

               {service.icon}

             </div>

 

             {/* Title */}

             <h3 className="text-[17px] font-semibold text-[#1e4d32] mb-2 group-hover:text-white">

               {service.title}

             </h3>

 

             {/* Description */}

             <p className="text-gray-500 text-sm leading-relaxed group-hover:text-white">

               {service.description}

             </p>

 

           </div>

         ))}

 

       </div>

     </div>

   </section>

 );

}