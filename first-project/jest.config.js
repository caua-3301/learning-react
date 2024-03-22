/** @type {import('jest').Config} */
const config = {
  verbose: true,

  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};

module.exports = config;
