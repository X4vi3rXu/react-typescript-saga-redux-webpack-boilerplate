const path = require('path')

module.exports = {
  // Source files
  src: path.resolve(__dirname, '..', 'src'),

  // template folder
  template: path.resolve(__dirname, '..', 'template'),

  // Production build files
  build: path.resolve(__dirname, '..', 'dist'),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, '..', 'public'),
}
