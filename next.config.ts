import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: ["res.cloudinary.com" , 'encrypted-tbn2.gstatic.com'],
  },
};

export default nextConfig;
