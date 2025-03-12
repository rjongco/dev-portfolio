'use client';
import { TabList, Timeline } from '@/components';
import Image from 'next/image';
import { getSectionAnimation } from '@/components/animations';
import { motion } from 'framer-motion';
import { useDB } from '@/lib/hooks/use-db';
import { getId } from '@/lib/utils/helper';

const Experience = () => {
  const data = useDB()
  const exp = data.experience.map((row: any) => {
    return {
      title: row.title,
      content: (
        <div key={`exp-section-${row.order}`}>
          {
            row.desc.map((d: string) => (<p dangerouslySetInnerHTML={{ __html: d }} key={getId()} className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4"></p>))
          }
          <div className="">
            <Image
              src={row.image}
              alt={row.title}
              width={1024}
              height={1024}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      )
    }
  })
  let experience = [
    {
      title: "Present",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Currently working as a Software Developer at <strong>Katana Techworks Inc.</strong> I've been with the team for over two and a half years now, having joined in June 2022.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          During my time here, I have handled around 4 projects in total: 2 are already in production, 1 is currently in a closed demo phase, and 1 is ongoing in development. Our work setup is mostly remote, with occasional office meetups in a month.
          </p>
          <div className="">
            <Image
              src="/katana.gif"
              alt="katana techworks com"
              width={1024}
              height={1024}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "June 2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          <strong>Empire East Land Holdings Inc.</strong>, a real estate company, is where I worked after finishing my degree. I was hired in February 2020 and worked with them for over two years as a System Developer.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
          My role here is to maintain existing applications and develop new ones. Most of the time, the apps I work on are related to reports, directories, and CRMs.
          </p>
          <div className="">
          <Image
              src="/eelhiexp.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "December 2019",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          I worked at <strong>Synthesis</strong> as an undergraduate intern. My role as a developer was to maintain and update the company's official website and address issues related to their VoIP application. I was hired in May 2019 and worked with them for over six months as part of the internship contract.
          </p>
          <div className="">
          <Image
              src="/synthesis.jpg"
              alt="startup template"
              width={1024}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <motion.section
      id="experience"
      className="max-w-3xl py-32 mx-auto"
      {...getSectionAnimation}
    >
      <h2 className="heading-secondary">{`where i've worked`}</h2>
      <Timeline data={exp} />
    </motion.section>
  );
};

export default Experience;
