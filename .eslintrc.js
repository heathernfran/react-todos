module.exports = {
  root: true,
  extends: "healthsparq/web",
  env: {
    node: true,
    jest: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.jsx', '.js']
          }
        }
      }
    }
  },
  rules: {
    "import/prefer-default-export": 0
  }
}