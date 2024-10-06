---
title: 'Design Systems That Scale'
pubDate: 2024-02-07
description: 'Lorem ipsum'
author: 'Caleb D. Williams'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'The full Astro logo.'
tags: ["design systems", "scale", "TypeScript", "Lit", "React", "Solid", "Angular", "Vue"]
---

# Design Systems That Scale

Prior to joining Slack I spent the last few years at Capital One building out the design system used
by the company's Financial Services division. When you work on design systems that serve more than 250
different projects one of the things you learn quickly is that the most difficult problems you run into
are not technical in nature, but that they are people problems.

<!-- In a recent episode of [Shop Talk Show](https://shoptalkshow.com/601/), [Brad Frost](https://bradfrost.com/)
was talking about a "global design system," a presumably unbranded design system that could be published
and maintained by a group of experts that satisfied the 80/20 rule for design systems worldwide. This  -->

One of the biggest problems we had to solve at Capital One was defining standards that could be applied
across multiple tech stacks natively. The obvious solution to this was to use [web components](https://css-tricks.com/an-introduction-to-web-components/), portable pieces of custom HTML that can be applied in any context
that uses HTML and JavaScript. This was a no-brainer for us as the same custom elements would work in
(almost) every tech stack we needed with React being the sole holdout ([those technical gaps should be resolved
in React 19](https://github.com/facebook/react/issues/11347#issuecomment-1899140345])).

Despite the fact that web components would work in any front-end context, there was still a preference among some
of our internal customers that they use libraries built in and for their preferred tech stack. With a reasonably 
large tech team, this is certainly doable, but I led a team of two engineers tasked with supporting
these various front-end frameworks with the expectation to potentially support newer frameworks that
developers might be interested in. 

## 
