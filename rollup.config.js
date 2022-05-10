import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { terser } from 'rollup-plugin-terser';

const pkg = require('./package.json');
const banner = `/**!
 * @license
 * sdpi-components v${pkg.version}, Copyright ${pkg.author} and other contributors (${pkg.homepage})
 * Lit, Copyright 2019 Google LLC, SPDX-License-Identifier: BSD-3-Clause (https://lit.dev/)
 */`;

export default (commandLineArgs) => {
    // Determine the environment, and remove the command line to prevent warnings.
    const dev = !!(process.env.ROLLUP_WATCH || commandLineArgs.dev);
    delete commandLineArgs.dev;

    /**
     * @type {import('rollup').RollupOptions}
     */
    const config = {
        input: 'src/index.ts',
        output: {
            file: dev ? `example/pi/sdpi-components.js` : `dist/sdpi-components.js`,
            format: 'iife',
            sourcemap: dev,
            banner
        },
        plugins: [
            !dev && minifyHTML(),
            typescript({
                sourceMap: dev,
                inlineSources: dev
            }),
            nodeResolve(),
            commonjs(),
            !dev &&
                terser({
                    format: {
                        comments: /^\*!\n \* @license/
                    }
                })
        ]
    };

    return config;
};
