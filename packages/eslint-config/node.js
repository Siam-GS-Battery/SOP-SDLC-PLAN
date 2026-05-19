/**
 * Node.js preset — extends base + node env
 * Use for Express / backend TypeScript projects
 */
module.exports = {
  extends: ['./index.js'],
  env: {
    node: true,
    es2022: true,
  },
  rules: {
    'no-process-exit': 'error',
  },
};
