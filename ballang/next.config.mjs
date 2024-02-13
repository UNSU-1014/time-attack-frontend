/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app",
      },
    ],
  },
};

export default nextConfig;
