import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginReact from 'eslint-plugin-react';
import eslintJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import eslintPluginJest from 'eslint-plugin-jest';
import eslintPluginJestFormatting from 'eslint-plugin-jest-formatting';

const languageOptionsJs = {
    ecmaVersion: 2022,
    sourceType: 'module',
    globals: {
        ...globals.amd,
        ...globals.node,
        ...globals.browser,
    },
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    }
};

const pluginsJs = {
    import: eslintPluginImport,
    react: eslintPluginReact,
};
const rulesJs = {
    'no-var': 'error',
    'no-multi-str': 'error',
    'no-prototype-builtins': 'off',
    'no-duplicate-imports': 'error',
    'no-self-compare': 'error',
    'no-sequences': [
        'error',
        {
            allowInParentheses: false,
        },
    ],
    'no-template-curly-in-string': 'error',
    'no-unused-private-class-members': 'error',
    curly: 'error',
    camelcase: [
        'error',
        {
            properties: 'never',
        },
    ],
    'no-extend-native': 'error',
    'max-depth': 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'comma-dangle': ['error', 'only-multiline'],
    'no-constant-condition': [
        'error',
        {
            checkLoops: false,
        },
    ],
    'no-unused-vars': [
        'error',
        {
            args: 'none',
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
        },
    ],
    'import/extensions': ['error', 'ignorePackages'],
    'react/jsx-uses-vars': 2,
};

const pluginsJsJest = {
    ...pluginsJs,
    jest: eslintPluginJest,
    'jest-formatting': eslintPluginJestFormatting,
};

const rulesJsJest = {
    'jest/consistent-test-it': [
        'error',
        {
            fn: 'test',
            withinDescribe: 'test',
        },
    ],
    'jest-formatting/padding-around-all': 'warn',
    'jest/max-expects': [
        'warn',
        {
            max: 5,
        },
    ],

    'jest/max-nested-describe': [
        'warn',
        {
            max: 5,
        },
    ],
    'jest/no-conditional-in-test': 'warn',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-restricted-matchers': [
        'warn',
        {
            toBeTruthy:
                "For boolean checks is preferred to use toBe(true). Use .toBeTruthy() when you don't care what the value is, there are six falsy values: false, 0, '', null, undefined, and NaN. Everything else is truthy!",
            toBeFalsy:
                "For boolean checks is preferred to use toBe(false), there are six falsy values: false, 0, '', null, undefined, and NaN. Everything else is truthy!",
        },
    ],
    'jest/prefer-comparison-matcher': 'warn',
    'jest/prefer-equality-matcher': 'warn',
    'jest/prefer-hooks-on-top': 'warn',
    'jest/prefer-lowercase-title': [
        'warn',
        {
            ignoreTopLevelDescribe: true, // We want only uppercase for top level Describe
        },
    ],
    'jest/prefer-mock-promise-shorthand': 'warn',
    'jest/prefer-spy-on': 'warn',
    'jest/prefer-todo': 'error',
    'jest/require-to-throw-message': 'warn',
    'jest/valid-title': [
        'error',
        {
            mustNotMatch: [
                '(%#)|(\\$#)',
                "Parameterized tests shouldn't contain test case indexes. It's an anti-pattern which also causes problems on TC and in executing individual tests in IDEs. More info: https://jestjs.io/docs/api#1-testeachtablename-fn-timeout",
            ],
        },
    ],
};

const languageOptionsJsJest = {
    globals: {
        ...globals.jest,
    },
};

export default [
    {
        ignores: ['*', '!src', '!src/SuiteApps', '!src/SuiteApps/*', '!test', '!test/unit', '!test/unit/*'],
        languageOptions: languageOptionsJs,
    },
    {
        files: ['src/SuiteApps/**/*.js'],
        plugins: pluginsJs,
        rules: {
            ...eslintJs.configs.recommended.rules,
            ...rulesJs,
            ...eslintConfigPrettier.rules,
        },
    },
    {
        files: ['test/unit/**/*.test.js'],
        plugins: pluginsJsJest,
        rules: {

            ...eslintJs.configs.recommended.rules,
            ...rulesJs,
            ...rulesJsJest,
            ...eslintConfigPrettier.rules,
        },
        languageOptions: languageOptionsJsJest,
    },
];