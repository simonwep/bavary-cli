<h3 align="center">
    <img src="https://user-images.githubusercontent.com/30767528/69007379-69befa00-093d-11ea-96ac-816d3e9ea6b4.png" alt="Logo">
</h3>

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
