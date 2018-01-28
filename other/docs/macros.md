# macros

`babel-plugin-macros` is only as useful as the `macros` you add to your project.
You can make local macros for your project (`import a from './a.macro'`), but
there's an ecosystem of existing macros out there that you might find interesting:

* [`preval.macro`](https://www.npmjs.com/package/preval.macro): Pre-evaluate code at build-time
* [`codegen.macro`](https://www.npmjs.com/package/codegen.macro): 💥 Generate code at build-time
* [`import-all.macro`](https://www.npmjs.com/package/import-all.macro): A babel-macro that allows you to import all files that match a glob
* [`tagged-translations`](https://www.npmjs.com/package/tagged-translations): A dead simple babel-plugin for translating texts in React applications.
* [`traph.macro`](https://www.npmjs.com/package/traph.macro): JS Babel macro for Object transformation graph
* [`param.macro`](https://www.npmjs.com/package/param.macro): Partial application syntax and lambda parameters for JavaScript, inspired by Scala's `_` & Kotlin's it.
* [`ms.macro`](https://www.npmjs.com/package/ms.macro): Convert various time formats to milliseconds at build time in Babel.
* [`react-emotion/macro`](https://github.com/emotion-js/emotion/tree/78fea2d2eb74269645b28fe12392ecc09882f55f/packages/babel-plugin-emotion#babel-macros): Babel plugin for the minification and optimization of emotion styles.
* [`babel-plugin-console/macro`](https://www.npmjs.com/package/babel-plugin-console): Adds useful build time console functions
* [`graphql.macro`](https://github.com/evenchange4/graphql.macro): Compile GraphQL AST at build-time with babel-plugin-macros.
* [`svgr.macro`](https://github.com/evenchange4/svgr.macro): Run svgr at build-time with babel-plugin-macros.

Please note that macros are intended to be used as devDependencies.

In addition, you can
[search npm for `keyword:babel-plugin-macros`](https://www.npmjs.com/search?q=keywords:babel-plugin-macros)
to find macros.
