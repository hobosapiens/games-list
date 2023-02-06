const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@constants': 'src/constants',
        '@containers': 'src/containers',
        '@hoc': 'src/hoc',
        '@hooks': 'src/hooks',
        '@routes': 'src/routes',
        '@store': 'src/store',
        '@styles': 'src/styles',
        '@utils': 'src/utils',
    })(config);

    return config;
}