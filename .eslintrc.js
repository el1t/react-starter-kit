/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
/* eslint-disable object-curly-newline */

// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
	parser: 'babel-eslint',

	extends: [
		'airbnb',
		'plugin:css-modules/recommended',
	],

	plugins: [
		'css-modules',
	],

	globals: {
		__DEV__: true,
	},

	env: {
		browser: true,
		node: true,
		es6: true,
	},

	root: true,

	rules: {
		// `js` and `jsx` are common extensions
		// `mjs` is for `universal-router` only, for now
		'import/extensions': [
			'error',
			'always',
			{
				js: 'never',
				jsx: 'never',
				mjs: 'never',
			},
		],

		// Not supporting nested package.json yet
		// https://github.com/benmosher/eslint-plugin-import/issues/458
		'import/no-extraneous-dependencies': 'off',

		// Recommend not to leave any console.log in your code
		// Use console.error, console.warn and console.info instead
		'no-console': [
			'error',
			{
				allow: ['warn', 'error', 'info'],
			},
		],

		// Allow js files to use jsx syntax, too
		'react/jsx-filename-extension': 'off',

		// https://github.com/kriasoft/react-starter-kit/pull/961
		// You can reopen this if you still want this rule
		'react/prefer-stateless-function': 'off',

		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],

		// --init
		indent: [
			'error',
			'tab',
			{ SwitchCase: 1 },
		],
		'no-tabs': 'off',
		'linebreak-style': [
			'error',
			'unix',
		],
		quotes: [
			'error',
			'single',
		],
		// Functional
		'array-callback-return': 'error',
		'class-methods-use-this': 'warn',
		eqeqeq: [
			'error',
			'always',
		],
		'no-alert': 'error',
		'no-eval': 'error',
		'no-useless-return': 'error',
		'no-use-before-define': [
			'error',
			{ functions: false, classes: true },
		],
		strict: 'error',
		// Style
		'array-bracket-spacing': [
			'error',
			'never',
		],
		'block-spacing': [
			'error',
			'always',
		],
		'brace-style': 'error',
		camelcase: 'error',
		'comma-style': 'error',
		'comma-dangle': ['error', 'always-multiline'],
		'eol-last': 'error',
		'func-call-spacing': 'error',
		'global-require': 'error',
		'key-spacing': 'error',
		'max-len': ['warn', 120],
		'no-lonely-if': 'error',
		'no-mixed-requires': 'error',
		'no-mixed-spaces-and-tabs': [
			'error',
			'smart-tabs',
		],
		'no-multiple-empty-lines': 'error',
		'no-negated-condition': 'error',
		'no-trailing-spaces': 'error',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'object-curly-newline': 'error',
		'object-curly-spacing': [
			'error',
			'always',
		],
		'quote-props': ['error', 'as-needed'],
		'space-in-parens': 'error',
		// ES6
		'arrow-body-style': 'error',
		'arrow-parens': ['error', 'as-needed'],
		'arrow-spacing': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'prefer-const': 'error',
		'prefer-numeric-literals': 'error',
		'prefer-template': 'warn',
		'template-curly-spacing': 'error',
	},

	settings: {
		// Allow absolute paths in imports, e.g. import Button from 'components/Button'
		// https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
		'import/resolver': {
			node: {
				moduleDirectory: ['node_modules', 'src'],
			},
		},
	},
};
