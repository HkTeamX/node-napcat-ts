import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    prettierConfig,
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
        },
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
        }
    }
);
