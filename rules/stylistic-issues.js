module.exports = {
	rules: {
		"array-bracket-spacing": ["error", "never"],
		"brace-style": "error",
		"capitalized-comments": "error",
		"comma-dangle": ["error", "never"],
		"comma-spacing": ["error", {
			"before": false,
			"after": true
		}],
		"comma-style": ["error", "last"],
		"func-call-spacing": ["error", "never"],
		"func-style": ["error", "declaration"],
		"indent": ["error", "tab", {
			"SwitchCase": 1
		}],
		"jsx-quotes": ["error", "prefer-double"],
		"key-spacing": ["error", {
			"beforeColon": false,
			"afterColon": true,
			"mode": "strict"
		}],
		"keyword-spacing": ["error", {
			"before": true,
			"after": true
		}],
		"lines-between-class-members": ["error", "always"],
		"multiline-ternary": ["error", "never"],
		"new-cap": "error",
		"no-bitwise": "error",
		"no-continue": "error",
		"no-mixed-spaces-and-tabs": "error",
		"no-multi-assign": "error",
		"no-multiple-empty-lines": ["error", {
			"max": 1
		}],
		"no-new-object": "error",
		"no-trailing-spaces": "error",
		"no-whitespace-before-property": "error",
		"padded-blocks": ["error", "never"],
		"padding-line-between-statements": ["error", {
			"blankLine": "always",
			"prev": ["const", "let", "var"],
			"next": "*"
		}, {
			"blankLine": "any",
			"prev": ["const", "let", "var"],
			"next": ["const", "let", "var"]
		}],
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"semi-spacing": ["error", {
			"before": false,
			"after": true
		}],
		"space-before-blocks": "error",
		"space-before-function-paren": ["error", "never"],
		"space-in-parens": ["error", "never"],
		"space-infix-ops": "error",
		"space-unary-ops": ["error", {
			"words": true,
			"nonwords": false
		}],
		"spaced-comment": ["error", "always"],
		"switch-colon-spacing": ["error", {
			"after": true,
			"before": false
		}]
	}
}