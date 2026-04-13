import Link from "next/link";
export default function Hero() {

 return (

   <section className="relative px-6 md:px-20 py-24 grid md:grid-cols-2 gap-16 items-center overflow-hidden

    bg-[hsl(var(--green-bg))]/50">

     

     {/*  Background Glow Effects */}

     <div className="absolute w-[500px] h-[500px] bg-[#1e4d32] opacity-10 rounded-full blur-3xl top-[-150px] left-[-150px]"></div>

     <div className="absolute w-[400px] h-[400px] bg-[#86c5a3] opacity-20 rounded-full blur-3xl bottom-[-120px] right-[-120px]"></div>

     <div className="absolute w-[300px] h-[300px] bg-[#b5cea3] opacity-20 rounded-full blur-3xl top-[40%] left-[30%]"></div>

 

     {/* CONTENT */}

     <div className="relative z-10 contents">

 

       {/* LEFT */}

       <div className="max-w-xl">

         

         {/* Badge */}

         <div className="bg-white/60 backdrop-blur-md border border-white/40

           rounded-lg text-[#41642f] text-[11px] px-5 py-2 inline-block mb-6 uppercase tracking-[0.2em]">

           Digital Marketing Services

         </div>

 

         {/* Heading */}

         <h1 className="text-[40px] md:text-[56px] leading-[1.1] font-semibold text-[#191c19] tracking-tight">

           Performance-led <br />

           digital growth

           <span className="block text-[#41642f] mt-1 font-medium">

             & real business impact.

           </span>

         </h1>

 

         {/* Description */}

         <p className="mt-6 text-[15px] leading-7 text-gray-600">

           We partner with ambitious brands to build strong digital ecosystems

           that attract, engage, and convert. Combining strategy, creativity,

           and performance marketing, we help you achieve measurable growth.

         </p>

 

         {/* Buttons */}

         <div className="mt-8 flex gap-4">
          <Link href="/contact">
          <button className="bg-[#1e4d32] text-white px-6 py-3 rounded-lg font-medium
            hover:bg-[#f59e0b] hover:-translate-y-1 transition duration-300">
             Get Free Audit
          </button>
          </Link>
          <Link href="/about">
          <button className="border border-[#1e4d32] rounded-lg px-6 py-3
              hover:border-[#f59e0b]  hover:-translate-y-1 transition duration-300">
             Learn More
           </button>
           </Link>
         </div>

       </div>

 

       {/* RIGHT FORM */}

       <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl

         border border-white/40 flex flex-col justify-center">

         

         <h2 className="text-2xl font-bold text-[#1e4d32] ">

           Get Free Consultation

         </h2>

 

         <p className="text-sm text-gray-500 mb-6">

           Let’s understand your business and help you grow

         </p>

 

         <form className="flex flex-col gap-4">

           

          <input

 type="text"

 placeholder="Your Name"

 className="border border-gray-200 px-4 py-3 rounded-lg

 focus:outline-none focus:ring-0 focus:border-[#1e4d32]"

/>

 

<input

 type="email"

 placeholder="Your Email"

 className="border border-gray-200 px-4 py-3 rounded-lg

 focus:outline-none focus:ring-0 focus:border-[#1e4d32]"

/>

 

<input

 type="text"

 placeholder="Phone Number"

 className="border border-gray-200 px-4 py-3 rounded-lg

 focus:outline-none focus:ring-0 focus:border-[#1e4d32]"

/>

 

<textarea

 placeholder="Tell us about your requirement..."

 rows={4}

 className="border border-gray-200 px-4 py-3 rounded-lg

 focus:outline-none focus:ring-0 focus:border-[#1e4d32]"

></textarea>

 

        <button className="bg-[#1e4d32] text-white py-3 rounded-lg font-medium

 hover:bg-[#f59e0b] hover:-translate-y-1 transition duration-300">

 Submit Request

</button>

         </form>

       </div>

 

     </div>

   </section>

 );

}