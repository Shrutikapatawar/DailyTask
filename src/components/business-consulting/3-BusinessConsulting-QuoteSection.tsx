export default function BusinessConsultingQuote() {
  return (
    <section className="relative px-6 md:px-16 py-24 bg-[#1a4a2e] text-white overflow-hidden text-center">
      <div className="absolute w-[400px] h-[400px] bg-[#2d6a45] opacity-20 rounded-full blur-3xl animate-blob top-[-50px] left-[-50px]" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl italic mb-6 font-serif">
          &ldquo;Our approach combines strategic planning with practical execution support, ensuring that recommendations translate into measurable results.&rdquo;
        </h2>
        <p className="text-[#c3c8ba] uppercase tracking-widest text-sm">
          Real Results over Theoretical Concepts
        </p>
      </div>
    </section>
  );
}
