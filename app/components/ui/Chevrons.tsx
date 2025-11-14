export default function Chevrons({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="chevrons" aria-hidden="true">
        <span className="chevron" />
        <span className="chevron" />
        <span className="chevron" />
        <span className="chevron" />
      </div>
      <h2 className="uppercase tracking-widest text-[var(--cream)] font-semibold">
        {children}
      </h2>
    </div>
  );
}