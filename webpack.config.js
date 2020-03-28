const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: '.index.js',
    target: 'node',
    node: {
        fs: 'empty',
        emitter: 'empty'
    },
    externals: [nodeExternals()],
    output: {
        library: 'manhua',
        libraryTarget: 'umd',
        globalObject: "typeof self !== 'undefined' ? self : this"
    }
}