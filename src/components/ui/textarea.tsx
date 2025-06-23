
import * as React from "react";
export function Textarea({ placeholder, className = "" }: { placeholder: string; className?: string }) {
  return <textarea placeholder={placeholder} className={`w-full p-2 border rounded ${className}`} rows={4}></textarea>;
}
