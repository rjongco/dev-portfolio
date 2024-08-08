import { cn } from "@/lib/utils";
import { motion } from "framer-motion"
import React from "react"

interface ContentComponentProps extends React.HTMLAttributes<HTMLParagraphElement> {}
const ContentComponent = React.forwardRef<HTMLParagraphElement, ContentComponentProps>(({children, className, ...props}, ref) => (
    <p className={cn(className)} {...props} ref={ref}>
        {children}
    </p>
));

const Content = motion(ContentComponent);

Content.displayName = "Content";

export default Content;