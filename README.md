<h3 align="center">
    <img src="https://user-images.githubusercontent.com/30767528/69007379-69befa00-093d-11ea-96ac-816d3e9ea6b4.png" alt="Logo">
</h3>

<br>

<p align="center">
    <a href="https://travis-ci.org/Simonwep/bavary-cli"><img
       alt="Build Status"
       src="https://img.shields.io/travis/Simonwep/bavary-cli.svg?style=flat-square"></a>
    <a href="https://www.npmjs.com/package/@bavary/cli"><img
       alt="Download count"
       src="https://img.shields.io/npm/dm/@bavary/cli.svg?style=flat-square"></a>
    <img alt="Current version" src="https://img.shields.io/github/tag/Simonwep/bavary-cli.svg?color=21068E&label=version&style=flat-square">
    <a href="https://www.patreon.com/simonwep"><img
       alt="Support me"
       src="https://img.shields.io/badge/patreon-support-260DD3.svg?style=flat-square"></a>
</p>


## Getting Started
> Check out [@bavary/core](https://github.com/Simonwep/bavary) for more info.

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
| `-w, --watch` | Watches source-files matched by `[files]` | `$ bva src/**/*.bv input.txt --watch` |
| `-v, --version` | Prints the current version | `$ bva --version` |
| `-o, --output <file>` | Write results to disk | `$ bva --output result.json` |
| `-p, --prettify` | Prettify result (Works only in combination with `--output`)  | `$ bva --output result.json --prettify` |
| `-h, --help` | Shows usage info | `$ bva --help` |
