'use client';

import Button from "../button/button";

export const Hero: React.FC = () => {
  return (
    <section>
      <h1>
        Ryan Morris
      </h1>
      <h2>
        Full Stack Engineer
      </h2>
      <p className="text-lg mt-6 max-w-xs">
        I build clean, scalable, and performant applications for the web.
      </p>
      <div className="mt-10">
        <Button label="Connect" onClick={() => {}} />
      </div>
    </section>
  );
};
