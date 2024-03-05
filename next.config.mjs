/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "seeklogo.com",
      },
      {
        hostname: "logodetimes.com",
      },
      {
        hostname: "www.logotypes101.com",
      },
    ],
  },
};

export default nextConfig;
