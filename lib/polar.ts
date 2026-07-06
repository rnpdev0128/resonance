import { Polar } from "@polar-sh/sdk";

const accessToken = process.env.POLAR_ACCESS_TOKEN;
const server = process.env.POLAR_SERVER as "production" | "sandbox" | undefined;

if (!accessToken) {
  throw new Error("Missing POLAR_ACCESS_TOKEN environment variable");
}

export const polar = new Polar({
  accessToken,
  server,
});