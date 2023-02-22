module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'xo',
        'xo-typescript',
        'plugin:i18next/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint', 'i18next', 'unused-imports'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'max-len': ['error', { code: 120, ignoreComments: true }],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'react/display-name': 'off',
                '@typescript-eslint/consistent-type-definitions': [
                    'error',
                    'interface',
                ],
                '@typescript-eslint/no-unused-vars': 'off',
                'unused-imports/no-unused-imports': 'error',
                'unused-imports/no-unused-vars': [
                    'error',
                    {
                        vars: 'all',
                        varsIgnorePattern: '^_',
                        args: 'after-used',
                        argsIgnorePattern: '^_',
                    },
                ],
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'interface',
                        format: ['PascalCase'],
                        custom: {
                            regex: '^I[A-Z]',
                            match: true,
                        },
                    },
                    {
                        selector: 'typeAlias',
                        format: ['PascalCase'],
                        custom: {
                            regex: '^T[A-Z]',
                            match: true,
                        },
                    },
                    {
                        selector: 'enum',
                        format: ['PascalCase'],
                        custom: {
                            regex: '^E[A-Z]',
                            match: true,
                        },
                    },
                ],
            },
        },
        {
            files: ['*.test.ts', '*.test.tsx'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
        {
            files: ['*.stories.tsx'],
            rules: {
                'i18next/no-literal-string': 'off',
                '@typescript-eslint/no-unsafe-assignment': 'off',
                '@typescript-eslint/consistent-type-assertions': 'off',
            },
        },
    ],
};
