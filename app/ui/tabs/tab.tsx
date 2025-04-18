export const Tab: React.FC<{ name: string; isActive: boolean }> = ({ name, isActive }) => {
  return (
    <li className={`py-2 ${isActive ? "font-bold" : "font-light"}`}>
      <a
        href={`#${name}`}
        className="text-[var(--color-mint-400)] hover:text-[var(--color-mint-200)] transition duration-200 ease-in-out"
      >
        {name}
      </a>
    </li>
  );
};
