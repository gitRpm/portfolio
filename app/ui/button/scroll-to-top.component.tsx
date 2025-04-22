'use client';
import { useEffect, useState } from "react";

export const ScrollToTopButton: React.FC = () => {
  const [show, setShow] = useState(false);
  let scrollTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 100);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setShow(false), 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      className={`${show ? 'transition-none opacity-100' : 'duration-1000 ease-in-out transition-opacity opacity-0'} fixed bottom-4 right-4 z-100 p-2 my-4 rounded-full shadow-md hover:bg-[var(--color-mint-200)] focus:outline-none transition duration-200 ease-in-out`}
    >
      
      <svg
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="w-8 h-8"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
        <g id="SVGRepo_iconCarrier">
          <title>arrow-up-circle</title>
          <desc>Created with Sketch Beta.</desc>
          <defs />
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Icon-Set-Filled"
              transform="translate(-362.000000, -1089.000000)"
              fill="#ade2e1"
            >
              <path
                d="M384.535,1105.54 C384.145,1105.93 383.512,1105.93 383.121,1105.54 L379,1101.41 L379,1112 C379,1112.55 378.553,1113 378,1113 C377.447,1113 377,1112.55 377,1112 L377,1101.41 L372.879,1105.54 C372.488,1105.93 371.854,1105.93 371.465,1105.54 C371.074,1105.14 371.074,1104.51 371.465,1104.12 L377.121,1098.46 C377.361,1098.22 377.689,1098.15 378,1098.21 C378.311,1098.15 378.639,1098.22 378.879,1098.46 L384.535,1104.12 C384.926,1104.51 384.926,1105.14 384.535,1105.54 L384.535,1105.54 Z M378,1089 C369.163,1089 362,1096.16 362,1105 C362,1113.84 369.163,1121 378,1121 C386.837,1121 394,1113.84 394,1105 C394,1096.16 386.837,1089 378,1089 L378,1089 Z"
                id="arrow-up-circle"
              />
            </g>
          </g>
        </g>
      </svg>
    </button>
  );
};

