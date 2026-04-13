const DevOpsMarquee: React.FC = () => {
  const items = [
    "CI/CD",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Terraform",
    "Jenkins",
    "Monitoring",
    "Automation",
    "DevSecOps",
  ];

  return (
    <div className="w-full bg-[#1a4a2e] overflow-hidden py-3 border-y border-white/10">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-6 text-sm text-white/80 flex items-center gap-4 uppercase tracking-widest font-medium"
          >
            <span className="w-2 h-2 bg-white/60 rounded-full"></span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default DevOpsMarquee;
