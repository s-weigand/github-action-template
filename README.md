# Github action template

[![Actions Status](https://github.com/s-weigand/github-action-template/workflows/Tests/badge.svg)](https://github.com/s-weigand/github-action-template/actions)
[![codecov](https://codecov.io/gh/s-weigand/github-action-template/branch/master/graph/badge.svg)](https://codecov.io/gh/s-weigand/github-action-template)

My template repo for typescript based github actions

## Inputs

| Name          | Requirement | Description                    |
| ------------- | ----------- | ------------------------------ |
| `dummy-input` | _optional_  | Dummy input (`Default: 'foo'`) |

# Usage

## Basic:

```yaml
steps:
  - uses: actions/checkout@master
  - uses: s-weigand/github-action-template
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
  - uses: actions/checkout@master
  - uses: s-weigand/github-action-template
```
