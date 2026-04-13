import {

 ShoppingCart, Home, HeartPulse, GraduationCap, Cloud, Rocket, Factory, Hotel,

 IndianRupee, Store, Utensils, Laptop, Plane, Truck, Film

} from "lucide-react";

 

export default function Industries() {

 

 const industries = [

   { name: "E-commerce", icon: <ShoppingCart /> },

   { name: "Real Estate", icon: <Home /> },

   { name: "Healthcare", icon: <HeartPulse /> },

   { name: "Education", icon: <GraduationCap /> },

   { name: "SaaS", icon: <Cloud /> },

   { name: "Startups", icon: <Rocket /> },

   { name: "Manufacturing", icon: <Factory /> },

   { name: "Hospitality", icon: <Hotel /> },

   { name: "Finance", icon: <IndianRupee /> },

   { name: "Retail", icon: <Store /> },

   { name: "Restaurants", icon: <Utensils /> },

   { name: "Technology", icon: <Laptop /> },

   { name: "Travel", icon: <Plane /> },

   { name: "Logistics", icon: <Truck /> },

   { name: "Media & Entertainment", icon: <Film /> },

 ];

 

 return (

   <section className="relative px-6 md:px-16 py-20 overflow-hidden

      bg-[hsl(var(--green-bg))]/50">

     

     {/* Soft Dark Green Glow */}

     <div className="absolute w-[400px] h-[400px] bg-[#1e4d32] opacity-10 rounded-full blur-3xl top-[-120px] left-[-120px]"></div>

     <div className="absolute w-[400px] h-[400px] bg-[#1e4d32] opacity-10 rounded-full blur-3xl bottom-[-120px] right-[-120px]"></div>

 

     <div className="relative z-10">

       

       {/* Heading */}

       <h2 className="text-3xl md:text-5xl font-semibold text-[#1e4d32] mb-4">

         Industries we serve

       </h2>

 

       {/* Subtext */}

       <p className="text-gray-600 mb-12 max-w-xl">

         Across multiple industries, we help businesses scale with digital excellence.

       </p>

 

       {/* Grid */}

       <div className="grid gap-6

         grid-cols-2

         sm:grid-cols-3

         md:grid-cols-4

         lg:grid-cols-5">

         

         {industries.map((item, index) => (

           <div

             key={index}

             className="group flex items-center gap-4 p-5 rounded-2xl

             bg-white/70 backdrop-blur-md

             border border-white/40

             hover:shadow-xl hover:-translate-y-2

             transition duration-300 cursor-pointer"

           >

             

             {/* Icon */}

             <div className="w-10 h-10 flex items-center justify-center rounded-full

               bg-[#e7f0ea] text-[#1e4d32]

               group-hover:bg-[#f59e0b] group-hover:text-white

               transition">

               {item.icon}

             </div>

 

             {/* Text */}

             <span className="text-sm font-semibold text-[#1e4d32]">

               {item.name}

             </span>

 

           </div>

         ))}

 

       </div>

 

     </div>

   </section>

 );

}