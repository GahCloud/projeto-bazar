/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Cloudflare Pages static hosting (no Node.js server at runtime)
  output: "export",
  images: {
    // next/image optimization needs a server; disable for static export
    unoptimized: true,
  },
  // Static hosts generally behave better with trailing slashes
  trailingSlash: true,
};

export default nextConfig;
