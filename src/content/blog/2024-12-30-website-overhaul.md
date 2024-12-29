---
title: 'Website Overhaul'
description: 'Been a while, time for an update!'
pubDate: 'Dec 29 2024'
heroImage: '/blog-placeholder-3.jpg'
---

Hello! It's been literal years since the BigfootDS website had an update, and I've learned so much since the last build - so here's a new website!


## New Website Tech Stack

The major system driving the website is now [Astro](https://astro.build/).

The website still uses [ReactJS](https://react.dev/) where appropriate, because components keep a codebase "D.R.Y", but using Astro allows for a few nifty impmrovements:

- static page compilation
- mixing file types
- improved [OpenGraph](https://ogp.me/) metadata

A lot of this was still possible on the old pure ReactJS SPA website (not static compilation, but ReactJS will gain that feature soon apparently), but this new architecture makes it easier to do things _better_.

So, this website now uses a big mix of languages, tools, libraries, etc - but it all compiles down into a nice set of performant, SEO-friendly, HTML/CSS/JS webpages.

## Future Website Plans

Two major things that I want to implement on the website next, in 2025:

- Interactive user pages to integrate BigfootDS microservices/servers, such as user accounts, which will allow for email subscriptions and game-related "web shop" systems.
- i18n localization, which should be very doable with Astro and ReactJS both having great i18n-related systems already. Just gotta spend time learning and localizing things.