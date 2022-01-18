module.exports = {
  reactStrictMode: true,
  // basePath: '/',
  assetPrefix: '.',
  images: {
    domains: ['nextjs_github'],
    loader: "imgix",
    path: "",
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      // '/normal': { page: '/normal' },
      // '/edit': { page: '/edit' },
      // '/preview': { page: '/preview' }
    }
  }
}
