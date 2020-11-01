/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */
module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  coverageDirectory: '.coverage',
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  // collectCoverageFrom: ['src/**/*.{ts,js}', '!src/**/*.(test|spec).{ts,js}', '!src/cli/**', '!**/node_modules/**'],
  collectCoverageFrom: [
    'src/**/*.{ts,js}',
    '!src/index.{ts,js}',
    '!src/typings/**/*.{ts,js}',
    '!src/**/*.(test|spec).{ts,js}',
    '!**/node_modules/**',
  ],
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/*.(test|spec).(ts|js)'],
  testEnvironment: 'node',
}
