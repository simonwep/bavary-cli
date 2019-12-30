<h3 align="center">
    <img src="https://user-images.githubusercontent.com/30767528/70354254-613c4e00-186f-11ea-9cdf-3a5e5a30f516.png" alt="Logo">
</h3>

<br>

<p align="center">
    <a href="https://travis-ci.org/Simonwep/bavary-cli"><img
       alt="Build Status"
       src="https://img.shields.io/travis/Simonwep/bavary-cli.svg?style=flat-square"></a>
    <a href="https://www.npmjs.com/package/@bavary/cli"><img
       alt="Download count"
       src="https://img.shields.io/npm/dm/@bavary/cli.svg?style=flat-square"></a>
    <img alt="Current version" src="https://img.shields.io/github/tag/Simonwep/bavary-cli.svg?color=387EFF&label=version&style=flat-square">
    <a href="https://github.com/sponsors/Simonwep"><img
       alt="Support me"
       src="https://img.shields.io/badge/github-support-387eff.svg?style=flat-square"></a>
</p>

> Checkout [related packages](#related-packages)

## Getting Started

Install via npm:
```shell
$ npm install -g @bavary/cli
```

Install via yarn:
```shell
$ yarn global add @bavary/cli
```


## Usage
```bash
$ bvc [files] [options...]
```
Where `files` can be any kind of directory, file or [glob-pattern](https://en.wikipedia.org/wiki/Glob_%28programming%29).
If no output file is specified (via `--output`) it'll print the result to the console.

| Flag | Explanation | Example |
| ---- | ----------- | ------- |
| `-w, --watch` | Watches source-files matched by `[files]` | `$ bvc src/**/*.bv input.txt --watch` |
| `-v, --version` | Prints the current version | `$ bvc --version` |
| `-o, --output <file>` | Write results to disk | `$ bvc --output result.json` |
| `-p, --prettify` | Prettify result (Works only in combination with `--output`)  | `$ bvc --output result.json --prettify` |
| `-h, --help` | Shows usage info | `$ bvc --help` |


#### Related packages
* [@bavary/core](https://github.com/Simonwep/bavary) _- Parser and compiler._
* [@bavary/cli](https://github.com/Simonwep/bavary-cli) _- CLI with development server._
* [@bavary/bavary-lib](https://github.com/Simonwep/bavary-lib) _- Standard library with extensions for bavary._
* [@bavary/webpack-loader](https://github.com/Simonwep/bavary-webpack-loader) _- Webpack loader for declaration files._
