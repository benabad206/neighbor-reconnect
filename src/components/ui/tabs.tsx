
import * as React from "react";

export function Tabs({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function TabsList({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-2 mb-4">{children}</div>;
}

export function TabsTrigger({ value, children }: { value: string; children: React.ReactNode }) {
  return <button className="px-4 py-2 bg-gray-200 rounded">{children}</button>;
}

export function TabsContent({ value, children }: { value: string; children: React.ReactNode }) {
  return <div className="mb-4">{children}</div>;
}
