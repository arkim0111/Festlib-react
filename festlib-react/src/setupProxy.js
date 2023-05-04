const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/Festlib',
    createProxyMiddleware({
      target: 'http://localhost:9000',
      changeOrigin: true,
    })
  );
};