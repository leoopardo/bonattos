// In Next.js, this file would be called: app/providers.jsx
"use client";

// We can not useState or useRef in a server component, which is why we are
// extracting this part out into it's own file with 'use client' on top
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              colorBgContainer: "#6e3d85",
              colorText: "#fff",
              colorPrimary: "#08eb8c",
            },
          },

          token: {
            colorPrimary: "#6e3d85",
            colorBgTextHover: "#6e3d85",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </QueryClientProvider>
  );
}
