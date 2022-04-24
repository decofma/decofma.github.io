// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = {nextConfig}
module.exports = {
  images: {
    loader: "cloudinary",
    path: "res.cloudinary.com/decofma/",
    
  },
  assetPrefix: './',
  // basePath: '/docs',
  reactStrictMode: true,
};
