import { ReactNode } from "react";

interface CanSeeProps {
  children: ReactNode;
}

export function CanSee({ children }: CanSeeProps) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <>{children}</>;
  }
  return null;
}
