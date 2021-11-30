const requireAll = r => {
  console.log('requireAll', r);
  return r.keys().forEach(r);
};

// include svg-sprite
requireAll(require.context('./icons/', true, /\.svg$/));
// include pug-templates
requireAll(require.context('./pages/', false, /\.pug$/));
