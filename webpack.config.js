module.exports = {
  module: {
    rules: [
      // This will apply to both plain `.scss` files
      // and `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
