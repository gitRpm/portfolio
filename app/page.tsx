import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Hero from "@/ui/hero/hero.component";
import SkillList from "@/skill/components/skill-list.component";
import JobList from "@/job/components/job-list.component";
import { getJobs } from "./job/services/job-service";
import { getSortedSkills } from './skill/services/skill-service';

const Home = async () => {
  const jobs = await getJobs();
  const skills = await getSortedSkills();

  return (
    <div className="flex flex-col mx-auto lg:max-w-screen-xl lg:px-6 md:px-12 lg:flex-row gap-6">
      <div className="flex flex-col justify-between lg:mx-auto text-lg lg:min-h-screen lg:basis-[48%] py-12 lg:pt-20 lg:sticky lg:top-0 lg:max-h-screen">
        <header className="pad-content">
          <Hero />
        </header>
      </div>
      <main className="grid col-1 gap-20 lg:gap-40 lg:basis-[52%] py-12 lg:pt-20">
        <section>
          <h2 className="sticky-header">
            <span className="pad-content">About</span>
          </h2>
          <p className="text-lg pad-content">
            I am a passionate software engineer with a strong background in web development and a keen interest in building user-friendly applications. I thrive in collaborative environments and enjoy tackling complex challenges. My goal is to create impactful solutions that enhance user experiences.
          </p>
        </section>
        <section>
          <h2 className="sticky-header">
            <span className="pad-content">Skills</span>
          </h2>
          <div className="pad-content">
            <SkillList skills={skills} />
          </div>
        </section>
        <section>
          <h2 className="sticky-header">
            <span className="pad-content">Experience</span>
          </h2>
          <div className="pad-content">
            <JobList jobs={jobs} />
          </div>
        </section>
      </main>
      <footer className="mb-12 lg:fixed lg:bottom-12 text-sm leading-6 pad-content lg:mb-0">
        <p>Built with <b>Next.js</b>, <b>Tailwind CSS</b>, and <b>TypeScript</b>.</p>
        <p>Hosted on <b>Vercel.</b></p>
      </footer>
    </div>
  );
}

export default Home;
