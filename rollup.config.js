import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import alias from 'rollup-plugin-alias';
import svelte from 'rollup-plugin-svelte';
import browserSync from 'rollup-plugin-browsersync';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'resources/js/index.js',
    output: [
        {
            dir: 'public/js',
            format: 'esm',
            sourcemap: true
        },
        {
            dir: 'public/nomodule',
            format: 'iife',
            sourcemap: true
        }
    ],
    plugins: [
        svelte({
            dev: !production,
        }),
        resolve(),
        commonjs(),
        babel(),
        postcss({
            extract: './public/css/bundle.css',
            plugins: [
                require('postcss-import'),
                require('postcss-nested'),
                require('postcss-nested'),
                require('tailwindcss')('tailwind.config.js'),
                require('autoprefixer')
            ]
        }),
        alias({
            resolve: ['.svelte', '.js'],
            '~': './resources/js'
        }),
        browserSync({
            proxy: 'http://laravel-rollup.test'
        }),
        production && terser()
    ]
};
