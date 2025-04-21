import ContentCard from '@/ui/content-card/content-card.component';
import { Job } from '../types';
import { Skill } from '@/skill/types';
import { getSkills } from '@/skill/services/skill-service';


const JobList: React.FC<{ jobs: Job[]}> = async ({ jobs = [] }) => {
  const formatDateRange = (startDate: Date, endDate: Date | null, current?: boolean) => {
    const startMonth = startDate.toLocaleString('default', { month: 'short' });
    const startYear = startDate.getFullYear();
    const endMonth = endDate ? endDate.toLocaleString('default', { month: 'short' }) : 'Present';
    const endYear = endDate ? endDate.getFullYear() : new Date().getFullYear();
    return `${startMonth} ${startYear} - ${current ? 'Present' : `${endMonth} ${endYear}`}`;
  };

  const skills: Skill[] = await getSkills(jobs.map(job => job.skills).flat());

  // arrange the index of the skills for jobs based on the order they are in the sorted skills list
  const skillsMap: { [key: number]: number } = {};
  skills.forEach((skill: Skill, index: number) => {
    skillsMap[skill.id] = index;
  });

  jobs.forEach((job: Job) => {
    job.skills.sort((a: number, b: number) => {
      return skillsMap[a] - skillsMap[b];
    });
  });

  return (
    <>
      <div className="flex flex-col gap-16 lg:gap-24">
        {jobs.sort((a: Job, b: Job) => b.startDate.getTime() - a.startDate.getTime()).map((job: Job) => {
          const meta = formatDateRange(job.startDate, job.endDate, job.current);
          const attributes = job.skills.map((skillId: number) => {
            const skill = skills.find((skill: Skill) => skill.id === skillId);
            return skill?.title})
          return (
            <ContentCard
              key={job.id}
              title={job.title}
              subtitle={job.company}
              description={job.description}
              meta={meta}
              attributes={attributes}
              url={job.link}
              ariaLabel={job.title}
            />
          );
        })}
      </div>
      <div className="mt-10">
        <a className='font-bold hover:text-[var(--color-white)]' href='/resume.pdf' target='_blank' rel='noopener noreferrer'>   
          View resume
        </a>
      </div>
      
    </>
    
  );
};

export default JobList;
