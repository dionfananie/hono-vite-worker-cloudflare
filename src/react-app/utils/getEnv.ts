// src/utils/env.ts
export const getEnv = (key: string): string | null => {
  // Check if window and __ENV__ exist, with proper type checking
  const envValue =
    typeof window !== "undefined" && window.__ENV__
      ? window.__ENV__[key as keyof ENV]
      : undefined;

  // Try Cloudflare env first, fall back to Vite env
  return envValue || (import.meta.env[`VITE_${key}`] as string) || null;
};
