import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'pbs.twimg.com', '0205-202-158-77-58.ngrok-free.app', 'cdn.ngrok.com'],
  },
};

export default nextConfig;
