// src/types/global.d.ts
interface ENV {
  URL_WS: string;
  // Add other environment variables as needed
}

declare global {
  interface Window {
    __ENV__?: ENV;
  }
}

export {};
