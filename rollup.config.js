import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy';
import { uglify } from 'rollup-plugin-uglify';

const dev = process.env.NODE_ENV === 'development';
const prod = process.env.NODE_ENV === 'production';

const plugins = [
  peerDepsExternal(),

  nodeResolve(),

  babel({
    exclude: 'node_modules/**',
    babelHelpers: 'bundled',
  }),  

  commonjs(),

  typescript(),

  scss({
    prefix: `@import './variables';`,
    output: prod ? `./dist/css/react-classic-table.min.css` : `./dist/css/react-classic-table.css`,
    watch: dev ? './src/styles' : false,
    outputStyle: prod ? 'compressed' : 'expanded', // nested, expanded, compact, compressed
  }),

  copy({
    targets: [
      {
        src: 'src/styles/**/*',
        dest: 'dist/scss',
      },
    ],
  }),

  prod && uglify(),
];

const iife = {
  input: './src/index.tsx',

  output: {
    file: prod ? `./dist/js/react-classic-table.min.js` : `./dist/js/react-classic-table.js`,
    format: 'iife',
    name: 'ReactClassicTable',
    sourcemap: true,

    globals: {
      react: 'React',
    },
  },

  plugins,

  external: [
    'react',
  ],
};

const es = {
  input: './src/index.tsx',

  output: {
    file: prod ? `./dist/js/react-classic-table.es.min.js` : `./dist/js/react-classic-table.es.js`,
    format: 'es',
    sourcemap: true,
  },

  plugins,

  external: [
    'react',
    'lodash',
    'classnames',
  ],
};

export default [iife, es];
