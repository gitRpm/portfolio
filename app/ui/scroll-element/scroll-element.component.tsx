'use client';

import { Element } from 'react-scroll';

const ScrollElement: React.FC<any> = ({children, ...rest})  =>{
  return (
    <Element {...rest}>
      {children}
    </Element>
  );
}

export default ScrollElement;
