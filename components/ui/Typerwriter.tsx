import { cn } from '@/lib/utils/helper';
import { HTMLMotionProps, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import React from 'react';

const Typewriter = React.forwardRef<HTMLHeadingElement, HTMLMotionProps<"h1">>(({className, ...props}, ref) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(60);
  const [itemSpeed, setItemSpeed] = useState(1000);

  const words = ["Designer", "Maintainer", "Prototyper"];

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), itemSpeed);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

    //   setTypingSpeed(isDeleting ? 30 : typingSpeed);
    };

    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, loopNum, words]);

  return (
    <motion.h1
        className={cn("tracking-normal", className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
    >
        <span className={cn('mr-[4px] text-light-1',className)}>+</span>
        {text}
        <motion.div
        className="border-r-2 border-black inline-block ml-1"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        >
            <span className='invisible'>|</span>
        </motion.div>
    </motion.h1>

  );
});

export default Typewriter;
