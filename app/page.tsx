import ContentCard from "./ui/content-card/content-card";
import Hero from "./ui/hero/hero";
import Pill from "./ui/pill/pill";

const tabs = [
  {
    name: "About",
    content: "About me",
    href: "#about",
  }, {
    name: "Skills",
    content: "Skills",
    href: "#projects",
  }, {
    name: "Experience",
    content: "Experience",
    href: "#contact",
  }
];

export default function Home() {
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl px-6 md:px-12 lg:flex-row gap-6">
      <div className="flex flex-col justify-between lg:mx-auto text-lg lg:min-h-screen lg:basis-[48%] py-12 lg:pt-20 lg:sticky lg:top-0 lg:max-h-screen">
        <header>
          <Hero />
        </header>
      </div>
      <main className="lg:basis-[52%] py-12 lg:pt-20">
        <Pill className="">Use this for content attributes</Pill>
        <Pill className="!text-base !px-4 !py-2 !font-semibold">Use this for skills list</Pill>
        <ContentCard
          title="Content Card"
          subtitle="Subtitle"
          description="This is a content card that can be used to display information."
          meta="Meta information"
          attributes={["Attribute 1", "Attribute 2", "Attribute 3"]}
          url="https://example.com"
          ariaLabel="Content card link"
        />
        <p className="text-2xl font-semibold mb-4">placeholder</p>
      </main>
      <footer className="lg:absolute lg:bottom-12 text-lg">
        <p className="lg:max-w-sm">Built with <b>Next.js</b>, <b>Tailwind CSS</b>, and <b>TypeScript</b>, and is hosted on <b>Vercel.</b></p>
      </footer>
    </div>
  );
}
