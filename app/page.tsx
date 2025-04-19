import Hero from "@/ui/hero/hero.component";
import SkillList from "@/skill/components/skill-list.component";
import JobList from "@/job/components/job-list.component";

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
        <section>
          <h2>About</h2>
          <p className="text-lg">
            I am a passionate software engineer with a strong background in web development and a keen interest in building user-friendly applications. I thrive in collaborative environments and enjoy tackling complex challenges. My goal is to create impactful solutions that enhance user experiences.
          </p>
        </section>
        <section className="mt-12">
          <h2>Skills</h2>
          <SkillList />
        </section>
        <section className="mt-12">
          <h2>Experience</h2>
          <JobList />
        </section>
      </main>
      <footer className="lg:fixed lg:bottom-12 text-sm leading-6">
        <p>Built with <b>Next.js</b>, <b>Tailwind CSS</b>, and <b>TypeScript</b>.</p>
        <p>Hosted on <b>Vercel.</b></p>
      </footer>
    </div>
  );
}
