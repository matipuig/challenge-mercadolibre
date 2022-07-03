import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    env: {
      URLS: {
        MAIN: '',
        LIST_ITEMS: '/items',
        ITEM: '/items/:id',
      },
      MOCKS: {
        ITEM_ID: 'MLA933038257',
        CATEGORY_ID: 'MLA1073',
      },
    },
  },
  video: false,
});
