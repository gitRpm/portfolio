export const TabList: React.FC<{ tabs: string[] }> = ({ tabs }) => {
  return (
    <ul className="flex justify-center gap-4 border-b border-[var(--color-mint-400)]">
      {tabs.map((tab) => (
        <li key={tab} className="py-2">
          <a
            href={`#${tab}`}
            className="text-[var(--color-mint-400)] hover:text-[var(--color-mint-200)] transition duration-200 ease-in-out"
          >
            {tab}
          </a>
          <div>
            <div className="w-full h-1 bg-[var(--color-mint-400)] rounded-full mt-1">{tab}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};
