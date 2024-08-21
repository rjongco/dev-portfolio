'use client';

import { BoxReveal } from '@/components'; 
import { useEffect, useState } from 'react';

const Subheading = () => {

  const texts = ["Designer", "Maintainer", "Prototyper"];

  // State to manage the current index and the current text
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>(texts[0]);

  useEffect(() => {
    // Update the text and index every 2 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % texts.length;
        setCurrentText(texts[nextIndex]);
        return nextIndex;
      });
    }, 3000); // 2 seconds delay

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <BoxReveal 
    key={currentIndex} 
    className='capitalize mb-2 leading-[1.1] text-8x tracking-normal'
    >
    <span className={'mr-[4px] text-light-1'}>+</span>
    {currentText}
  </BoxReveal>
  );
};

export default Subheading;
