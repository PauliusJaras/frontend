/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
      },
      experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
      },
      output: 'export',
}

  

module.exports = nextConfig
