'use client'
import { cn } from "@/lib/utils/helper";
import { motion } from "framer-motion"
import React from "react"

interface HiddenComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    showOnFocus?: boolean|string,
    visible?: boolean|string
}

const HiddenComponent = React.forwardRef<HTMLDivElement, HiddenComponentProps>(({className, showOnFocus, children, visible, ...props}, ref) => (
    <div 
        className={cn(className,
            "null-hidden"
        )}
        data-hidden={!visible && !showOnFocus}
        data-show-on-focus={showOnFocus} 
        {...props} 
        ref={ref}>
        {children}
    </div>
));

const Hidden = motion(HiddenComponent);

Hidden.displayName = "Hidden";

export default Hidden;