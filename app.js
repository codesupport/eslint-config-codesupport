module.exports = {
	globals: {
		MyGlobal: true
	},
	extends: [
		"./rules/possible-errors.js",
		"./rules/best-practices.js",
		"./rules/variables.js",
		"./rules/stylistic-issues.js",
		"./rules/es6.js"
	]
};