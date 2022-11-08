/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  reactStrictMode: false,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      cleanupIDs: false,
                      convertShapeToPath: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
  // cache: false,
};

module.exports = nextConfig;
