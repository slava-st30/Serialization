/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx', 'json'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
     '^.+\\.js?$': 'babel-jest',
  },
  moduleNameMapper: {},
  testMatch: [
    '<rootDir>/src/**/*.spec.ts',
    '<rootDir>/src/**/*.test.ts',
    '<rootDir>/src/**/*.spec.tsx',
    '<rootDir>/src/**/*.test.tsx',
  ],
};