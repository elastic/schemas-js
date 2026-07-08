# Contributing to the Elasticsearch Node.js client

This package is open source and we love to receive contributions from our community — you!

There are many ways to contribute,
from writing tutorials or blog posts,
improving the documentation,
submitting bug reports and feature requests or writing code.

## Repository structure

All work is merged into the `main` branch, and updated versions of the package will be published to npm from `main` as well.

## Code contributions

If you have a bugfix or new feature that you would like to contribute, please find or open an issue about it first.
Talk about what you would like to do.
It may be that somebody is already working on it, or that there are particular issues that you should know about before implementing the change.

### Submitting your changes

Generally, we require that you test any code you are adding or modifying.
Once your changes are ready to submit for review:

1. **Test your changes**: Run `npm test` to make sure that nothing is broken.
2. **Submit a pull request**: Push your local changes to your forked copy of the repository and [submit a pull request](https://help.github.com/articles/using-pull-requests).
3. **Sign the Contributor License Agreement**: Please make sure you have signed our [Contributor License Agreement](https://www.elastic.co/contributor-agreement/). We are not asking you to assign copyright to us, but to give us the right to distribute your code without restriction. We ask this of all contributors in order to assure our users of the origin and continuing existence of the code. You only need to sign the CLA once.

4. **Be patient**: We might not be able to review your code as fast as we would like to, but we'll do our best to dedicate it the attention it deserves. Your effort is much appreciated!

### Code generation

The entire contents of the `src/{cloud,es,kibana}/` directories are automatically generated from their respective specifications. If you are making changes to those files, note that we will likely have to make modifications to our internal code generation tools to reflect and perpetuate that change, or it will be undone. We'll typically handle this without asking, but it's always helpful to mention it in your PR so we don't overlook it.

If you have access to the generation tools (i.e. you are an Elastic employee), you can clone the repo and run `npm run generate` to update the generated code in this repository to reflect the latest spec changes.

### Releasing

Releases are automated, using [release-please](https://github.com/googleapis/release-please) to set and tag the correct version number and generate release notes, and a GitHub action that handles trusted publishing to npm.
