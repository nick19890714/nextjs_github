module.exports = {
  reactStrictMode: true,
  // basePath: '',
  assetPrefix: './',
  // images: {
  //   // domains: ['nextjs_github'],
  //   loader: "imgix",
  //   path: "/",
  // },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/new': { page: '/new' },
      // '/edit': { page: '/edit' },
      // '/preview': { page: '/preview' }
    }
  }
}
