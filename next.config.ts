import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  typedRoutes: true,
  turbopack: {
    root: path.join(__dirname, ".."),
  },
  reactCompiler: true,
};

export default nextConfig;
