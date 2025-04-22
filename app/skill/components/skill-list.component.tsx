import React from 'react';
import Image from 'next/image';
import { Skill } from '../types';
import { SkillEnum } from '../types';

interface SkillsProps {
  skills: Skill[];
}

const SkillList: React.FC<SkillsProps> = ({ skills }) => {
  const languagesFrameworksTools: Skill[] = skills.filter(skill =>
    skill.type === SkillEnum.Language || skill.type === SkillEnum.Framework || skill.type === SkillEnum.Tool
  );
  
  const practices: Skill[] = skills.filter(skill => skill.type === SkillEnum.Practice);

  return (
    <div>
      <h3 className="mb-10">Languages, Frameworks, & Tools</h3>
      <ul className="grid grid-cols-3 sm:grid-cols-4 gap-12 mx-auto w-full lg:justify-start lg:gap-x-20" aria-label="Languages, Frameworks, & Tools">
        {languagesFrameworksTools.map((skill) => (
          <li key={skill.id} className="flex flex-col items-center">
            <Image
              src={skill.icon}
              alt={skill.title}
              width={40}
              height={40}
              aria-label='Icon for {skill.title}'
            />
            <span className="text-center text-sm mt-2">{skill.title}</span>
          </li>
        ))}
      </ul>
      <h3 className="mt-14 lg:mt-22 mb-10">Software Engineering Practices</h3>
      <ul className="list-none grid sm:grid-cols-2 gap-6 lg:gap-y-10" aria-label="Languages, Frameworks, & Tools">
        {practices.map((skill) => (
          <li key={skill.id} className="flex items-start text-lg font-normal">
            <Image
              src="/double-arrow.svg"
              alt={skill.title}
              width={15}
              height={15}
              className="inline-block mr-2 mt-2"
              aria-label='Icon for {skill.title}'
            />
            {skill.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
