interface Experience {
  startDate: string;
  endDate: string;
  company: string;
  title: string;
  description: string[];
  shortDescription: string;
  href: string;
}

export const resumeExperience: Experience[] = [
  {
    company: 'Slack',
    startDate: 'Jan. 2024',
    endDate: 'Present',
    title: 'Staff Software Engineer, Front-End',
    shortDescription: 'Coming soon',
    description: ['Coming soon'],
    href: 'https://slack.com'
  },
  {
    company: 'Capital One',
    startDate: 'April 2016',
    endDate: 'Dec. 2023',
    title: 'Senior Lead Front-End Developer',
    shortDescription: 'Lead front-end developer on Capital One\'s design system. In this role I work with cross-functional teams across the enterprise to deliver accessible, performant, pixel-perfect code to millions of customers.',
    description: [
      'Led the strategy, architecture and development of a design system using ES6+/TypeScript, modern CSS3+ with PostCSS and Sass and semantic, accessible HTML5 supporting more than 250 projects increasing product velocity and cutting page load times by up to two seconds.',
      'Increased year-over-year adoption of the design system by more than 140 percent by creating programs and relationships with co- creators.',
      'Extensive application and library development touching millions of customers using various front-end frameworks including Lit, React and Angular as well as more modern tools like Next, Vite, Solid and Astro.',
      'Worked as part of a cross-functional team with design partners applying object-oriented design principles to design and technical challenges.',
      'Responsible for the creation and maintenance of CICD pipeline using Jenkins and Docker.',
      'Mentored and coached developers through private one-on-one sessions and led enterprise Front-End Community of Practice.',
      'Wrote back-end services using Node.js and Express.'
    ],
    href: 'https://www.capitalone.com'
  },
  {
    company: 'Barclays',
    startDate: 'Feb. 2015',
    endDate: 'April 2016',
    title: 'Senior Front-End Developer',
    shortDescription: 'Responsible for the technical architecture and development of Barclays’ retail online banking platforms using AngularJS, Sass, NodeJS and jQuery.',
    description: [
      'Responsible for the technical architecture and development of Barclays’ retail online banking platforms using AngularJS, Sass, NodeJS and jQuery.',
      'Mocked backends using NodeJS and Express.',
      'Led the development of a reusable form generation and validation strategy applied across the Barclays enterprise digital assets in AngularJS.',
      'Worked with cross-functional teams in design and product to rewrite Barclays’ small loans application from the ground up.'
    ],
    href: 'https://barclays.co.uk'
  },
  {
    company: 'Thomson Reuters Tax & Accounting',
    startDate: 'May 2013',
    endDate: 'Feb. 2015',
    title: 'Webmaster',
    shortDescription: 'Managed Thomson Reuters Tax & Accounting website using PHP (Wordpress), HTML5, CSS3, JavaScript (jQuery and Angular.JS) and search engine optimization',
    description: [
      'Managed Thomson Reuters Tax & Accounting website using PHP (Wordpress), HTML5, CSS3, JavaScript (jQuery and Angular.JS) and search engine optimization',
      'Automated marketing pages by using Salesforce and Eloqua APIs.'
    ],
    href: 'https://tax.thomsonreuters.com/en'
  }
]
