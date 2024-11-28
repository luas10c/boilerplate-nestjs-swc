import { defineConfig } from 'neostaged/config'

export default defineConfig({
  tasks: {
    '**/*.{js,ts}': ['eslint . --cache --concurrency=auto']
  }
})
