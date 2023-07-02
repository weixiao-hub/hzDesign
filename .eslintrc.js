module.exports = {
  
  extends:[
    'plugin:vue/vue3-recommended',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'space-before-function-paren': 0,
    'no-multiple-function-paren': 0,
    '@typescript-eslint/no-explicit-any': ['off'],
    "vue/multi-word-component-names": "off"
  },
  "parser": "@typescript-eslint/parser",
  "parser": "vue-eslint-parser",
    "parserOptions": {
       "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    }
  
}
