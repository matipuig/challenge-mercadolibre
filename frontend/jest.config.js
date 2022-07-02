/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  coverageDirectory: 'docs/tests/unitCoverage',
  moduleNameMapper: {
    '~/(.*)$': '<rootDir>/src/$1',
    '^lodash-es$': 'lodash',
    '^.+\\.(css|less|scss)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react-jsx',
      },
    },
  },
  setupFiles: ['./tests/environment.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
};
