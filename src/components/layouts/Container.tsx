import type { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

// use for consistent horizontal spacing
export function Container({children, className = ""} : ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  ) 
}
