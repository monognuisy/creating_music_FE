"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { LoginProvider } from "./LoginContext";
interface Props {
  children: ReactNode;
}

export default function Providers({ children }: Props) {
  // 여기 최상위 로그인 스테이터스
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <LoginProvider>{children}</LoginProvider>
    </QueryClientProvider>
  );
}
