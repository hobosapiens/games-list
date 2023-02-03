const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@constants': 'src/constants',
        '@containers': 'src/containers',
        '@hoc': 'src/hoc',
        '@styles': 'src/styles',
        '@utils': 'src/utils',
    })(config);

    return config;
}