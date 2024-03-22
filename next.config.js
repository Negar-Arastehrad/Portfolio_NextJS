/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.pdf$/,
        use: [
          {
            loader: 'CV-NegarArastehrad.pdf',
          } 
        ]
      })
      return config
    },
  }