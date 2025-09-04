"use client";

import { ProvidersProps } from "@/types/provider";
import { QueryProvider } from "./queryProvider";

export function Providers({ children }: ProvidersProps) {
  return <QueryProvider>{children}</QueryProvider>;
}
