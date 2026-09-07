import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — this site has no server needs, and the Astro build it
  // replaces shipped plain HTML too.
  output: "export",
  // AGENTS.md here is hand-written; don't let the build regenerate it.
  agentRules: false,
};

export default nextConfig;
