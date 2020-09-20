module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  test: /\.md$/,
  use: [
    { loader: 'html-loader' },
    { loader: 'markdown-loader', options: {} }
  ]

}
