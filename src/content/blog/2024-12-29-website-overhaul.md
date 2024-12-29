---
title: 'Website Overhaul'
description: 'Been a while, time for an update!'
pubDate: 'Dec 29 2024'
heroImage: '/news/2024-12-29-website-overhaul.png'
---

Hello! It's been literal years since the BigfootDS website had an update, and I've learned so much since the last build - so here's a new website!


## New Website Tech Stack

The major system driving the website is now [Astro](https://astro.build/).

The website still uses [ReactJS](https://react.dev/) where appropriate, because components keep a codebase "D.R.Y", but using Astro allows for a few nifty impmrovements:

- static page compilation
- mixing file types
- improved per-page data such as [OpenGraph](https://ogp.me/) and [Google Search structured](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data#search-appearance)  metadata

A lot of this was still possible on the old pure ReactJS SPA website (not static compilation, but ReactJS's static/server compiler will be more and more stable as time goes on), but this new architecture makes it easier to do things _better_.

So, this website now uses a big mix of languages, tools, libraries, etc - but it all compiles down into a nice set of performant, SEO-friendly, HTML/CSS/JS webpages.

## Future Website Plans

Two major things that I want to implement on the website next, in 2025:

- Interactive user pages to integrate BigfootDS microservices/servers, such as user accounts, which will allow for email subscriptions and game-related "web shop" systems.
- i18n localization, which should be very doable with Astro and ReactJS both having great i18n-related systems already. Just gotta spend time learning and localizing things.

Astro's "island" architecture will make it easy for me to add the more-complex and more-dynamic ReactJS-driven functionality such as user accounts and ecommerce without slowing any of the static webpages down. Hopefully, this means that I can chip away at things _without_ wrecking the static, unchanging parts of the website. Hopefully!

And yes, some of the project pages' Steam store buttons do not actually show you anything yet. Keen-eyed webdevs will notice that the URLs are set correctly - but the Steam pages just aren't live yet! That's more stuff to come soon! 😉