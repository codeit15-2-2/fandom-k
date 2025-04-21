import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@apis', replacement: path.resolve(__dirname, 'src/apis') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '@configs',
        replacement: path.resolve(__dirname, 'src/configs'),
      },
      {
        find: '@constants',
        replacement: path.resolve(__dirname, 'src/constants'),
      },
      {
        find: '@contexts',
        replacement: path.resolve(__dirname, 'src/contexts'),
      },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@layouts', replacement: path.resolve(__dirname, 'src/layouts') },
      { find: '@libs', replacement: path.resolve(__dirname, 'src/libs') },
      { find: '@mocks', replacement: path.resolve(__dirname, 'src/mocks') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@routes', replacement: path.resolve(__dirname, 'src/routes') },
      {
        find: '@services',
        replacement: path.resolve(__dirname, 'src/services'),
      },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
    ],
  },
});
