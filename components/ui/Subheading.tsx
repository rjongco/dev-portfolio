import { cn } from "@/lib/utils";
import { motion } from "framer-motion"
import React from "react"

interface SubheadingComponentProps extends React.HTMLAttributes<HTMLHeadingElement>{}

const SubheadingComponent = React.forwardRef<HTMLHeadingElement, SubheadingComponentProps>(({children, className, ...props}, ref) => (
    <h2 className={cn(className)} {...props} ref={ref}>
        {children}
    </h2>
));

const Subheading = motion(SubheadingComponent);

Subheading.displayName = "Subheading";

export default Subheading;