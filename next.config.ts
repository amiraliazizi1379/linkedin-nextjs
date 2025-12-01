import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: [
      "res.cloudinary.com",
      "encrypted-tbn2.gstatic.com",
      "miro.medium.com",
    ],
  },
};

export default nextConfig;
