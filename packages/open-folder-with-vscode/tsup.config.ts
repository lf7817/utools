import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  entry: ['src/preload.ts'],
  splitting: false,
  sourcemap: false,
  clean: true,
  watch: !!options.watch,
  minify: false,
  platform: 'node',
}));