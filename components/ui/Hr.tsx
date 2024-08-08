import { cn } from "@/lib/utils";
import { motion } from "framer-motion"
import React from "react"

const HrComponent = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(({className, ...props}, ref) => (
    <span className={cn(`h-none inline-flex self-center border-2 border-solid border-red-500 mx-4`, className)} {...props} ref={ref}/>
));

const Hr = motion(HrComponent);

Hr.displayName = "Hr";

export default Hr;