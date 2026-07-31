import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  typedRoutes: true, // doesn't work yet
  turbopack: {
    root: path.join(import.meta.dirname, ".."),
  },
  reactCompiler: true,
};

export default nextConfig;
