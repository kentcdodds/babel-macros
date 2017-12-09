const babelConfig = require('kcd-scripts/babel')

// we don't want to use babel-macros inside babel-macros...
// and until kcd-scripts gets upgraded to babel-plugin-macros
// we'll have both of those referenced here...
babelConfig.plugins = babelConfig.plugins.filter(
  pluginPath =>
    !pluginPath.includes('babel-macros/') &&
    !pluginPath.includes('babel-plugin-macros/'),
)
module.exports = babelConfig
