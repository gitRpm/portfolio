import { Hero } from "./ui/hero/hero";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 md:px-12">
      <div className="flex flex-col justify-between mx-auto text-lg min-h-screen py-12 lg:pt-20">
        <header>
          <Hero />
        </header>
        <footer>
          <p>This site was built with <b>Next.js</b>, <b>Tailwind CSS</b>, and <b>TypeScript</b>, and is hosted on <b>Vercel.</b></p>
        </footer>
      </div>
    </div>
  );
}
