module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'xo', 'plugin:i18next/recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    parser: '@typescript-eslint/parser',
    plugins: ['react', '@typescript-eslint', 'i18next'],
    rules: {
        'react/react-in-jsx-scope': 'off',
    },
    overrides: [
        {
            extends: ['xo-typescript', 'prettier'],
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-unused-vars': 'error',
                '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'interface',
                        format: ['PascalCase'],
                        custom: {
                            regex: '^I[A-Z]',
                            match: false,
                        },
                    },
                    {
                        selector: 'typeAlias',
                        format: ['PascalCase'],
                        custom: {
                            regex: '^T[A-Z]',
                            match: false,
                        },
                    },
                    {
                        selector: 'enum',
                        format: ['PascalCase'],
                        custom: {
                            regex: '^E[A-Z]',
                            match: false,
                        },
                    },
                ],
            },
        },
    ],
};
