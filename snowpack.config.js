/** @type {import("snowpack").SnowpackUserConfig } */

const port = process.env.PORT || 4343;
const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mount: {
    'public': { url: '/', static: true },
    'src': { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port,
  },
  buildOptions: {
    /* ... */
  },
};
