# Bolt core

Official Bolt core integration for the Bolt theme.

## Status

[![npm (scoped)](https://img.shields.io/npm/v/@hyas/bolt-core?style=flat-square)](https://www.npmjs.com/package/@hyas/bolt-core)


## Installation

```bash
npm i @hyas/bolt-core
```

## Setup

Add mounts to `./config/_default/module.toml`:

```toml
# mounts
## archetypes
[[mounts]]
  source = "node_modules/@hyas/bolt-core/archetypes"
  target = "archetypes"

[[mounts]]
  source = "archetypes"
  target = "archetypes"

## assets
[[mounts]]
  source = "node_modules/@hyas/core/assets"
  target = "assets"

[[mounts]]
  source = "node_modules/gethyas/assets"
  target = "assets"

[[mounts]]
  source = "node_modules/@hyas/images/assets"
  target = "assets"
  excludeFiles = "/scss/**.scss"

[[mounts]]
  source = "node_modules/@hyas/bolt-core/assets"
  target = "assets"

[[mounts]]
  source = "assets"
  target = "assets"

## content
[[mounts]]
  source = "content"
  target = "content"

## data
[[mounts]]
  source = "data"
  target = "data"

## i18n
[[mounts]]
  source = "i18n"
  target = "i18n"

## layouts
[[mounts]]
  source = "node_modules/@hyas/core/layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@hyas/seo/layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@hyas/images/layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@hyas/bolt-core/layouts"
  target = "layouts"

[[mounts]]
  source = "layouts"
  target = "layouts"

## static
[[mounts]]
  source = "static"
  target = "static"
```

## How to use

See the Hyas documentation:

- [Bolt core](https://docs.gethyas.com/guides/integrations-guide/bolt-core/)
