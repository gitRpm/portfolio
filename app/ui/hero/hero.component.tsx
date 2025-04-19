import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section>
      <span className="h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center mb-4">
        <Image
          src="/code.svg"
          alt="Code Icon"
          width={50}
          height={50}
        />
      </span>
      
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
          className="py-1.5 px-3 bg-[var(--color-mint-400)] text-[var(--color-background)] font-semibold rounded-full shadow-md hover:bg-[var(--color-mint-200)] focus-visible:bg-[var(--color-mint-200)] disabled:opacity-50 hover:cursor-pointer transition duration-200 ease-in-out text-base"
          aria-label="Connect with Ryan Morris on LinkedIn"
        >
          Let's Connect
        </a>
      </div>
    </section>
  );
};

export default Hero;
