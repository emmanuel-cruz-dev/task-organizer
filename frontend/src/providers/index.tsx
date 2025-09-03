"use client";

import { ProvidersProps } from "@/types/provider";
import { QueryProvider } from "./query-provider";

export function Providers({ children }: ProvidersProps) {
  return <QueryProvider>{children}</QueryProvider>;
}
