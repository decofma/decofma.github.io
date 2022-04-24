// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = {nextConfig}
module.exports = {
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/decofma/image/upload/v1650757818/",
    
  },
  assetPrefix: './',
  // basePath: '/docs',
  reactStrictMode: true,
};