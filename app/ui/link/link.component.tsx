'use client';

import { track } from "@vercel/analytics";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
