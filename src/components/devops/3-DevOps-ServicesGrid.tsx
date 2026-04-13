import {
  Rocket,
  Cloud,
  Container,
  Code,
  BarChart3,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "CI/CD Pipeline Automation",
    description:
      "We build automated pipelines to streamline code integration, testing, and deployment for faster and reliable releases.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure Management",
    description:
      "Design, deploy, and manage scalable infrastructure on AWS, Azure, or GCP with high availability.",
  },
  {
    icon: Container,
    title: "Containerization & Orchestration",
    description:
      "Implement Docker and Kubernetes for efficient application deployment, scaling, and management.",
  },
  {
    icon: Code,
    title: "Infrastructure as Code (IaC)",
    description:
      "Automate infrastructure provisioning using tools like Terraform and Ansible to ensure consistency and speed.",
  },
  {
    icon: BarChart3,
    title: "Monitoring & Logging",
    description:
      "Set up real-time monitoring and centralized logging using tools like Prometheus, Grafana, and ELK stack.",
  },
  {
    icon: Shield,
    title: "DevSecOps & Compliance",
    description:
      "Integrate security into the DevOps lifecycle with automated security checks and compliance practices.",
  },
];

export default function DevOpsServices() {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 bg-[hsl(var(--green-bg))]/50"
    >
      <div className="container mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-[700px] mb-10">
          <h2
            className="text-[32px] sm:text-[40px] leading-[1.1] mb-5 tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-display, serif)" }}
          >
            DevOps That{" "}
            <span className="text-[hsl(var(--green-dark))] italic">
              Scales Systems
            </span>
          </h2>

          <div className="w-12 h-[3px] bg-[hsl(var(--green-dark))] opacity-20 mb-5 rounded-full" />

          <p className="text-[15px] text-muted-foreground leading-[1.5]">
           Our team specializes in building robust pipelines and automating infrastructure to empower teams to deliver high-quality applications faster while reducing operational overhead.
          </p>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-card hover:bg-[hsl(var(--green-dark))] border border-border/60 hover:border-[hsl(var(--green-dark))] rounded-xl p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 group flex flex-col"
            >
              {/* Icon */}
              <div className="mb-4 text-[hsl(var(--green-dark))] group-hover:text-[#facc15] transition-colors">
                <service.icon className="w-6 h-6" strokeWidth={1.75} />
              </div>

              {/* Title */}
              <h3 className="text-[15px] font-semibold text-foreground group-hover:text-white mb-2 leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[13.5px] text-muted-foreground group-hover:text-white/90 leading-snug line-clamp-3">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}