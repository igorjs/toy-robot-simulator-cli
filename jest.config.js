/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */
module.exports = {
  preset: 'ts-jest',
  coverageDirectory: '.coverage',
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  collectCoverageFrom: ['src/**/*.{ts,js}', '!src/**/*.(test|spec).{ts,js}', '!src/cli/**', '!**/node_modules/**'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/*.(test|spec).(ts|js)'],
  testEnvironment: 'node',
  // setupFiles: ['./jest.setup.js'],
}
