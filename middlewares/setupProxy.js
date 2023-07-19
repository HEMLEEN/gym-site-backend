const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://lifechangefitness-gym.onrender.com',
      changeOrigin: true,
    })
  );
};
