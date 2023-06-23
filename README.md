# Bolt core

Official Bolt core integration for the Bolt theme.

## Status

[![npm (scoped)](https://img.shields.io/npm/v/@hyas/bolt-core?style=flat-square)](https://www.npmjs.com/package/@hyas/bolt-core)


## Installation

```bash
npm i -D @hyas/bolt-core
```

## Setup

Add mounts to `./config/_default/module.toml`:

```toml
[[mounts]]
  source = "node_modules/@hyas/core/assets"
  target = "assets"

[[mounts]]
  source = "node_modules/@hyas/core/layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/gethyas/assets"
  target = "assets"

[[mounts]]
  source = "node_modules/@hyas/seo/layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@hyas/images/assets"
  target = "assets"
  excludeFiles = "/scss/**.scss"

[[mounts]]
  source = "node_modules/@hyas/images/layouts"
  target = "layouts"

[[mounts]]
  source = "node_modules/@hyas/bolt-core-dev/archetypes"
  target = "archetypes"

[[mounts]]
  source = "node_modules/@hyas/bolt-core-dev/assets"
  target = "assets"

[[mounts]]
  source = "node_modules/@hyas/bolt-core-dev/layouts"
  target = "layouts"

[[mounts]]
  source = "archetypes"
  target = "archetypes"

[[mounts]]
  source = "assets"
  target = "assets"

[[mounts]]
  source = "layouts"
  target = "layouts"
```

## How to use

See the Hyas documentation:

- [Bolt core](https://docs.gethyas.com/guides/integrations-guide/bolt-core/)
