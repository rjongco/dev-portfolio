'use client';
import { useTheme } from '@/lib/hooks/use-theme';
import Image from 'next/image';
import { Skill, Wrapper } from '@/components';

import { getSectionAnimation } from '@/components/animations';
import { getId } from '@/lib/utils/helper';
import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsSection = {
    title: 'what i use',
    skills: {
      'frameworks': [
          // iconify icons: https://icon-sets.iconify.design/
          { name: 'react js', icon: '/react.svg' },
          { name: 'next js', icon: 'logos:nextjs-icon' },
          { name: 'node js', icon: '/node-js.png' },
          { name: 'vue js', icon: 'devicon:vuejs' },
          { name: '.net framework', icon: '/dotnet.svg' },
          { name: 'wordpress', icon: '/wordpress.svg' },
          { name: 'codeigniter', icon: '/codeigniter.svg' },
          { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
          { name: 'tensorflow', icon: 'logos:tensorflow' },
        ],
      'databases': [
        { name: 'firebase', icon: '/firebase.svg' },
        { name: 'prisma', icon: 'logos:prisma' },
        { name: 'mongodb', icon: 'devicon:mongodb' },
        { name: 'mssql', icon: '/sql.svg' },
      ],
      'languages':[
        {
          name: 'Typescript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'Javascript', icon: 'logos:javascript' },
        { name: 'C#', icon: 'devicon:csharp' },
        { name: 'C#', icon: 'devicon:cplusplus' },
        { name: 'PHP', icon: 'logos:php' },
        { name: 'Python', icon: 'logos:python' },
      ],
      'devops': [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'git', icon: 'devicon:git' },
        { name: 'docker', icon: '/docker.svg' },
        { name: 'Visual studio', icon: 'devicon:visualstudio' },
        { name: 'google cloud', icon: '/google_cloud-icon.svg' },
        { name: 'framer', icon: '/framer-motion.svg' },
      ]
    }
  }
  const { title, skills } = skillsSection;
  const { isDarkMode } = useTheme();

  return (
    <Wrapper id="skills" {...getSectionAnimation}>
      <h2 className="text-center heading-secondary">{title}</h2>
      <div className='flex flex-row flex-wrap gap-24'>
        {
          skills.frameworks && 
          <div className='flex flex-col gap-10 basis-full'>
            <h3 className='text-center heading-tertiary font-gotham-medium'>Frameworks</h3>
            <div className='flex flex-wrap justify-center gap-4'>
            {
              skills.frameworks.map(({name, icon})=>(
                <motion.div
                className='flex flex-col gap-2 justify-center items-center font-gotham-thin whitespace-nowrap min-w-[145px]'
                key={getId()}
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}>
                  {(icon[0] == '/') ? <Image className='hover:drop-shadow-xl' src={icon} alt={name} width="64" height="64" /> : <Icon className='hover:drop-shadow-xl' icon={icon} width="64" height="64" />}
                  <span className='capitalize'>{name}</span>
                </motion.div>
              ))
            }
            </div>
          </div>
        }
        {
          skills.databases && 
          <div className='flex flex-col gap-10 basis-[45%]'>
            <h3 className='text-center heading-tertiary font-gotham-medium'>Databases</h3>
            <div className='flex flex-wrap justify-center gap-8'>
            {
              skills.databases.map(({name, icon})=>(
                <motion.div
                className='flex flex-col gap-2 justify-center items-center font-gotham-thin whitespace-nowrap flex-1'
                key={getId()}
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}>
                  {(icon[0] == '/') ? <Image className='hover:drop-shadow-xl' src={icon} alt={name} width="64" height="64" /> : <Icon className='hover:drop-shadow-xl' icon={icon} width="64" height="64" />}
                  <span className='capitalize'>{name}</span>
                </motion.div>
              ))
            }
            </div>
          </div>
        }
        {
          skills.devops && 
          <div className='flex flex-col gap-10 basis-[45%]'>
            <h3 className='text-center heading-tertiary font-gotham-medium'>DevOps & Tools</h3>
            <div className='flex flex-wrap justify-center gap-8'>
            {
              skills.devops.map(({name, icon})=>(
                <motion.div
                className='flex flex-col gap-2 justify-center items-center font-gotham-thin whitespace-nowrap flex-1'
                key={getId()}
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}>
                  {(icon[0] == '/') ? <Image className='hover:drop-shadow-xl' src={icon} alt={name} width="64" height="64" /> : <Icon className='hover:drop-shadow-xl' icon={icon} width="64" height="64" />}
                  <span className='capitalize'>{name}</span>
                </motion.div>
              ))
            }
            </div>
          </div>
        }
        {
          skills.languages && 
          <div className='flex flex-col gap-10 basis-full'>
            <h3 className='text-center heading-tertiary font-gotham-medium'>Languages</h3>
            <div className='flex flex-wrap justify-center gap-8'>
            {
              skills.languages.map(({name, icon})=>(
                <motion.div
                className='flex flex-col gap-2 justify-center items-center font-gotham-thin whitespace-nowrap flex-1'
                key={getId()}
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}>
                  {(icon[0] == '/') ? <Image className='hover:drop-shadow-xl' src={icon} alt={name} width="64" height="64" /> : <Icon className='hover:drop-shadow-xl' icon={icon} width="64" height="64" />}
                  <span className='capitalize'>{name}</span>
                </motion.div>
              ))
            }
            </div>
          </div>
        }
      </div>
    </Wrapper>
  );
};

export default Skills;
