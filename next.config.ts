import type { NextConfig } from "next";

// next.config.js
const isGithubPages = process.env.NODE_ENV === 'production';
const repoName = 'your-repo-name'; // 🔁 Replace with your actual repo name

module.exports = {
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
  basePath: isGithubPages ? `/${repoName}` : '',
  trailingSlash: true,
};

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
