import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ className, children }: ButtonProps) => {
  return (
    <button
      className={` py-1 flex justify-between items-center gap-2 px-4 border-first_border_color rounded-lg border-2 text-md capitalize ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
