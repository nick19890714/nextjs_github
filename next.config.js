module.exports = {
  reactStrictMode: true,
  basePath: '/nextjs_github',
  assetPrefix: '/nextjs_github',
  // images: {
  //   // domains: ['nextjs_github'],
  //   loader: "imgix",
  //   path: "",
  // },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/new': { page: '/new' },
      '/api/hello': { page: '/api/hello' },
      // '/preview': { page: '/preview' }
    }
  }
}
