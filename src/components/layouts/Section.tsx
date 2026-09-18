import type { ReactNode } from "react";

export interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

// use for consistent vertical spacing
export function Section({children, id, className = ""} : SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      {children}
    </section>
  )
}
