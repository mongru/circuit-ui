module.exports = require('@sumup/foundry/eslint')(
  {
    language: 'TypeScript',
    environments: ['Browser'],
    frameworks: ['React', 'Emotion', 'Jest'],
    openSource: true
  },
  {
    rules: {
      'arrow-parens': 'off'
    },
    parserOptions: {
      project: ['./tsconfig.eslint.json']
    },
    overrides: [
      {
        files: [
          '**/__testfixtures__/**/*.input.*',
          '**/__testfixtures__/**/*.output.*'
        ],
        rules: {
          'import/no-unresolved': 'off',
          'notice/notice': 'off',
          '@typescript-eslint/no-unused-vars': 'off'
        }
      },
      {
        files: ['**/migrate/*.ts'],
        rules: {
          'consistent-return': 'off'
        }
      }
    ]
  }
);
