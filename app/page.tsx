'use client'
import Canvas from "@/components/ui/Canvas";
import Container from "@/components/ui/Container";
import Content from "@/components/ui/Content";
import Decoder from "@/components/ui/Decoder";
import Heading from "@/components/ui/Heading";
import Hr from "@/components/ui/Hr";
import Layer from "@/components/ui/Layer";
import Subheading from "@/components/ui/Subheading";
import Image from "next/image";

export default function Home() {
  const Frameworks = [
    {
      title: 'Next.js',
      icon: 'nextjs-icon.svg'
    },
    {
      title: 'Typescript',
      icon: 'typescript.png'
    },
    {
      title: 'React',
      icon: 'react.svg'
    },
    {
      title: 'Vue.js',
      icon: 'vue.svg'
    },
    {
      title: 'Node.js',
      icon: 'node-js.png'
    },
    {
      title: 'Tailwindcss',
      icon: 'tailwindcss.svg'
    },
    {
      title: 'Framer',
      icon: 'framer-motion.svg'
    },
    {
      title: 'Wordpress',
      icon: 'wordpress.svg'
    },
    {
      title: 'CodeIgniter',
      icon: 'codeigniter.svg'
    },
    {
      title: '.Net framework',
      icon: 'dotnet.svg'
    }
  ]

  const Tools = [
    {
      title: 'Docker',
      icon: 'docker.svg'
    },
    {
      title: 'MongoDB',
      icon: 'MongoDB_Logomark_ForestGreen.svg'
    },
    {
      title: 'Firebase',
      icon: 'firebase.svg'
    },
    {
      title: 'Gitlab',
      icon: 'gitlab.svg'
    },
    {
      title: 'Github',
      icon: 'github-142.svg'
    },
    {
      title: 'SQL Server',
      icon: 'sql.svg'
    },
    {
      title: 'Google Cloud',
      icon: 'google_cloud-icon.svg'
    }
  ]
  return (
    <main className="flex relative min-h-screen min-w-screen flex-col items-center p-2 justify-start">
      <Layer className="flex justify-center items-center bg-gradient-caramel">
      </Layer>
      {/* Header */}
      <Container className="flex flex-col justify-start items-center h-auto z-10 p-6"
        initial={{
          x:20,
          opacity: 0
        }}
        animate={{
          x:0,
          opacity: 1
        }}
        transition={{ duration: 0.4 }} 
      >
        <Canvas className="flex flex-col justify-center items-start">
          <Decoder text={'Rafael jongco'} delay={500} className="tracking-[0.8em] spacing uppercase text-base h-[30px]" start={true}/>
          <Heading className="text-5xl font-bold">Full Stack Developer</Heading>
          <Heading className="text-5xl font-bold">Next.js</Heading>
          <Content className="text-md mt-2 font-medium">I'm a professional full-stack developer specializing in creating high-performing and scalable applications.</Content>
        </Canvas>
        <Container className="flex flex-col justify-start items-start w-full h-auto gap-4">
          <Subheading className="text-3xl font-bold flex">
            About Me
            <Hr className="w-20"/>
          </Subheading>
          <Container className="flex flex-col gap-9 items-start justify-start">
            <Container className="flex flex-col gap-3">
              <Content>Hello, I'm Rafael Jongco, a Software Developer based in Manila, Philippines, currently working at Katana. My interest in programming began in high school and became a natural skill during college. </Content>
              <Content>After graduating, I quickly adapted to developing industrial-grade applications. My first project was a Management Information System, which taught me optimal and scalable coding, and deepened my understanding of databases and ORMs.</Content>
              <Content>Later, I focused on web applications, honing my UI/UX design skills and adopting a mobile-first approach to ensure responsive and well-designed websites. This experience in both backend and frontend development makes me confident in delivering high-quality products that exceed client expectations.</Content>
              <Content>I am always excited about new ideas and projects. If you have an interesting concept or need a dedicated developer, feel free to drop me a line.</Content>
            </Container>
            <Image
            className="self-center"
            src={'/profile.jpg'}
            alt={'...'}
            priority={true}
            width={500}
            height={50}
            ></Image>
          </Container>
        </Container>
        <Container className="flex flex-col my-48 items-center gap-3">
          <Subheading className="text-3xl font-bold flex">
            My Frameworks and Tools
            <Hr className="w-20"/>
          </Subheading>
          <Container>
            <Content>
              There are several frameworks and tools that I can use with proficiency.
            </Content>
          </Container>
        </Container>
        <Container className="flex flex-col my-48 items-center gap-4">
          <Subheading className="text-3xl font-bold flex">
            My Experience
            <Hr className="w-20"/>
          </Subheading>
        </Container>
      </Container>
      
    
    </main>
  );
}
