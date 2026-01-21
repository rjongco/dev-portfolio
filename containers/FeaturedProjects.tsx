'use client';
import { Wrapper } from '@/components';
import FeaturedProject from '@/components/ui/FeaturedProject';

import { getSectionAnimation } from '@/components/animations';
import { useDB } from '@/lib/hooks/use-db';
import { getId } from '@/lib/utils/helper';

const FeaturedProjects = () => {
  const data = useDB()
  const featuredProjectsSection = data.work_projects.map((row:any) => ({
    id: getId(),
    ...row
  }))
  return (
    <Wrapper id="projects" {...getSectionAnimation}>
      <div className="mb-20 space-y-3 text-center lg:text-left">
        <h2 className="heading-secondary !mb-0 capitalize">
          {`projects i've worked on`}
        </h2>

        <p className="font-mono lg:hidden text-accent capitalize text-xs lg:mb-2.5">
          featured projects
        </p>
      </div>

      <div className="space-y-10 md:space-y-16 lg:space-y-36">
        {featuredProjectsSection.map((project:any, i:number) => (
          <FeaturedProject
            key={project.id}
            align={i % 2 === 0 ? 'right' : 'left'}
            {...project}
            {...getSectionAnimation}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default FeaturedProjects;
