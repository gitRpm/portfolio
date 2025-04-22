
import Hero from "@/ui/hero/hero.component";
import SkillList from "@/skill/components/skill-list.component";
import JobList from "@/job/components/job-list.component";
import { getJobs } from "./job/services/job-service";
import { getSortedSkills } from './skill/services/skill-service';
import ScrollLink from "./ui/scroll-link/scroll-link.component";
import UpRightArrow from "./ui/arrow/up-right-arrow.component";
import { Link } from "./ui/link/link.component";
import { ScrollToTopButton } from "./ui/button/scroll-to-top.component";

const Home = async () => {
  const jobs = await getJobs();
  const skills = await getSortedSkills();

  return (
    <>
      <nav className="hidden lg:block fixed z-10 w-full custom-blur" aria-label="Page Navigation">
        <div className="flex flex-row flex-nowrap max-w-screen-xl px-12 mx-auto">
          <div className="basis-[48%] px-8"></div>
          <ul className={`flex flex-row flex-nowrap gap-12 items-center px-8`}>
            {[{ id: "summary", title: "Summary" }, { id: "skills", title: "Skills" }, { id: "experience", title: "Experience" }, { id: "whatsnext", title: "What's Next?" }].map((tab) => (
              <ScrollLink
                key={tab.id}
                to={tab.id}
                href={`#${tab.id.toLowerCase()}`}
                topThreshold={99.5}
                bottomThreshold={60}
                activeClassName="nav-active"
              >
                <li className="py-4 text-center nav-header">{tab.title}</li>
              </ScrollLink>
            ))}
          </ul>
        </div>
      </nav>
      <div className="flex flex-col mx-auto lg:max-w-screen-xl lg:px-6 md:px-12 lg:flex-row gap-6 lg:mt-30" id="scroll-container">
        {/* take up space to account for fixed hero */}
        <div className="hidden lg:block lg:basis-[48%]"></div>
        <div className="flex flex-col justify-between lg:mx-auto lg:basis-[48%] py-12 lg:pt-0 lg:fixed">
          <header className="pad-content">
            <Hero />
          </header>
        </div>
        <main className="relative grid col-1 gap-20 lg:gap-40 lg:basis-[52%] py-12 lg:pt-0">
          <section id='summary' className="">
            <h2 className="sticky-header custom-blur">
              <span className="pad-content">About</span>
            </h2>
            <div className="flex flex-col gap-6 lg:gap-12">
              <p className="pad-content">
                I&apos;m a software engineer who turns ideas into clean, intuitive digital experiences. With a background in web development and a focus on user experience, I&apos;ve built everything from retail platforms to SaaS apps and internal tools. I thrive in cross-functional teams, always aligning tech with real business needs.
              </p>
              <p className="pad-content">
                What drives me is creating software that makes life easier—through clean architecture, thoughtful design, and simple, testable code. Whether on the frontend or backend, my goal is to build solutions that are both functional and genuinely enjoyable to use.
              </p>
            </div>
          </section>
          <section id='skills'>
            <h2 className="sticky-header custom-blur">
              <span className="pad-content">Skills</span>
            </h2>
            <div className="pad-content">
              <SkillList skills={skills} />
            </div>
          </section>
          <section id='experience'>
            <h2 className="sticky-header custom-blur">
              <span className="pad-content">Experience</span>
            </h2>
            <div className="pad-content">
              <JobList jobs={jobs} />
              <div className="mt-16">
                <Link className='group/link font-bold text-[var(--color-white)] hover:text-[var(--color-mint-400)]'
                  href='/RyanMorris_Resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                >   
                  <span className="inline-block">
                    View resume
                    <UpRightArrow />
                  </span>
                </Link>
              </div>
            </div>
          </section>
          <section id='whatsnext'>
            <h2 className="sticky-header custom-blur">
              <span className="pad-content">What&apos;s Next?</span>
            </h2>
            <div className="pad-content flex flex-col flex-nowrap gap-6 lg:gap-12 last-section">
              <p>
                I&apos;m always looking to grow by exploring new technologies and expanding my skill set. Lately, I&apos;ve been working with AI to see how it can enhance the solutions I build. Check back soon for a chatbot I&apos;m currently developing for this site!
              </p>
              <p>
                If you&apos;re working on something exciting or just want to connect and chat tech, feel free to reach out!
              </p>
              <div>
                <Link
                  className="group/link font-bold text-[var(--color-white)] hover:text-[var(--color-mint-400)]"
                  href="https://www.linkedin.com/in/ryan-morris-a51b0777/"
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className="inline-block">
                    Connect on LinkedIn
                    <UpRightArrow />
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <footer className="mb-12 lg:fixed lg:bottom-12 text-sm leading-6 pad-content lg:mb-0">
          {/* TODO: maybe add a link to source code */}
          <p>Built with <b>Next.js</b>, <b>Tailwind CSS</b>, and <b>TypeScript</b>.</p>
          <p>Hosted on <b>Vercel.</b></p>
        </footer>
      </div>
      <span className="lg:hidden">
        <ScrollToTopButton />
      </span>
    </>
  );
}

export default Home;
