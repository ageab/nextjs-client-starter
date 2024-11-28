import { betterAuth } from "better-auth";

export const auth = betterAuth({
  baseURL: 'http://localhost:4001', 
  emailAndPassword: {
    enabled: true,
  },
});
