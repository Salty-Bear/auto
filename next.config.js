/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Only on the client side (browser)
    if (!isServer) {
      // Make Node.js modules empty when imported in client-side code
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        child_process: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  // Add "use client" directive to story generator page
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
