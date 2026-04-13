const SectionDivider: React.FC = () => {

 const items = [

    "Digital Startegy",

   "SEO",

   "Paid Ads",

   "Social Media",

   "Content Marketing",

   

 ];

 

 return (

   <div className="w-full bg-[#0d2005] overflow-hidden py-3">

     <div className="flex whitespace-nowrap animate-marquee">

       {[...items, ...items].map((item, index) => (

         <span

           key={index}

           className="mx-6 text-sm text-[#b5cea3] flex items-center gap-4"

         >

           <span className="w-2 h-2 bg-[#546b47] rounded-full"></span>

           <span className="tracking-wide">{item}</span>

         </span>

       ))}

     </div>

   </div>

 );

};

 

export default SectionDivider;