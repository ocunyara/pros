baseConfig.extends.push('plugin:@next/next/recommended')

baseConfig.extends = baseConfig.extends.filter((extend) => extend !== 'turbo')

baseConfig.rules = {
    ...baseConfig.rules,
    'import/no-extraneous-dependencies': [
        'error',
        {
            devDependencies: [
                '**/*.stories.*',
                '**/*.stories.*',
                '**/*.types.*',
                '**/*.spec.*',
                '**/.*',
            ],
            peerDependencies: false,
        },
    ],
    'import-helpers/order-imports': [
        'warn',
        {
            groups: [
                '/^react/',
                'module',
                '/^~/layouts/',
                '/^~/pages/',
                '/^~/components/',
                '/^~/helpers/',
                '/^~/hooks/',
                '/^~/fonts/',
                '/^~/static/',
                '/^~/styles/',
                '/^~/types/',
                '/^~/src/',
                ['parent', 'sibling', 'index'],
            ],
            alphabetize: { order: 'asc', ignoreCase: true },
        },
    ],
    "react/no-unknown-property": [
        2,
        {
            "ignore": [
                "jsx"
            ]
        }
    ],
    "@typescript-eslint/no-unnecessary-condition": "error"
}

baseConfig.parserOptions.project = ['./tsconfig.json']

module.exports = baseConfig
