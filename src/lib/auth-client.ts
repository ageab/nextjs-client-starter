// lib/auth.ts
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:8000", // Backend API URL
  fetchOptions: {
    credentials: "same-origin",
    mode: "cors",
  }
});
