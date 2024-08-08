import { cn } from "@/lib/utils";
import { motion } from "framer-motion"
import React from "react"

interface ContainerComponentProps extends React.HTMLAttributes<HTMLDivElement> {}

const ContainerComponent = React.forwardRef<HTMLDivElement, ContainerComponentProps>(({children, ...props}, ref) => (
    <div {...props} ref={ref}>
        {children}
    </div>
));

const Container = motion(ContainerComponent);

Container.displayName = "Container";

export default Container;