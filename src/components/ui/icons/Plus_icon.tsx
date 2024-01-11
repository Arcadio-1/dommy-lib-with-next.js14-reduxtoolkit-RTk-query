import React from "react";
import { cn } from "@/lib/utils";

import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const Plus_icon = ({ className }: Props) => {
  return (
    <svg className={cn(" h-5 w-5 fill-first", className)} viewBox="0 0 32 32">
      <path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z" />
    </svg>
  );
};

export default Plus_icon;
