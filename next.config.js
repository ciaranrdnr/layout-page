// next.config.js
const path = require('path')
module.exports = {
   sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['static-src.com',"www.static-src.com" ,'res.cloudinary.com'],
     remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      
    ],
  },
}