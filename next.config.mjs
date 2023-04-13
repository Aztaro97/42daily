import withTwin from "./withTwin.cjs";

!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
const config = withTwin({
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  experimental: {
    appDir: true,
  },
});
export default config;
