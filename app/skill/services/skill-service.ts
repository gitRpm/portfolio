import skills from "../data/skill-data";
import { Skill } from "../types";

export const getSkills = async (ids?: number[]): Promise<Skill[]> => {
  return ids
    ? skills.filter((skill) => ids.includes(skill.id))
    : skills;
};

export const getSortedSkills = async (ids?: number[]): Promise<Skill[]> => {
  const result = ids ? (await getSkills(ids)) : await getSkills(ids);
  
  return result.sort((a, b) => { return a.type - b.type; });
}
