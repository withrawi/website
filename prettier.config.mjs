/** @type {import('prettier').Config} */
const prettierConfig = {
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-astro'],
  overrides: [
    {
      files: ['*.astro'],
      options: {
        parser: 'astro',
      },
    },
  ],
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
  bracketSpacing: false,
};

export default prettierConfig;
