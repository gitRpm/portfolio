import ContentCard from '@/ui/content-card/content-card.component';
import { Job } from '../types';
import { jobs } from '../data/job-data';

const JobList: React.FC = () => {
  const formatDateRange = (startDate: Date, endDate: Date | null, current?: boolean) => {
    const startMonth = startDate.toLocaleString('default', { month: 'short' });
    const startYear = startDate.getFullYear();
    const endMonth = endDate ? endDate.toLocaleString('default', { month: 'short' }) : 'Present';
    const endYear = endDate ? endDate.getFullYear() : new Date().getFullYear();
    return `${startMonth} ${startYear} - ${current ? 'Present' : `${endMonth} ${endYear}`}`;
  };

  return (
    <div className="flex flex-col gap-12">
      {jobs.sort((a: Job, b: Job) => b.startDate.getTime() - a.startDate.getTime()).map((job: Job) => {
        const meta = formatDateRange(job.startDate, job.endDate, job.current);
        return (
          <ContentCard
            key={job.id}
            title={job.title}
            subtitle={job.company}
            description={job.description}
            meta={meta}
            attributes={[]}
            url={job.link}
            ariaLabel={job.title}
          />
        );
      })}
    </div>
  );
};

export default JobList;
