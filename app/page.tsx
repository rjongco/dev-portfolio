'use client'
import { Transition } from '@/components/Transition';
import {
  About,
  Contact,
  Experience,
  FeaturedProjects,
  Hero,
  Layout,
  Projects,
  Skills,
} from '@/containers';

import type { NextPage } from 'next';

/**
 * TODO: Create separate page for all the projects with filters (vercel | netlify | github api for automation)
 * TODO: Switch to next13 app dir feature, when lottie files start working in app dir
 * TODO: Try test cases
 */

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <FeaturedProjects />
        <Projects />
        <Contact />
      </Layout>
    </>
    // <Transition in timeout={0}>
    //     {({ visible, status }:{visible:boolean, status:string, nodeRef:React.MutableRefObject<HTMLElement | null>}) => 
    //       (
    //       <>
    //         <Layout>
    //           <Hero />
    //           <About />
    //           <Skills />
    //           <Experience />
    //           <FeaturedProjects />
    //           <Projects />
    //           <Contact />
    //         </Layout>
    //       </>
    //       )
    //     }
    // </Transition>
  );
};

export default Home;
