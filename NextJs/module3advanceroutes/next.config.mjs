/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Ensure Turbopack uses this project folder as the workspace root
    root: process.cwd(),
  },
};

export default nextConfig;
