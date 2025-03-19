import withRspack from "@next/plugin-rspack";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default withRspack(nextConfig);
