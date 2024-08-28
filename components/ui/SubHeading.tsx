'use client';

import { BoxReveal } from '@/components'; 
import { useEffect, useState } from 'react';

const Subheading = () => {

  const texts = ["Designer", "Maintainer", "Prototyper"];

  const durationPerText = 4; //sec
  const textExitDuration = 0.2; //sec
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
    }, durationPerText * 1000); // 2 seconds delay

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <BoxReveal 
    initial={{
        opacity:1
    }}
    animate={{
        opacity:0
    }}
    transition={{ delay: durationPerText - textExitDuration, duration: textExitDuration, ease: "easeIn"}}
    key={currentIndex} 
    className='capitalize mb-2 leading-[1.1] text-8x tracking-normal'
    >
    <span className={'mr-[4px] text-light-1'}>+</span>
    {currentText}
  </BoxReveal>
  );
};

export default Subheading;
