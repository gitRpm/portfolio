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
        {/* <Pill className="!text-base !px-4 !py-2 !font-semibold">Use this for skills list</Pill> */}
        <ContentCard
          title="Sr. Software Engineer"
          subtitle="DriveTime"
          description="Developed customer-facing experiments to optimize conversion. Partnered with cross-functional teams to integrate third-party financing terms. Designed and managed CI/CD pipelines, ensuring reliable and automated deployments. Regularly conducted code reviews and provided mentorship to junior engineers, promoting code quality and adherence to best practices across teams."
          meta="Jan 2024 - Present"
          attributes={["Attribute 1", "Attribute 2", "Attribute 3"]}
          url="https://www.drivetime.com"
          ariaLabel="opens drivetime.com in a new tab"
        />
      </main>
      <footer className="lg:absolute lg:bottom-12 text-lg">
        <p>Built with <b>Next.js</b>, <b>Tailwind CSS</b>, and <b>TypeScript</b>.</p>
        <p>Hosted on <b>Vercel.</b></p>
      </footer>
    </div>
  );
}
