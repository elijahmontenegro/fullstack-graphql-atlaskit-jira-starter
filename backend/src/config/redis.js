module.exports = {
  development: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
  production: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
};
