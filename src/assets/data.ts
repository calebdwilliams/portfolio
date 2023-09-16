interface Project {
  title: string;
  body: string;
  href: string;
}

export const openSourceProjects: Project[] = [
  {
    title: '@open-wc/form-control',
    body: 'A mixin for creating universal form controls',
    href: 'https://www.npmjs.com/package/@open-wc/form-control'
  },
  {
    title: '@open-wc/form-helpers',
    body: 'Helper utilities for working with forms across multiple frameworks',
    href: 'https://www.npmjs.com/package/@open-wc/form-helpers'
  },
  {
    title: 'element-internals-polyfill',
    body: 'A browser polyfill for the ElementInternals and AriaMixin specifications',
    href: 'https://www.npmjs.com/package/element-internals-polyfill'
  },
  {
    title: 'construct-style-sheets-polyfill',
    body: 'A browser polyfill for the constructible stylesheets specification',
    href: 'https://www.npmjs.com/package/construct-style-sheets-polyfill'
  }
];

export const articles: Project[] = [
  {
    title: 'Creating Custom Form Controls with ElementInternals',
    body: 'Ever since the dawn of time, humanity has dreamed of having more control over form elements. OK, I might be overselling it a tiny bit, but creating or …',
    href: 'https://css-tricks.com/creating-custom-form-controls-with-elementinternals/'
  },
  {
    title: '3 Approaches to Integrate React with Custom Elements',
    body: 'In my role as a web developer who sits at the intersection of design and code, I am drawn to Web Components because of their portability. It makes sense: custom elements are …',
    href: 'https://css-tricks.com/3-approaches-to-integrate-react-with-custom-elements/'
  },
  {
    title: 'TypeScript, Minus TypeScript',
    body: 'Unless you’ve been hiding under a rock the last several years (and let’s face it, hiding under a rock sometimes feels like the right thing to do), you’ve probably heard of and likely used TypeScript. TypeScript is …',
    href: 'https://css-tricks.com/typescript-minus-typescript/'
  },
  {
    title: 'How to Tame Line Height in CSS',
    body: 'In CSS, line-height is probably one of the most misunderstood, yet commonly-used attributes. As designers and developers, when we think about line-height, we might think about the concept of leading from print design …',
    href: 'https://css-tricks.com/how-to-tame-line-height-in-css/'
  },
  {
    title: 'Advanced Tooling for Web Components',
    body: 'Over the course of the last four articles in this five-part series, we’ve taken a broad look at the technologies that make up the Web Components standards. First, we looked at …',
    href: 'https://css-tricks.com/advanced-tooling-for-web-components/'
  },
  {
    title: 'Encapsulating Style and Structure with Shadow DOM',
    body: 'This is part four of a five-part series discussing the Web Components specifications. In part one, we took a 10,000-foot view of the specifications and …',
    href: 'https://css-tricks.com/encapsulating-style-and-structure-with-shadow-dom/'
  },
  {
    title: 'Creating a Custom Element from Scratch',
    body: 'In the last article, we got our hands dirty with Web Components by creating an HTML template that is in the document but not rendered until we need it. Next up, we’re going to continue our quest to …',
    href: 'https://css-tricks.com/creating-a-custom-element-from-scratch/'
  },
  {
    title: 'Crafting Reusable HTML Templates',
    body: 'In our last article, we discussed the Web Components specifications (custom elements, shadow DOM, and HTML templates) at a high-level. In this article, and the three to follow, we will …',
    href: 'https://css-tricks.com/crafting-reusable-html-templates/'
  },
  {
    title: 'An Introduction to Web Components',
    body: 'Front-end development moves at a break-neck pace. This is made evident by the myriad articles, tutorials, and Twitter threads bemoaning the state of what once was a fairly simple tech stack. In this article …',
    href: 'https://css-tricks.com/an-introduction-to-web-components/'
  }
];

export const workProjects: Project[] = [
  {
    title: 'Auto Navigator',
    body: `Auto Navigator is Capital One's car-buying application. The search page is one of the most complex and data-intensive features on the site which was recently rewritten using the design system I architected, built and maintain. Migrating away from bespoke code to use the design system saw a dramatic drop in load time (around two seconds), greater consistency, developer velocity and a reduction in accessibility issues.`,
    href: 'https://www.capitalone.com/cars/search'
  },
  {
    title: 'Auto Prequalify',
    body: 'The Capital One Auto prequality page was written from the groupd up to utilize the FS Design System. This lead to a reduction in accessibility findings and better developer ergonomics.',
    href: 'https://www.capitalone.com/cars/prequalify'
  }
];
