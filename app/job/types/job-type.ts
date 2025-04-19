export type Job = {
  id: number;
  title: string;
  company: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  imageUrl: string;
  link: string;
  skills: number[];
  current?: boolean;
};
