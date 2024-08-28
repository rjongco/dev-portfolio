'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/components/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation} className='lg:w-4/5 flex flex-col self-center'>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row justify-between font-gotham-thin">
        <div className="space-y-4 basis-3/5">
          <p>
          Hi, my name is Rafael Jongco, and I’m a professional software developer based in Manila, Philippines. I hold a Bachelor’s degree in Information & Communication Technology. With over 4 years of experience, I’ve worked with various businesses and used a range of languages and frameworks, and has a solid experience in developing diverse applications, websites, systems, and services, making me confident at my work. 
          <br/><br/>
          Currently, my work is focused on web development. I am presently employed at {' '}
          <Link
          href='https://www.katanatechworks.com'
          >
          @Katana
          </Link> as a lead developer for an overseas client. I am always excited about bringing new ideas to life, so if you have one, feel free to reach out!
          </p>
        </div>
        <AuthorImage src={'/profile.jpg'} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
