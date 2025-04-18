const Pill: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = ""}) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[var(--color-mint-900)]/15 text-[var(--color-mint-400)] bg-opacity-1 ${className}`}
    >
      {children}
    </span>
  );
};

export default Pill;