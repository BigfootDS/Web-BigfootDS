---
title: 'NPM Compliance Helper'
description: 'NodeJS tool to help generate legal & copyright notices about project dependencies.'
pubDate: 'May 03 2024'
heroImage: '/projects/NPMC/maincapsule.jpg'
---

The NPM Compliance Helper is a NodeJS tool to help generate legal & copyright notices about project dependencies. 

## Quick Info

- [GitHub Repository.](https://github.com/BigfootDS/npm-compliance-helper)
- [NPM Package Webpage.](https://www.npmjs.com/package/@bigfootds/npm-compliance-helper)


## The what

The NPM Compliance Helper is a NodeJS tool to help generate legal & copyright notices about project dependencies. Intended usage is to provide data in an organized way for a front-end to then display.

## Legal Disclaimer

This tool should not be used blindly or without further human activity to process its output.

Don't come blaming us for your poor business decisions.

## Installation

This package can be used as a dependency, with its functions imported into your dev or production or other code.

Or, this package can be used as a command line tool.

To install in your production dependencies, run this: 

```bash
npm install @bigfootds/npm-compliance-helper
```

To install in your dev dependencies, run this: 

```bash
npm install --save-dev @bigfootds/npm-compliance-helper
```

To run as a command line tool without installing it into a project, run this:

`npx @bigfootds/npm-compliance-helper`

## Basic Usage

Default usage of this package will meet most peoples' needs.

Default usage will search for the `package.json` file in the current working directory and create license data based on that file.

### Command Line Usage

If using this package as a command line tool, you can pass in customisation options with these flags:

```bash
  -p, --packageJsonPath <packageJsonPath>            A path to a package.json. If not provided, the package.json in the current working directory will be used. (default: Result of `path.join(process.cwd(), "package.json")` )
  -lo, --licenseOverrides <licensesToOverride>       The licenses you want to allow in your project. (default: [])
  -ex, --excludedLicenses <excludedSpdxIdentifiers>  The licenses you want to forbid in your project. (default: [])
  -h, --help                                         display help for command

```

Please note that the license overrides and license exclusions are not yet implemented as of 4th May 2024.

Typical usage of this command may look like:

```bash
npx @bigfootds/npm-compliance-helper > ./out/organizedLicenseData.json
```

You could even create a bit of robust NPM/bash scripting like so, to guarantee that the `out` folder exists:

```bash
mkdir -p ./out && npx @bigfootds/npm-compliance-helper > ./out/organizedLicenseData.json
```

### Imported Package Usage

If you wish to use this package within your own JavaScript code, you can import the package like so:

```js
const {organiseProjectLicenseInfo} = require("@bigfootds/npm-compliance-helper");
```

You can provide that function with a custom path to a `package.json` file, or just give it nothing and it will find the `package.json` file in the current working directory.

Like so:

```js
async function someFunction(){
	let output = "";
	
	output = await organiseProjectLicenseInfo().catch(error => error);

	console.log(Object.keys(output));

	console.log(output.directDependencies);

	return output;
}
```