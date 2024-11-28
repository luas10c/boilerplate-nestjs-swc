const hooks = {
  '**/*.{js,ts}': [
    'eslint . --ignore-pattern "node_modules" --ignore-pattern "dist" --config eslint.config.js'
  ]
}

export default hooks
