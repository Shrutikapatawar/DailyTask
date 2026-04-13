export function Callout({ children, variant = "info" }: { children: React.ReactNode; variant?: "info" | "warn" | "ok" }) {
  const styles = {
    info: "border-[#d5e5ca] bg-[#f5faef]",
    warn: "border-[#f3d39c] bg-[#fff7ea]",
    ok: "border-[#b9dfbf] bg-[#eefaf1]",
  };

  return (
    <div className={`rounded-xl p-4 my-4 border ${styles[variant]}`}>
      {children}
    </div>
  );
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border border-[#c3c8ba] bg-white rounded-xl p-4 ${className}`}>
      {children}
    </div>
  );
}

export function SectionTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="text-2xl mt-8 mb-3 text-[#1f3415]" style={{ fontFamily: "'Lora', serif" }}>
      {children}
    </h2>
  );
}

export function SubsectionTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return <h3 id={id} className="text-lg mt-4 mb-2 text-[#294021]">{children}</h3>;
}

export function AddressGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 gap-4 my-4">{children}</div>;
}

export function TwoColumn({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 gap-6 my-4">{children}</div>;
}
