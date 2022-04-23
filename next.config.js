/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  loader: 'cloudinary',
  basePath: '/docs'
}

module.exports = {nextConfig}
// module.exports = {
//   images: {
//     loader: 'cloudinary',
//     path: '/',    
//   },
//   basePath: '/docs'
// }