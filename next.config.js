// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = {nextConfig}
module.exports = {
  images: {
    loader: "cloudinary",
    domains: [
        'res.cloudinary.com'
      ],    
  },
  assetPrefix: './',
  // basePath: '/docs',
  reactStrictMode: true,
};
