const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('../tsconfig.json');

const paths = compilerOptions.paths ? compilerOptions.paths : {};

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  rootDir: '../',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['jest-extended/all', '<rootDir>/test/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/cypress/',
  ],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(paths, { prefix: '<rootDir>/' }),
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      babelConfig: '<rootDir>/test/.babelrc',
    },
  },
};
