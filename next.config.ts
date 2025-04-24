/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",  // permet les images depuis Strapi
      },
      // À ajouter si tu utilises un serveur de production, par exemple
      // {
      //   protocol: "https",
      //   hostname: "ton-strapi.com",
      //   pathname: "/uploads/**",
      // },
    ],
  },
};

module.exports = nextConfig;
