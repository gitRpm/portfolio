import jobs from '../data/job-data';
import { Job } from '../types';

export const getJobs: () => Promise<Job[]> = async () => {
  return jobs;
};