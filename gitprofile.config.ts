// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'dfanso', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['dfanso/MatLab_Coursework'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'DFanso/QuickQuest',
          'DFanso/cine-magic-cinema',
          'DFanso/B2B_Portal',
          'DFanso/spring-boot-jwt-auth-api',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Quick Quest',
          description:
            'A platform connecting customers with laborers based on location and service needs. It uses MongoDB for geospatial queries and SSE for real-time chat. Technologies: Nest.js, Next.js, Python, MongoDB, Docker, AWS, PayPal.',
          imageUrl: 'https://dfanso.s3.ap-southeast-1.amazonaws.com/Frame%201474.ico?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkgwRgIhALMwt%2FxRksZ6KqICAuIpEtRVFzCiJk3PiDuIUH8D8kzLAiEAzNjP8SCOBph7YPtYDxxouetKkngtreHHuJuhlH6ztkAq5AIIVhACGgw3MjE5NDQ2OTcwMzEiDLwKXquu254RpITukCrBAtC6HK6Shi3XE%2BqtEF%2FcMA2Avs2za3zwVjvcbUhoyi1WiLCZhxMZSzqJahAzbxO034B1cmLDg51uS7E%2FfVOfCiPcSE4DBO8YlKBp%2FI1iuYqyrECXC9AFwbFObTOAi7LRkXfptM9x2DXwZaI5PNTI7mj7o5q4apTOvc4AOJvztJjDFmynKKqbYMRqvECfpaWns%2FqETDvJr9u6yzpnjE09rLUrFVUzHcjaAtPzMCzerISXPBjLkMLFMnAV2uFGx5qQvHN8VHMQx7GxTm8ZyVrrRDdQwAfZO8fAAUkbGKyuSkC0ZhI13CbjAtRWRuhw6MS%2Bab0PFDuIcdB%2B6PaxjCcNlTIKD%2B%2B0OKRdL5jpdkuE1wo5JXgGWeMPKDCyJ%2FiwobJELbkXAf5P5kUVB3Ymf8glgvmU1LPv9mBeg%2Fje%2BhfUR3tC2jCNuZ%2BzBjqyAhLOZzTWn4mMgorp%2FgE38bcMhw%2BZicubXHsewD4TJp5DgrMoYPOn%2FkIvCY5VFyCwQ51FU8%2FI8lDSYKbOYwAs5vSBnpaJaDOxyeL41vzH70NAvfAV%2FchdM8Z9GaQIuq6k0pBcEoF0yhMfy0SnKlqPmKehSWD2g%2B1BA68LQC27XfQUrK6e96G2%2B%2FOutl%2Fp1KLSRdi7%2BM%2BFRmky76gMYyPbpZXHP1Etthdxhdqy4ntHTum6GWu7DdkoCovXk6%2FCxJ7H%2BqK2CTiXMFCaYP0HyXMvEeTgsWYziszxSn16o1i5CfAZSHK%2BtVWKCR75vmUumjT9%2Fgvg9rHYUP1jWvPSto7X8cFFcPnxqk%2B1UG6x2GSCjPFHl11U%2BJq5kAq85QJfuSi6ih1Drw5hj7NWmlePrNPhOoNc4Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240611T054626Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA2QF2B3DDUYZBHAGQ%2F20240611%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=3b7e081761e2a473f591f7251bcb645280c52bd26ec83c12ffc3fbb14a75a300',
          link: 'DFanso/QuickQuest',
        },
        {
          title: 'techxeed',
          description:
            'A platform to hire Developers. Made Using Next.js,Nest.js, Stripe for Payment handling and subscription handling.',
          imageUrl:
            'https://techxeed-frontend.vercel.app/_next/static/media/logo.2f950c74.svg',
          link: 'https://techxeed-frontend.vercel.app/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Leo Gavin',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'leogavin',
    twitter: 'dfansoo',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'dfanso',
    dev: 'dfanso',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'leogavin123@outlook.com',
  },
  resume: {
    fileUrl: 'https://dfanso.s3.ap-southeast-1.amazonaws.com/Leo%20Gavin.pdf?response-content-disposition=attachment&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkgwRgIhALMwt%2FxRksZ6KqICAuIpEtRVFzCiJk3PiDuIUH8D8kzLAiEAzNjP8SCOBph7YPtYDxxouetKkngtreHHuJuhlH6ztkAq5AIIVhACGgw3MjE5NDQ2OTcwMzEiDLwKXquu254RpITukCrBAtC6HK6Shi3XE%2BqtEF%2FcMA2Avs2za3zwVjvcbUhoyi1WiLCZhxMZSzqJahAzbxO034B1cmLDg51uS7E%2FfVOfCiPcSE4DBO8YlKBp%2FI1iuYqyrECXC9AFwbFObTOAi7LRkXfptM9x2DXwZaI5PNTI7mj7o5q4apTOvc4AOJvztJjDFmynKKqbYMRqvECfpaWns%2FqETDvJr9u6yzpnjE09rLUrFVUzHcjaAtPzMCzerISXPBjLkMLFMnAV2uFGx5qQvHN8VHMQx7GxTm8ZyVrrRDdQwAfZO8fAAUkbGKyuSkC0ZhI13CbjAtRWRuhw6MS%2Bab0PFDuIcdB%2B6PaxjCcNlTIKD%2B%2B0OKRdL5jpdkuE1wo5JXgGWeMPKDCyJ%2FiwobJELbkXAf5P5kUVB3Ymf8glgvmU1LPv9mBeg%2Fje%2BhfUR3tC2jCNuZ%2BzBjqyAhLOZzTWn4mMgorp%2FgE38bcMhw%2BZicubXHsewD4TJp5DgrMoYPOn%2FkIvCY5VFyCwQ51FU8%2FI8lDSYKbOYwAs5vSBnpaJaDOxyeL41vzH70NAvfAV%2FchdM8Z9GaQIuq6k0pBcEoF0yhMfy0SnKlqPmKehSWD2g%2B1BA68LQC27XfQUrK6e96G2%2B%2FOutl%2Fp1KLSRdi7%2BM%2BFRmky76gMYyPbpZXHP1Etthdxhdqy4ntHTum6GWu7DdkoCovXk6%2FCxJ7H%2BqK2CTiXMFCaYP0HyXMvEeTgsWYziszxSn16o1i5CfAZSHK%2BtVWKCR75vmUumjT9%2Fgvg9rHYUP1jWvPSto7X8cFFcPnxqk%2B1UG6x2GSCjPFHl11U%2BJq5kAq85QJfuSi6ih1Drw5hj7NWmlePrNPhOoNc4Q%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240611T054757Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA2QF2B3DDUYZBHAGQ%2F20240611%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=afb2fac21f76e01af5b5f5105986c6420112cdd0e4d3fa3c8b173378b4f3186a', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Spring Boot',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'AWS',
    'DevOps',
    'CI/CD',
    'Tailwind',
    'Next.js',
    'React.js',
    'C#',
    'ASP.Net',
    'Jenkins',
  ],
  experiences: [
    {
      company: 'Fiverr',
      position: 'Freelance Software Engineer',
      from: 'May 2023',
      to: 'Present',
      companyLink: 'https://fiverr.com',
    },
    {
      company: 'Melstasoft',
      position: ' Intern Software Engineer',
      from: 'May 2022',
      to: 'August 2022',
      companyLink: 'http://melstasoft.com/',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'University of Plymouth',
      degree: 'BSc.(Hons) Software Engineering',
      from: '2020',
      to: '2024',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `<a 
      class="text-primary" href="https://github.com/dfanso/gitprofile"
      target="_blank"
      rel="noreferrer"
    >portfolio.dfanso.dev</a> ❤️`,

  enablePWA: true,
};

export default CONFIG;
