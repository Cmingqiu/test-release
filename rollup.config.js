import nodeResolve from '@rollup/plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import babel from 'rollup-plugin-babel'


export default {
  input: './src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',//cjs es,umd ,iife
    name: 'Vue',
  },
  plugins: [
    nodeResolve(),
    babel({
      exclude: /node_modules/
    }),
    serve({
      contentBase: '',
      port: 8080,
      open: true,
      openPage: '/index.html'
    })
  ]
}