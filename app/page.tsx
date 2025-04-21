
import Image from "next/image";
import Hero from "@/ui/hero/hero.component";
import SkillList from "@/skill/components/skill-list.component";
import JobList from "@/job/components/job-list.component";
import { getJobs } from "./job/services/job-service";
import { getSortedSkills } from './skill/services/skill-service';
import ScrollLink from "./ui/scroll-link/scroll-link.component";
import ScrollElement from "./ui/scroll-element/scroll-element.component";

const Home = async () => {
  const jobs = await getJobs();
  const skills = await getSortedSkills();

  return (
    <>
      <nav className="hidden lg:block fixed z-10 w-full custom-blur" aria-label="Page Navigation">
        <div className="flex justify-between flex-row flex-nowrap max-w-screen-xl px-12 mx-auto">
          <div className="flex-grow"></div>
          <ul className={`grid grid-cols-3`}>
            {["About", "Skills", "Experience"].map((tab, i) => (
              <ScrollLink
                key={tab}
                to={tab.toLowerCase()}
                href={`#${tab.toLowerCase()}`}
                className="hover:text-[var(--color-white)] hover:font-medium transition duration-200 ease-in-out"
                topThreshold={99.5}
                bottomThreshold={60}
                activeClassName="nav-active"
              >
                <li className="py-2 mx-6 text-center nav-header">{tab}</li>
              </ScrollLink>
            ))}
          </ul>
        </div>
      </nav>
      <div className="flex flex-col mx-auto lg:max-w-screen-xl lg:px-6 md:px-12 lg:flex-row gap-6 lg:mt-30" id="scroll-container">
        {/* take up space to account for fixed hero */}
        <div className="hidden lg:block lg:basis-[48%]"></div>
        <div className="flex flex-col justify-between lg:mx-auto text-lg lg:basis-[48%] py-12 lg:pt-0 lg:fixed">
          <header className="pad-content">
            <Hero />
          </header>
        </div>
        <main className="relative grid col-1 gap-20 lg:gap-40 lg:basis-[52%] py-12 lg:pt-0">
          {/* <ScrollElement name="about"> */}
            <section id='about' className="">
              <h2 className="sticky-header custom-blur">
                <span className="pad-content">About</span>
              </h2>
              <p className="text-lg pad-content">
                I am a passionate software engineer with a strong background in web development and a keen interest in building user-friendly applications. I thrive in collaborative environments and enjoy tackling complex challenges. My goal is to create impactful solutions that enhance user experiences.
              </p>
            </section>
          {/* </ScrollElement>
          <ScrollElement name="skills"> */}
            <section id='skills'>
              <h2 className="sticky-header custom-blur">
                <span className="pad-content">Skills</span>
              </h2>
              <div className="pad-content">
                <SkillList skills={skills} />
              </div>
            </section>
          {/* </ScrollElement> */}
          {/* <ScrollElement name="experience"> */}
            <section id='experience'>
              <h2 className="sticky-header custom-blur">
                <span className="pad-content">Experience</span>
              </h2>
              <div className="pad-content">
                <JobList jobs={jobs} />
                {/* TODO: add a link to resume */}
              </div>
            </section>
          {/* </ScrollElement> */}
        </main>
        <footer className="mb-12 lg:fixed lg:bottom-12 text-sm leading-6 pad-content lg:mb-0">
          {/* TODO: maybe add a link to source code */}
          {/* TODO: add a what's next section (float right on desktop) */}
          <p>Built with <b>Next.js</b>, <b>Tailwind CSS</b>, and <b>TypeScript</b>.</p>
          <p>Hosted on <b>Vercel.</b></p>
        </footer>
      </div>
    </>
  );
}

export default Home;
