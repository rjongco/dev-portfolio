'use client';
import { useTheme } from '@/lib/hooks/use-theme';

import { Skill, Wrapper } from '@/components';

import { getSectionAnimation } from '@/components/animations';
import { getId } from '@/lib/utils/helper';

const Skills = () => {
  const skillsSection = {
    title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'Frameworks & Languages',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building full-stack web applications using Next.js with TypeScript, TailwindCSS, ShadCN, and Prisma',
        'Developing responsive single-page applications using React.js',
        'Creating RESTful APIs using Express for backend development',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        {
          name: 'Typescript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'react js', icon: 'logos:react' },
        { name: 'next js', icon: 'logos:nextjs-icon' },
        
        { name: 'node js', icon: 'devicon:nodejs' },
        { name: 'vue js', icon: 'devicon:vuejs' },
        { name: '.net framework', icon: '/dotnet.svg' },
        { name: 'wordpress', icon: '/wordpress.svg' },
        { name: 'codeigniter', icon: '/codeigniter.svg' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'prisma', icon: 'logos:prisma' },
        { name: 'mongodb', icon: 'devicon:mongodb' },
        { name: 'mssql', icon: '/sql.svg' },
        { name: 'tensorflow', icon: 'logos:tensorflow' },
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'Javascript', icon: 'logos:javascript' },
        { name: 'C#', icon: 'devicon:csharp' },
        { name: 'C#', icon: 'devicon:cplusplus' },
        { name: 'PHP', icon: 'logos:php' },
        { name: 'Python', icon: 'logos:python' },
      ],
    },
    {
      id: getId(),
      title: 'Tools',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Experience in designing user-friendly interfaces with figma',
        'Experience in developing design systems and style guides',
        'Providing user-friendly design solutions',
      ],
      softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'git', icon: 'devicon:git' },
        { name: 'docker', icon: '/docker.svg' },
        { name: 'Visual studio', icon: 'devicon:visualstudio' },
        { name: 'google cloud platform', icon: '/google_cloud-icon.svg' },
        { name: 'framer', icon: '/framer-motion.svg' },
      ],
    },
  ],
  }
  const { title, skills } = skillsSection;
  const { isDarkMode } = useTheme();

  return (
    <Wrapper id="skills" {...getSectionAnimation}>
      <h2 className="text-center heading-secondary">{title}</h2>

      <div className="space-y-24">
        {skills.map(({ id, lottie, softwareSkills, points, title }) => (
          <Skill
            key={id}
            className="odd:lg:flex-row-reverse"
            lottie={lottie[isDarkMode ? 'dark' : 'light']}
            skills={softwareSkills}
            points={points}
            title={title}
            {...getSectionAnimation}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Skills;
