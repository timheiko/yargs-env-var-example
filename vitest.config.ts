import {defineConfig} from 'vitest/config';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  test: {
    include: ['./src/**/*.test.ts'],
  },
  plugins: [
    AutoImport({
      imports: ['vitest'],
      dts: true, // generate TypeScript declaration
    }),
  ],
});
