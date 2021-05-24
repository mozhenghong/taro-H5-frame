module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    BASE_URL: JSON.stringify('http://clinic.dev.aishinye.com'),
    BASE_PREFIX: JSON.stringify('/api')
  },
  mini: {},
  h5: {
    esnextModules: ['taro-ui']
  }
}
