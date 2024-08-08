import { cn } from "@/lib/utils";
import { motion } from "framer-motion"
import React from "react"

interface CanvasComponentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CanvasComponent = React.forwardRef<HTMLDivElement, CanvasComponentProps>(({children, className, ...props}, ref) => (
    <div className={cn(`min-w-full max-h-[90svh] h-[90svh] max-w-full`,className)} {...props} ref={ref}>
        {children}
    </div>
));

const Canvas = motion(CanvasComponent);

Canvas.displayName = "Canvas";

export default Canvas;