import React from "react";
import {motion} from "framer-motion";
import { cn } from "@/lib/utils";

interface NavComponentProps extends React.HTMLAttributes<HTMLDivElement>  {
    children? : React.ReactNode;
}

const NavComponent = React.forwardRef<HTMLDivElement, NavComponentProps>(({ className , ...rest }, ref) => ( 
    <div {...rest} className={cn("mx-2 max-w-screen px-6 py-3 border-none z-50 backdrop-opacity-100",className)} ref={ref}>
      <div className="flex items-center justify-between text-blue-gray-900">
        <a
          href="#"
          className="mr-4 cursor-pointer py-1.5"
        >
          <h6>Material Tailwind</h6>
        </a>
        <div>
            <ul className="my-2 flex mb-0 mt-0 flex-row items-center gap-6">
                <li
                    color="blue-gray"
                    className="p-1 font-medium"
                >
                    <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Pages
                    </a>
                </li>
                <li
                    color="blue-gray"
                    className="p-1 font-medium"
                >
                    <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Account
                    </a>
                </li>
                <li
                    color="blue-gray"
                    className="p-1 font-medium"
                >
                    <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Blocks
                    </a>
                </li>
                <li
                    color="blue-gray"
                    className="p-1 font-medium"
                >
                    <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
                    Docs
                    </a>
                </li>
            </ul>
        </div>
      </div>
    </div>
));
 
const Nav = motion(NavComponent);

Nav.displayName = "Nav";

export default Nav;