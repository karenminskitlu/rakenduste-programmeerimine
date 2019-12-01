module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2019,
        "sourceType": "module"
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
};