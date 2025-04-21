'use client';

import { useEffect, useMemo, useState } from 'react';

const ScrollLink: React.FC<any> = ({children, to, topThreshold, bottomThreshold, className, activeClassName, ...rest})  => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = document.getElementById(to);
    if (!element) return;
    const setActiveStatus = () => {
      if (window.scrollY >= element.offsetTop - topThreshold && window.scrollY < (element.offsetTop + element.scrollHeight + bottomThreshold)) {
        setActive(true)
      } else {
        setActive(false)
      }
    }
    const onScroll = () => {
      setActiveStatus();
    };

    window.removeEventListener("scroll", () => {})
    window.addEventListener("scroll", onScroll, { passive: true });

    setActiveStatus();

    return () => {
      window.removeEventListener("scroll", () => {});
    }
  }, [to]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(to);
    if (element) {
      window.scroll({ behavior: "smooth", top: element.offsetTop });
    }
  };

  return (
    <a href={`#${to}`} onClick={handleClick} {...rest} className={`cursor-pointer ${ active ? activeClassName : ''} ${className}`}>
      {children}
    </a>
  );
}

export default ScrollLink;
