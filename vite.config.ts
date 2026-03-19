
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    host: true, // Conf. for Docker
    port: 5173,
  },
  plugins: [react()],
  test: {
    projects: [
      // Project Storybook tests
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook')
          })
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }]
          },
          setupFiles: ['.storybook/vitest.setup.ts']
        }
      },
      // Project components unit tests
      {
        extends: true,
        test: {
          name: 'unit',
          environment: 'jsdom',
          include: ['src/**/*.test.tsx'],
          setupFiles: ['src/setupTests.ts'],
          globals: true
        }
      },
      // Project regular ts functions unit tests
      {
        extends: true,
        test: {
          name: 'unit-node',
          environment: 'node',
          include: ['src/**/*.test.ts'],

          globals: true
        }
      }
    ]
  }
});