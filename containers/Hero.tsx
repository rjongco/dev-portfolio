'use client';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Decoder, SubHeading, TechCloud, Wrapper } from '@/components';

import { slideUp } from '@/components/animations';

import { motion } from 'framer-motion'; 
import Layer from './layer';

const Hero = () => {

  const iconSlugs = [
    'nextdotjs',
    'typescript',
    'reactos',
    'nodedotjs',
    'vuedotjs',
    'dotnet',
    'wordpress',
    'codeigniter',
    'tailwindcss',
    'mongodb',
    'prisma',
    'postgresql',
    'tensorflow',
    'figma',
    'framer',
    'docker',
    'html5',
    'css3',
    'javascript',
    'postcss',
    'sass',
    'php',
    'python',
    'pytorch',
    'cplusplus'
  ];

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;
  return (
    <Wrapper
      id="hero"
      className="flex flex-col justify-center items-start h-full min-h-screen gap-4 mt-12 xs:gap-7 xs:mt-0 font-gotham"
    >
      <Layer className='overflow-hidden'>
        <TechCloud
        iconSlugs={iconSlugs}
        ></TechCloud>
      </Layer>
      <h1 className='pl-[4px]'>
        <Decoder text="Rafael Jongco" delay={500} className="tracking-[0.4em] spacing uppercase text-[22px] h-[30px] text-light-1 " start={true}/>
      </h1>
      <div className="max-w-5xl text-4xl font-bold tracking-tighter md:text-7xl">
        <motion.h1
          variants={slideUp({ delay: getAnimationDelay(1) })}
          initial="hidden"
          animate="show"
          className="capitalize mb-2 leading-[1.1] text-8xl"
        >
          {`Developer`}
        </motion.h1>
        {/* <Typewriter
          variants={slideUp({ delay: getAnimationDelay(2) })}
          initial="hidden"
          animate="show"
          className="capitalize mb-2 leading-[1.1] text-8xl"
        ></Typewriter> */}
        <SubHeading></SubHeading>
   
      </div>

      {/* <motion.p
        variants={slideUp({ delay: getAnimationDelay(4) })}
        initial="hidden"
        animate="show"
        className="font-mono text-xs md:text-sm text-accent"
      >
        {`Currently available for freelance`}
      </motion.p>

        <Button
          size="lg"
          type="link"
          variants={slideUp({ delay: getAnimationDelay(5) })}
          initial="hidden"
          animate="show"
          href={`/${resumeFileName}`}
          className={`mt-5 xs:mt-8 md:mt-10 ${
            false ? 'md:hidden' : ''
          }`}
          sameTab={false}
        >
          {`see my resume`}
        </Button> */}
    </Wrapper>
  );
};

export default Hero;
