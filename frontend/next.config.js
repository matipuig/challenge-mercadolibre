const path = require('path');

const BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_BASE_URL;
if (!BASE_URL) {
  throw new Error(`Environment variable NEXT_PUBLIC_FRONTEND_BASE_URL is not set!`);
}
const frontendURL = new URL(BASE_URL);
const urlBasePath = frontendURL.pathname;
const basePath = urlBasePath !== '/' ? urlBasePath : '';

module.exports = {
  basePath,
  reactStrictMode: true,
  images: {
    domains: ['http2.mlstatic.com'],
    path: `${basePath}/_next/image`,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'scss'), path.join(__dirname, 'node_modules')],
  },
};
