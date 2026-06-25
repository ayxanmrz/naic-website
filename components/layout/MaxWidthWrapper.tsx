import { ReactNode } from "react";

interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

export default function MaxWidthWrapper({
  className = "",
  children,
}: MaxWidthWrapperProps) {
  return (
    <div
      className={`mx-auto w-full max-w-screen-xl px-4 md:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
