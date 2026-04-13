export default function CTA() {

 return (

   <section className="relative px-6 md:px-16 py-24 overflow-hidden

     bg-[#1e4d32] text-center">

     

     {/*  Background Glow */}

     <div className="absolute w-[400px] h-[400px] bg-[#1e4d32] opacity-10 rounded-full blur-3xl top-[-120px] left-[-120px]"></div>

     <div className="absolute w-[400px] h-[400px] bg-[#86c5a3] opacity-20 rounded-full blur-3xl bottom-[-120px] right-[-120px]"></div>

 

     {/* Content Card */}

     <div className="relative z-10 max-w-2xl mx-auto

      bg-white/90

       border border-white/40

       rounded-3xl p-10 shadow-xl">

       

       {/* Heading */}

       <h2 className="text-3xl md:text-5xl font-semibold text-[#1e4d32] leading-tight">

         Let’s scale your digital success

       </h2>

 

       {/* Subtext */}

       <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">

         Partner with us to build high-performing marketing strategies that drive measurable growth, stronger brand presence, and long-term success.

       </p>

 

       {/* CTA Button */}

       <button

         className="mt-8 bg-[#1e4d32] text-white px-8 py-3 rounded-full font-medium

         hover:bg-[#f59e0b] hover:-translate-y-1 hover:shadow-lg

         transition duration-300"

       >

         Get Free Consultation →

       </button>

 

       {/* Trust Line */}

       <p className="mt-5 text-sm text-gray-500">

         No commitment required • Free strategy session

       </p>

 

     </div>

   </section>

 );

}