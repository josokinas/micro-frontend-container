# npm template

[![Using JavaScript Standard Style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com/)

## Get started

You will need Node 14 running locally.

### Install dependencies

**Install Node**

Use [nvm](https://github.com/nvm-sh/nvm/) to manage different Node versions, and switch between them.

To install and switch to a required version run:

    nvm install && nvm use

**Install local Node dependencies**

    npm install

### Development mode

#### Lint code

    npm run lint

### Production mode

#### Make a release

    npm run release

This will bump a version, also add a CHANGELOG entry based on commits between releases.
