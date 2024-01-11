import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const List = ({ className, children, ...props }: DivProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 m-2 gap-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default List;
