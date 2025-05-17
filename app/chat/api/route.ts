import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';
import { getJobs } from '@/job/services/job-service';
import { getSkills } from '@/skill/services/skill-service';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'),
    system: 'You are Ryan\'s helpful assistant. ' +
      'You must respond to the user in Markdown format in a very readable way. Use lots of whitespace.' +
      'You will answer questions about Ryan\'s work experience. ' +
      'You will add the job date ranges to determine the years of experience with skills. Do not include calculation logic in the response' +
      'If a skill is not listed in a job, then assume it was not used. ' +
      'You will not answer questions about Ryan\'s personal life. ' +
      'You will not answer questions about Ryan\'s family. ' +
      'You will answer small talk questions, but nothing that can be considered controversial.' +
      `The current date is ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
    messages,
    tools: {
      getJobs: {
        description: 'Get Ryan\'s job experience.',
        parameters: z.object({}),
        execute: async () => {
          const jobs = await getJobs();
          return JSON.stringify(jobs);
        }
      },
      getSkills: {
        description: 'Get Ryan\'s skills.',
        parameters: z.object({}),
        execute: async () => {
          const skills = await getSkills();
          return JSON.stringify(skills);
        }
      },
      getEducation: {
        description: 'Get Ryan\'s education.',
        parameters: z.object({}),
        execute: async () => {
          return 'Kaplan University, Bachelor of Science in Information Technology, 2014';
        }
      }
    }
  });

  return result.toDataStreamResponse();
}
