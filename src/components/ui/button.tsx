
import * as React from "react";
export function Button({ children, className = "", variant = "primary" }: { children: React.ReactNode; className?: string; variant?: string }) {
  const baseStyle = variant === "secondary" ? "bg-gray-200 text-black" : "bg-blue-600 text-white";
  return <button className={`px-4 py-2 rounded ${baseStyle} ${className}`}>{children}</button>;
}
