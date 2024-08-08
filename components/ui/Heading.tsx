import { cn } from "@/lib/utils";
import { motion } from "framer-motion"
import React from "react"
interface HeadingComponentProps extends React.HTMLAttributes<HTMLHeadingElement> {}
const HeadingComponent = React.forwardRef<HTMLHeadingElement, HeadingComponentProps>(({children, className, ...props}, ref) => (
    <h1 className={cn(className)} {...props} ref={ref}>
        {children}
    </h1>
));

const Heading = motion(HeadingComponent);

Heading.displayName = "Heading";

export default Heading;