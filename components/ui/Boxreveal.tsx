"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils/helper";
import React from "react";

interface BoxRevealProps extends React.HTMLAttributes<HTMLDivElement>{
  children: React.ReactNode;
  className: string;
}

export const rawBoxReveal = React.forwardRef<HTMLDivElement, BoxRevealProps>(({children, className, ...props}, ref) => { 
  const slideControls = useAnimation();

  useEffect(() => {
    const startAnimation = async () => {
        await slideControls.mount();
        await slideControls.start("in");
        await slideControls.mount();
        await slideControls.start("mid");
        await slideControls.mount();
        await slideControls.start("out");
    };
    
    startAnimation();
  }, [slideControls]);

  return (
    <div ref={ref} className={cn('relative w-fit overflow-hidden',className)} {...props}>
      <motion.div
        variants={{
          in: { visibility: 'hidden' },
          mid: { visibility: 'hidden' },
          out: { visibility: 'visible'}
        }}
        initial="in"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn"}}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          in: {  x: "-100%" },
          mid: { x: "0%" },
          out: {x: "100%"}
        }}
        initial="in"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: "#5046e6",
        }}
      />
    </div>
  );
});
const BoxReveal = motion(rawBoxReveal);

export default BoxReveal;
