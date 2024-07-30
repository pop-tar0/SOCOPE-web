const tsParser = require('@typescript-eslint/parser');
const eslintPluginTypeScript = require('@typescript-eslint/eslint-plugin');
const eslintPluginReact = require('eslint-plugin-react');
const eslintPluginReactHooks = require('eslint-plugin-react-hooks');

const baseConfig = {
    languageOptions: {
        parser: tsParser,
        parserOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            ecmaFeatures: {
                jsx: true,
            },
        },
    },
    plugins: {
        '@typescript-eslint': eslintPluginTypeScript,
        react: eslintPluginReact,
        'react-hooks': eslintPluginReactHooks,
    },
    rules: {
        'no-console': 'warn',
        'no-debugger': 'warn',
        'no-unused-vars': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'linebreak-style': 0,
        'indent': ['error', 4],
        'max-len': 'off',
    },
};

const tsConfig = {
    ...baseConfig,
    rules: {
        ...baseConfig.rules,
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
    },
    files: ['*.ts', '*.tsx'],
};

const jsConfig = {
    ...baseConfig,
    rules: {
        ...baseConfig.rules,
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
    files: ['*.js', '*.jsx'],
};

module.exports = [tsConfig, jsConfig];