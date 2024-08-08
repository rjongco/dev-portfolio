import { cn } from "@/lib/utils";
import { motion } from "framer-motion"
import React from "react"

interface LayerComponentProps extends React.HTMLAttributes<HTMLDivElement> {}

const LayerComponent = React.forwardRef<HTMLDivElement, LayerComponentProps>(({children, className, ...props}, ref) => (
    <div className={cn(`absolute top-0 left-0 min-w-full max-w-full h-full w-full min-w-full max-w-full z-0`, className)} {...props} ref={ref}>
        {children}
    </div>
));

const Layer = motion(LayerComponent);

Layer.displayName = "Layer";

export default Layer;