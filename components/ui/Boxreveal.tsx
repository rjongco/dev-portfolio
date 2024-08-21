"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils/helper";

interface BoxRevealProps{
  children: React.ReactNode;
  className: string;
  width?: "fit-content" | "100%";
}

export const rawBoxReveal = ({
  children,
  className,
  width = "fit-content",  
}: BoxRevealProps) => { 
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={cn(className)}>
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
};

const BoxReveal = motion(rawBoxReveal);

export default BoxReveal;
