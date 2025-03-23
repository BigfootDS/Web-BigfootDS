---
title: 'SuperCamo'
description: "Camo-inspired ODM for NeDB, built specifically for BigfootDS' needs."
pubDate: 'Sep 24 2024'
heroImage: '/projects/supe/SuperCamo.png'
---

SuperCamo is a Camo-inspired object data modeller (ODM) for NeDB, built specifically for BigfootDS' needs.

This package was inspired by Scott Robinson's [Camo](https://github.com/scottwrobinson/camo) ODM - but BigfootDS had some specific needs and an urge to try out TypeScript. We greatly appreciate what Camo is and does!

## Quick Info

- [Documentation Website.](https://bigfootds.github.io/supercamo/)
- [GitHub Repository.](https://github.com/BigfootDS/supercamo)
- [NPM Package Webpage.](https://www.npmjs.com/package/@bigfootds/supercamo)


## The what

- NeDB compatibility
- Treat multiple NeDB datastores as a singular database
- Allow concurrent connections to multiple databases
- ODM-style wrapping around NeDB datastores
- Modern JavaScript implementations
- Leaning on standard NodeJS functions and APIs more than ever before to minimize production dependencies

## The nitty-gritty

- Built using NodeJS version 20, looking _forward_ only.
- Built to depend on this particular flavour of NeDB:
	- [@seald-io/nedb](https://github.com/seald/nedb)

## The installation

In your NodeJS project, you can run this command to install this package:

```bash
npm install @bigfootds/supercamo
```

## The usage

Please dig into the [documentation website](https://bigfootds.github.io/supercamo/) for examples and package reference information.