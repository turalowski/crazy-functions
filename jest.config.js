/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
};

module.exports = config;
