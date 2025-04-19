import { SkillEnum } from "./skill-enum";

export type Skill = {
  id: number;
  title: string;
  type: SkillEnum;
  description: string;
  icon: string;
};