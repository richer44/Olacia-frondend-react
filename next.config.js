// next.config.js
const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg({
    include: path.resolve(__dirname, 'public/icons'),
    webpack(config, options) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                // Include only files in src/ folder
                test: /\.[jt]sx?$/,
            },
            use: [{
                loader: '@svgr/webpack',
                options: {
                    svgoConfig: {
                        plugins: {
                            removeViewBox: false,
                        },
                    },
                },
            }, ],
        });

        return config;
    },
});