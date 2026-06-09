/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: ["192.168.1.14"],
};

export default nextConfig;