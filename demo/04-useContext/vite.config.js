import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
    esbuild: {
        jsx: 'transform',
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
    },
    resolve: {
      alias: {
          '@': resolve(__dirname, './js'),
          '~': resolve(__dirname, './css'),
      },
    },
});
