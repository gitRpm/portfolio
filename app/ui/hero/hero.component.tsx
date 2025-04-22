'use client';

import { track } from "@vercel/analytics";
import UpRightArrow from "../arrow/up-right-arrow.component";

const Hero: React.FC = () => {
  return (
    <section>
      <h1>
        Ryan Morris
      </h1>
      <h2>
        Full Stack Engineer
      </h2>
      <p className="text-lg mt-6 max-w-xs">
        I build clean, scalable, and performant solutions for the web.
      </p>
      <div className="mt-10">
        {/* <Button label="Connect" onClick={() => {}} /> */}
        <a
          href="https://www.linkedin.com/in/ryan-morris-a51b0777/"
          target="_blank"
          rel="noopener noreferrer"
          className="group/link py-1.5 px-8 bg-[var(--color-mint-400)] text-[var(--color-background)] font-semibold rounded-full shadow-md hover:bg-[var(--color-mint-200)] focus-visible:bg-[var(--color-mint-200)] disabled:opacity-50 hover:cursor-pointer transition duration-200 ease-in-out text-base"
          aria-label="Connect with Ryan Morris on LinkedIn"
          onClick={() => {
            track("CTA Click: Let's Connect");
          }}
        >
          <span className="inline-block">
            Let's Connect
            <UpRightArrow />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
