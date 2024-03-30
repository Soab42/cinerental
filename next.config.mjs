/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "image.tmdb.org",
      },
      {
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;
