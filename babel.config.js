const moduleAliases = require('./module.aliases');

module.exports = (api) => {
    const isDevelopment = api.env('development');

    return {
        presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
        plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-transform-runtime',
            ['module-resolver', moduleAliases],
            isDevelopment && 'react-refresh/babel'
        ].filter(Boolean)
    };
};
