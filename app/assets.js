const requireAll = r => r.keys().forEach(r);

// include svg-sprite
requireAll(require.context('./icons/', true, /\.svg$/));
// include pug-templates
requireAll(require.context('./pages/', false, /\.pug$/));
