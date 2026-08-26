/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Sortie autonome (server.js + le minimum de node_modules) : c'est ce que
  // le Dockerfile embarque dans son image finale. Conditionnee a DOCKER_BUILD
  // pour ne rien changer a un deploiement Vercel, qui gere sa propre sortie.
  output: process.env.DOCKER_BUILD ? "standalone" : undefined,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "opengraph.githubassets.com" }
    ]
  }
};

export default nextConfig;
