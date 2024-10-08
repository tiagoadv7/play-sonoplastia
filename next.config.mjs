/** @type {import('next').NextConfig} */

import withReactSvg from 'next-react-svg';
import path from 'path';

// Definindo a configuração Next.js
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

// Exportando a configuração com ESM
export default withReactSvg({
  include: path.resolve('./public/static/logo/logo.svg'),
  webpack(config, options) {
    return config;
  },
});