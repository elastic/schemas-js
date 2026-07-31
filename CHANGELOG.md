# Changelog

## [0.4.5](https://github.com/elastic/schemas-js/compare/v0.4.4...v0.4.5) (2026-07-31)


### Bug Fixes

* ensure JSON schemas handle ValueBody specs appropriately ([#51](https://github.com/elastic/schemas-js/issues/51)) ([bb294ee](https://github.com/elastic/schemas-js/commit/bb294ee36b356d298242b8075c65226edb457e4e))

## [0.4.4](https://github.com/elastic/schemas-js/compare/v0.4.3...v0.4.4) (2026-07-30)


### Bug Fixes

* add destructive field to ApiRegistryDefinition ([#48](https://github.com/elastic/schemas-js/issues/48)) ([305fdc5](https://github.com/elastic/schemas-js/commit/305fdc5b7d2f2bf82696ef9d32053ed249c4de28))
* ensure ES JSON schemas use x-found-in properly with path params ([#50](https://github.com/elastic/schemas-js/issues/50)) ([8533df4](https://github.com/elastic/schemas-js/commit/8533df44c60bf16a50ad8d0ff777383df3ee9b35))

## [0.4.3](https://github.com/elastic/schemas-js/compare/v0.4.2...v0.4.3) (2026-07-29)


### Bug Fixes

* use import attributes for JSON files ([#45](https://github.com/elastic/schemas-js/issues/45)) ([f2c268a](https://github.com/elastic/schemas-js/commit/f2c268a7b5dfb5f5a16ec46dabe5a601f50273de))

## [0.4.2](https://github.com/elastic/schemas-js/compare/v0.4.1-alpha.1...v0.4.2) (2026-07-28)


### Bug Fixes

* add serverless control plane APIs ([#39](https://github.com/elastic/schemas-js/issues/39)) ([e263d08](https://github.com/elastic/schemas-js/commit/e263d08f0b1c8097a3eb534a542645579755e5b5))
* adjust CI to validate PRs more effectively, drop alpha/beta labels from npm temporarily ([#36](https://github.com/elastic/schemas-js/issues/36)) ([9622b21](https://github.com/elastic/schemas-js/commit/9622b21fffc82e5651a56b8b69f73ecd8e8ebb76))

## [0.4.1-alpha.1](https://github.com/elastic/schemas-js/compare/v0.4.0-alpha.1...v0.4.1-alpha.1) (2026-07-28)


### Bug Fixes

* reuse static JSON schema files for tool API definitions ([#34](https://github.com/elastic/schemas-js/issues/34)) ([f97cd55](https://github.com/elastic/schemas-js/commit/f97cd55dbff0d4788996dd465d2889fe7b84d4fe))

## [0.4.0-alpha.1](https://github.com/elastic/schemas-js/compare/v0.3.1-alpha.1...v0.4.0-alpha.1) (2026-07-27)


### Features

* add destructive flag to all tool API definitions ([#33](https://github.com/elastic/schemas-js/issues/33)) ([3b6705e](https://github.com/elastic/schemas-js/commit/3b6705e0a4f0f9ed4ffd130909cc185eddebd8f8))


### Bug Fixes

* CommonJS build output ([#32](https://github.com/elastic/schemas-js/issues/32)) ([7660df4](https://github.com/elastic/schemas-js/commit/7660df453e3a9f0ba6fd381b704220138b825f25))
* correct package git metadata ([#29](https://github.com/elastic/schemas-js/issues/29)) ([8dafacf](https://github.com/elastic/schemas-js/commit/8dafacf439bdf5c57344c30f6fba92c59c03aa80))

## [0.3.1-alpha.1](https://github.com/elastic/schemas-js/compare/v0.3.0-alpha.1...v0.3.1-alpha.1) (2026-07-24)


### Bug Fixes

* build script misconfiguration ([#27](https://github.com/elastic/schemas-js/issues/27)) ([fac5fab](https://github.com/elastic/schemas-js/commit/fac5fabe1e1c7671bc6b90eff1d478b545864765))

## [0.3.0-alpha.1](https://github.com/elastic/schemas-js/compare/v0.2.0-alpha.1...v0.3.0-alpha.1) (2026-07-23)


### Features

* add tools for the Cloud API ([#23](https://github.com/elastic/schemas-js/issues/23)) ([84619d0](https://github.com/elastic/schemas-js/commit/84619d06a831023cecf2713684df0f841c647311))

## [0.2.0-alpha.1](https://github.com/elastic/schemas-js/compare/v0.1.0-alpha.1...v0.2.0-alpha.1) (2026-07-21)


### Features

* commonjs exports ([#19](https://github.com/elastic/schemas-js/issues/19)) ([0cc7893](https://github.com/elastic/schemas-js/commit/0cc789352c4447784a625b9f97628e4cd10a34ce))


### Bug Fixes

* add more deep exports ([#18](https://github.com/elastic/schemas-js/issues/18)) ([5895492](https://github.com/elastic/schemas-js/commit/589549298d79b7ef55c237b2fb92ba5c1ca5c04a))
* preserve types.ts files for tools exports ([#16](https://github.com/elastic/schemas-js/issues/16)) ([66d1a64](https://github.com/elastic/schemas-js/commit/66d1a6488ed19fbf693148a84f7e1324d030d380))

## [0.1.0-alpha.1](https://github.com/elastic/schemas-js/compare/schemas-v0.1.0-alpha.1...schemas-v0.1.0-alpha.1) (2026-07-21)


### Features

* add static JSON schema files to the package ([#5](https://github.com/elastic/schemas-js/issues/5)) ([2840e9d](https://github.com/elastic/schemas-js/commit/2840e9dd1e6a93669e679b321434a2c682e35028))
* Zod schemas and experimental tools ([ebb577d](https://github.com/elastic/schemas-js/commit/ebb577dfcc9550f7d7c24b8ef9ac8ef74143567a))


### Bug Fixes

* add sub-path so a single schema can be imported directly ([#3](https://github.com/elastic/schemas-js/issues/3)) ([62cfd6a](https://github.com/elastic/schemas-js/commit/62cfd6a2727fffa037b20e8cd5bcad6c2fbe2694))
* rename Es exports to Elasticsearch ([038c691](https://github.com/elastic/schemas-js/commit/038c6913c2c980e9bf32e84a75e625f62fd7fbf0))
* rename Es exports to Elasticsearch ([2ce452a](https://github.com/elastic/schemas-js/commit/2ce452acce84061fdb8ba139d561494c60834552))
* use correct format for ID lookup ([#12](https://github.com/elastic/schemas-js/issues/12)) ([be2b33c](https://github.com/elastic/schemas-js/commit/be2b33c2708d8049a76fd1819a6bd7b465429696))


### Miscellaneous Chores

* release 0.1.0-alpha.1 ([#8](https://github.com/elastic/schemas-js/issues/8)) ([b5641f0](https://github.com/elastic/schemas-js/commit/b5641f09f0d79eba0b2c996ba5cb1b3650aa0d27))
