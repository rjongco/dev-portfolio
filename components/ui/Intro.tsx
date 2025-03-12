'use client' 
import Layer from "@/containers/layer";
import { cn } from "@/lib/utils/helper";
import { motion } from "framer-motion"
import React, { useState } from "react"
import { fadeOut } from "../animations";
import { useDB } from "@/lib/hooks/use-db";

interface IntroComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    state: string
}

const Intro = React.forwardRef<HTMLDivElement, IntroComponentProps>(({children, className, state, ...props}, ref) => 
{   
    const data = useDB()
    const author = data.author
    const [destroyed, setdestroyed] = useState<boolean>(false)
    const trigger = (state === 'entered')
    const delay = 1
    const duration = 1.5
    const handleAnimationComplete = () => {
        setdestroyed(true)
    };
    return destroyed ? null : (
    <Layer 
    variants={trigger ? fadeOut(duration+delay-1, 1.75) : undefined}
    initial={trigger ? "show" : false}
    animate={trigger ? "hidden" : false}
    onAnimationComplete={handleAnimationComplete}
    className={cn(`!z-[9999] flex items-center justify-center bg-bg font-sans text-4xl !tracking-wider fixed`, className)}>
            <motion.span
              variants={trigger ? fadeOut(delay-0.25, duration) : undefined}
              initial={trigger ? "show" : false}
              animate={trigger ? "hidden" : false}
              className={cn(`font-normal`)}
            >
              {author.name}
            </motion.span>
            &nbsp;
            <motion.span
              variants={trigger ? fadeOut(delay, duration) : undefined}
              initial={trigger ? "show" : false}
              animate={trigger ? "hidden" : false}
              className={cn(`font-thin`)}
            >
              Portfolio
            </motion.span>
    </Layer>)
}
);

export default Intro;