# Github action template

[![Actions Status](https://github.com/s-weigand/github-action-template/workflows/Tests/badge.svg)](https://github.com/s-weigand/github-action-template/actions)
[![codecov](https://codecov.io/gh/s-weigand/github-action-template/branch/main/graph/badge.svg)](https://codecov.io/gh/s-weigand/github-action-template)

My template for typescript based github actions and also my testing repo for new workflows I want to use with them.

For the template `main` is the dev branch and `stable` is the default branch to use.
The releases of this template can be ignored, since they are for testing only.

## Inputs

| Name          | Requirement | Default | Description |
| ------------- | ----------- | ------- | ----------- |
| `dummy-input` | _optional_  | 'foo'   | Dummy input |

# Usage

## Basic:

```yaml
steps:
  - uses: actions/checkout@v1
  - uses: s-weigand/github-action-template@v1
    with:
      dummy-input: bar
```

## Matrix Testing:

```yaml
jobs:
  build:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macOS-latest]
        python-version: [3.6, 3.7, 3.8]
    name: Python ${{ matrix.python-version }} example
    steps:
  - uses: actions/checkout@v1
  - uses: s-weigand/github-action-template@v1
    with:
      dummy-input: bar
```
