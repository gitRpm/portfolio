import React from 'react';
import Image from 'next/image';
import skillsData, { Skill } from '@/app/lib/data/skills';

interface SkillsProps {
}

const Skills: React.FC<SkillsProps> = () => {
  const languagesFrameworksTools: Skill[] = skillsData.filter(skill =>
    skill.type === 'Language' || skill.type === 'Framework' || skill.type === 'Tool'
  );
  
  const practices: Skill[] = skillsData.filter(skill => skill.type === 'Practice');

  return (
    <div>
      <h3 className="mb-10">Languages, Frameworks, & Tools</h3>
      <ul className="grid grid-cols-3 sm:grid-cols-4 gap-12 mx-auto w-full lg:justify-start lg:gap-x-20" aria-label="Languages, Frameworks, & Tools">
        {languagesFrameworksTools.map((skill) => (
          <li key={skill.id} className="flex flex-col items-center">
            <div className="h-10 w-10">
              <Image
                src={skill.icon}
                alt={skill.title}
                width={10}
                height={10}
                layout="responsive"
                aria-label='Icon for {skill.title}'
              />
            </div>
            <span className="text-center text-sm mt-2">{skill.title}</span>
          </li>
        ))}
      </ul>
      <h3 className="mt-12 mb-10">Software Engineering Practices</h3>
      <ul className="list-none grid sm:grid-cols-2 gap-6 lg:gap-y-10" aria-label="Languages, Frameworks, & Tools">
        {practices.map((skill) => (
          <li key={skill.id} className="flex items-start text-lg font-medium ">
            <Image
              src="/double-arrow.svg"
              alt={skill.title}
              width={15}
              height={15}
              layout="fixed"
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

export default Skills;
