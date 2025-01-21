// packages
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from '@rollup/plugin-babel';
import path, { resolve } from 'path';

export default defineConfig({
  plugins: [react({
    jsxImportSource: '@emotion/react',
    babel: {
      plugins: ['@emotion/babel-plugin'],
    },
  })],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
  build: {
    rollupOptions: {
      plugins: [
        babel({
          babelHelpers: 'runtime',
          exclude: 'node_modules/**',
          plugins: ['@emotion/babel-plugin']
        }),
      ],
    },
  },
});