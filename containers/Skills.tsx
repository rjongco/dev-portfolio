'use client';
import Image from 'next/image';
import { Skill, Wrapper } from '@/components';

import { getSectionAnimation } from '@/components/animations';
import { getId } from '@/lib/utils/helper';
import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';
import { useDB } from '@/lib/hooks/use-db';

const Skills = () => {
  // iconify icons: https://icon-sets.iconify.design/
  const data = useDB();
  
  const skills = {
    'frameworks': data.frameworks,
    'databases': data.databases,
    'languages':data.languages,
    'devops': data.tools
  }

  return (
    <Wrapper id="skills" {...getSectionAnimation}>
      <h2 className="text-center heading-secondary">{'what i use'}</h2>
      <div className='flex flex-col xl:flex-row flex-wrap gap-24'>
        {
          skills.frameworks && 
          <div className='flex flex-col gap-10 basis-full'>
            <h3 className='text-center heading-tertiary font-neue-medium'>Frameworks</h3>
            <div className='flex flex-wrap justify-center gap-4'>
            {
              skills.frameworks.map(({name, icon}: {name: string, icon: string})=>(
                <motion.div
                className='flex flex-col gap-2 justify-center items-center font-neue-thin whitespace-nowrap min-w-[145px]'
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
            <h3 className='text-center heading-tertiary font-neue-medium'>Databases</h3>
            <div className='flex flex-wrap justify-center gap-8'>
            {
              skills.databases.map(({name, icon}: {name: string, icon: string})=>(
                <motion.div
                className='flex flex-col gap-2 justify-center items-center font-neue-thin whitespace-nowrap flex-1'
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
            <h3 className='text-center heading-tertiary font-neue-medium'>DevOps & Tools</h3>
            <div className='flex flex-wrap justify-center gap-8'>
            {
              skills.devops.map(({name, icon}: {name: string, icon: string})=>(
                <motion.div
                className='flex flex-col gap-2 justify-center items-center font-neue-thin whitespace-nowrap flex-1'
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
            <h3 className='text-center heading-tertiary font-neue-medium'>Languages</h3>
            <div className='flex flex-wrap justify-center gap-8'>
            {
              skills.languages.map(({name, icon}: {name: string, icon: string})=>(
                <motion.div
                className='flex flex-col gap-2 justify-center items-center font-neue-thin whitespace-nowrap flex-1'
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
