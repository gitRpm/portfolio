import { Hero } from "./ui/hero/hero";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl px-6 md:px-12 lg:flex-row gap-6">
      <div className="flex flex-col justify-between lg:mx-auto text-lg lg:min-h-screen lg:basis-[48%] py-12 lg:pt-20 lg:sticky lg:top-0 lg:max-h-screen">
        <header>
          <Hero />
        </header>
      </div>
      <main className="lg:basis-[52%] py-12 lg:pt-20">
        <p className="text-2xl font-semibold mb-4">placeholder</p>
      </main>
      <footer className="lg:absolute lg:bottom-6">
        <p className="lg:max-w-sm">Built with <b>Next.js</b>, <b>Tailwind CSS</b>, and <b>TypeScript</b>, and is hosted on <b>Vercel.</b></p>
      </footer>
    </div>
  );
}
