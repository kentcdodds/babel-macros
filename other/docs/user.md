# `babel-plugin-macros` Usage for users

> See also: [the `author` docs](https://github.com/kentcdodds/babel-plugin-macros/blob/master/other/docs/author.md).

## Adding the plugin to your config

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["macros"]
}
```

### Via CLI

```shell
babel --plugins babel-plugin-macros script.js
```

### Via Node API

```js
require('babel-core').transform('code', {
  plugins: ['macros'],
})
```

## Using a macro

With the `babel-plugin-macros` plugin added to your config, we can now use a macro
that works with the `babel-plugin-macros` API. Let's assume we have such a module
in our project called `eval.macro.js`. To use it, we `import` or `require`
the macro module in our code like so:

```javascript
import MyEval from './eval.macro'
// or
const MyEval = require('./eval.macro')
```

Then we use that variable however the documentation for the macro says.
Incidentally, `eval.macro.js` actually exists in the tests for `babel-plugin-macros`
[here][eval-macro] and you can see how it transforms our code in
[the `babel-plugin-macros` snapshots][eval-snapshots].

> Note here that the real benefit is that we don't need to configure anything
> for every macro you add. We simply configure `babel-plugin-macros`, then we can
> use any macro available. This is part of the benefit of using `babel-plugin-macros`.

[eval-macro]: https://github.com/kentcdodds/babel-plugin-macros/blob/master/src/__tests__/fixtures/eval.macro.js
[eval-snapshots]: https://github.com/kentcdodds/babel-plugin-macros/blob/master/src/__tests__/__snapshots__/index.js.snap

### Using with create-react-app

`babel-plugin-macros` is currently available to be used with the alpha version of react-scripts 2.0! This is awesome because it allows for babel to be configured in a nice way without having to eject from `create-react-app`!

Before deciding to use this however you should be aware of a few things:

1. Features may be broken or not work as expected
2. There will be more breaking changes introduced before the final release ⚠️
3. Documentation for new features is still sparse, so look through the pull requests for how they're expected to work

With that being said you can use all the awesomeness of `babel-plugin-macros` inside `create-react-app` by running one of the following commands based on your situation.

```
$ # Create a new application
$ npx create-react-app@next --scripts-version=2.0.0-next.47d2d941
$ # Upgrade an existing application
$ yarn upgrade react-scripts@2.0.0-next.47d2d941
```
