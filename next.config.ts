import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: ["res.cloudinary.com" , "googleusercontent.com"],
  },
};

export default nextConfig;
