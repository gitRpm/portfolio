'use client';

import { track } from "@vercel/analytics";

export const Link: React.FC<any> = (props) => {
  return (
    <a
      {...props}
      onClick={() => {
        track(props.href);
      }}
    >
      {props.children}
    </a>
  );
};
