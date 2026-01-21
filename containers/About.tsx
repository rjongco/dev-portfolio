'use client';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/components/animations';

import { useEffect, useState } from 'react';
import { useDB } from '@/lib/hooks/use-db';

const About = () => {
  
  const data = useDB();
  const about = data.author
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation} className='lg:w-4/5 flex flex-col self-center'>
      <h2 className="heading-secondary">{`Who am I`}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row justify-between font-gotham-thin">
        <div className="space-y-4 basis-3/5">
          <p>
          Hi, My name is Rafael Jongco. I am a professional software developer based in Manila, Philippines, with a Bachelor’s degree in Information & Communication Technology and over 5 years of experience building scalable applications, websites, and services. My career is defined by a passion for bringing complex ideas to life through robust, high-performance systems.
          <br/><br/>
          Currently, I serve as an Independent Contractor for {' '}
          <Link
          className='font-bold'
          href='https://www.wradvisory.co/'
          >
          WR Advisory Group
          </Link>, facilitated through a strategic collaboration with {' '}
          <Link
          className='font-bold'
          href='https://www.katanatechworks.com'
          >
          Katana Techworks Inc.
          </Link>. My current work is at the intersection of data intelligence and artificial intelligence, with a specific focus on SOCINT Systems, AI Sentiment Analysis, and RAG Architecture.
          </p>
        </div>
        <AuthorImage src={about.profile} alt={about.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
