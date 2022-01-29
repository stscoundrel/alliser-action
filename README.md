# Alliser Action

Run [Alliser](https://github.com/stscoundrel/alliser) using Github Actions.

## Why Alliser?

Alliser guards your project against incorrect file types. It can be something small -> maybe you want to enforce all files are `.ts` instead of `.js`. Or maybe you want to ban or discourage use of particular file extension, or a programming language.

Just setup Alliser Action, hook it up to pull requests and you'll know if some file extension is incorrect.

## Example config

Example .yml action file for running Alliser.

- Looks for `.ts` & `.tsx` files. Other files are considered incorrect
- Scans `src` and `tests` folder
- Fails if other file types are found, and outputs list of the files.

```
name: Alliser

on: [pull_request]

jobs:
  alliser:
    runs-on: ubuntu-latest
    name: Check file types
    steps:
    - uses: actions/checkout@v2
    - uses: stscoundrel/alliser-action@v0.7.0
      name: Alliser action step
      with:
        extensions: .ts,.tsx
        folders: src,tests
```
