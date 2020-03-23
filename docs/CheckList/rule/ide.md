### IDE

>  利用 Vscode，Vetur，Prettier，Eslint 来统一代码风格。

```json
// setting.json
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.format.enable": true,
// .prettierrc.json
  {
    "singleQuote": true,
    "semi": false
  }
// .eslintrc.json
	{
      "env": {
        "browser": true,
        "node": true,
        "es6": true
      },
      "extends": ["eslint:recommended", "plugin:vue/essential"],
      "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
      },
      "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": true
        }
      },
      "plugins": ["vue"],
      "rules": {
        "quotes": ["error", "single"],
        "no-console": ["error"],
        "semi": ["error", "never"]
      }
	}
// package.json
  "eslint": "^5.16.0",
  "eslint-plugin-vue": "^5.2.2",
```

**Reference：**

  [Eslint 英文文档](https://eslint.org/docs/user-guide/configuring)

  [Eslint中文文档](http://eslint.cn/docs/rules/)

  [凹凸实验室前端代码规范](https://guide.aotu.io/docs/name/htmlcss.html)

 [EditorConfig](http://www.alloyteam.com/2014/12/editor-config/)

