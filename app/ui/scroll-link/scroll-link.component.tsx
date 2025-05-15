'use client';

import useScrollTo from "../../hooks/use-scroll-to";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ScrollLink: React.FC<any> = ({children, to, topThreshold, bottomThreshold, className, activeClassName, ...rest})  => {
  const { active, handleClick } = useScrollTo({ to, topThreshold, bottomThreshold });

  return (
    <a href={`#${to}`} onClick={handleClick} {...rest} className={`cursor-pointer ${ active ? activeClassName : ''} ${className}`}>
      {children}
    </a>
  );
}

export default ScrollLink;
