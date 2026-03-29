/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    imageSizes: [256, 384, 640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
