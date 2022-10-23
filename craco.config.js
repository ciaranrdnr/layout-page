const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@Components": path.resolve(__dirname, "src/components/"),
      "@Assets": path.resolve(__dirname, "src/assets/"),
      "@Helpers": path.resolve(__dirname, "src/helpers/"),
      "@Styles": path.resolve(__dirname, "src/styles/"),
    },
  },
   images: {
    domains: ['static-src.com', 'res.cloudinary.com'],
  },
};