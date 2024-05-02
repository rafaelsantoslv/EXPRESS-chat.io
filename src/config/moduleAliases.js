const path = require('path')

module.exports = {
  '@controllers': path.join(__dirname, '..', 'controllers'),
  '@routes': path.join(__dirname, '..', 'routes'),
  '@models': path.join(__dirname, '..', 'models'),
  '@middleware': path.join(__dirname, '..', 'middleware'),
  '@services': path.join(__dirname, '..', 'services')
}

