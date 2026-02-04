/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    // Required for static export sites
    unoptimized: true,
    // Replaced deprecated 'domains' with the modern remotePatterns
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        port: '',
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;