export const personal = {
  name: 'Anudeep Debbata',
  title: 'Front-End Engineer',
  specialties: 'React.js · TypeScript · Redux · JavaScript (ES6+)',
  hook: '7+ years building enterprise-scale SPAs at Walmart and Microsoft.',
  location: 'Bengaluru, India',
  email: 'Debbata.anudeep@gmail.com',
  linkedin: 'https://linkedin.com/in/anudeep-d-5644711b8',
  github: 'https://github.com/Anudepp',
  rotatingTaglines: [
    'I build fast SPAs.',
    'I ship pixel-perfect UI.',
    'I fix what\'s broken.',
    'I migrate to TypeScript.',
    'I optimize Core Web Vitals.',
  ],
};

export const summary = `Front-End Engineer with 7+ years of experience building enterprise-scale SPAs at Walmart and Microsoft, specializing in React.js performance optimization, TypeScript migrations, and API integrations. Proven track record of reducing issue resolution time by 30%, improving Core Web Vitals, and leading end-to-end delivery of production-grade applications. Experienced in Agile teams, CI/CD pipelines (Azure DevOps), and cross-functional collaboration across the full SDLC.`;

export const stats = [
  { value: 7, suffix: '+', label: 'Years Experience' },
  { value: 40, suffix: '%', label: 'Performance Boost' },
  { value: 30, suffix: '%', label: 'Faster Issue Resolution' },
  { value: 75, suffix: '%', label: 'Test Coverage' },
  { value: 15, suffix: '+', label: 'Reusable Components' },
  { value: 90, suffix: '+', label: 'Lighthouse Score' },
];

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'Layout',
    skills: ['React.js', 'Redux', 'React Router', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Material-UI', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'State Management',
    icon: 'GitBranch',
    skills: ['Redux', 'React Context API', 'useState', 'useReducer', 'useEffect', 'useMemo', 'useCallback'],
  },
  {
    title: 'APIs & Data',
    icon: 'Network',
    skills: ['RESTful APIs', 'GraphQL', 'Axios', 'Apollo Client', 'urql'],
  },
  {
    title: 'Performance',
    icon: 'Gauge',
    skills: ['Code Splitting', 'Lazy Loading', 'React.memo', 'List Virtualization (react-window)', 'Webpack', 'Vite'],
  },
  {
    title: 'Testing',
    icon: 'FlaskConical',
    skills: ['Jest', 'React Testing Library', 'SonarQube', 'Chrome DevTools', 'Redux DevTools'],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'Cloud',
    skills: ['Azure DevOps (YAML CI/CD)', 'AWS (S3, Workspaces)', 'Docker', 'ARM Templates', 'Terraform', 'Bicep'],
  },
  {
    title: 'Methodologies',
    icon: 'Target',
    skills: ['Agile/Scrum', 'WCAG Accessibility', 'Responsive Design', 'Performance Optimization', 'Unit Testing'],
  },
];

export interface FreelanceProject {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  highlights: string[];
  link: string;
  displayUrl: string;
  image: string;
}

export const freelanceProjects: FreelanceProject[] = [
  {
    name: 'Ministry of Coffee Affairs',
    image:'/projects/coffee.png',
    tagline: 'B2B coffee company website',
    description:
      'Sole developer for end-to-end design and delivery of a B2B coffee company website — wireframe to production with a focus on brand storytelling and conversion.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'React Router'],
    highlights: [
      'Improved LCP to under 2.5s with 90+ Google Lighthouse score via lazy loading, code-splitting, and image optimization.',
      'Configured React Router for seamless SPA navigation across multiple pages with mobile-first responsive layouts.',
      'Delivered complete end-to-end build from wireframes to production deployment.',
      'Deployed via GoDaddy',
    ],
    link: 'https://ministryofcoffeeaffairs.com/',
    displayUrl: 'ministryofcoffeeaffairs.com',
  },
  {
    name: 'Intiruchulu',
    image:'/projects/intiruchulu.png',
    tagline: 'Home made food delivery platform',
    description:
      'Sole developer for end-to-end design and delivery of a home made food delivery platform — wireframe to production with a focus on brand storytelling and conversion.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'React Router'],
    highlights: [
      'Built mobile-first responsive layouts with accessible, semantic HTML5 and ARIA support.',
      'Optimized Core Web Vitals with code-splitting, lazy loading, and image optimization.',
      'Deployed via Vercel with continuous integration from Git.',
      
    ],
    link: 'https://intiruchulu-liard.vercel.app/',
    displayUrl: 'intiruchulu-liard.vercel.app',
  },
];

export const experiences = [
  {
    role: 'Software Engineer — Front-End',
    company: 'Walmart',
    via: 'via Orabase Solutions LLC',
    location: 'Bentonville, USA',
    period: 'Dec 2021 – Jul 2024',
    current: false,
    achievements: [
      'Built and maintained 15+ reusable React component libraries across multiple internal applications, reducing UI dev time ~25% for downstream teams.',
      'Architected global state management using Redux and React hooks, eliminating prop-drilling across 3 large-scale SPAs serving millions of Walmart users.',
      'Integrated RESTful and GraphQL APIs using Axios, Apollo Client, and urql — reduced average API response latency by 20%.',
      'Boosted application performance by 40% through code-splitting, lazy loading, memoization, and list virtualization on 10,000+ row datasets.',
      'Led TypeScript migration of 2 legacy React projects, reducing runtime errors by 35%.',
      'Reduced production issue resolution time by 30% using Chrome/React/Redux DevTools.',
      'Increased unit test coverage from ~30% to 75% (Jest, React Testing Library); integrated into Azure DevOps CI/CD, cutting regression bugs by 20%.',
      'Improved accessibility to WCAG 2.1 AA using semantic HTML5 and ARIA.',
    ],
  },
  {
    role: 'Azure Support Engineer',
    company: 'Microsoft',
    via: 'via Orabase Solutions LLC',
    location: 'Irving, USA',
    period: 'Oct 2019 – Nov 2021',
    current: false,
    achievements: [
      'Supported Azure PaaS/IaaS applications (.NET, API Management, Service Bus, Event Hub), maintaining 99.9% SLA compliance.',
      'Developed IaC using ARM Templates, Bicep, Terraform — reduced manual deployment effort by 60%.',
      'Built YAML-based CI/CD pipelines in Azure DevOps, authored Bash automation — reduced release cycle time by 30%.',
      'Monitored application health via Azure Monitor, Application Insights, Log Analytics across 10+ enterprise accounts.',
    ],
  },
  {
    role: 'Software Engineer — UI',
    company: 'Cognitive Scale',
    via: 'via Orabase Solutions LLC',
    location: 'Austin, USA',
    period: 'May 2019 – Sep 2019',
    current: false,
    achievements: [
      'Resolved 20+ UI bugs across a data intelligence platform, improving consistency across mobile/tablet viewports.',
      'Supported AWS-hosted frontend apps integrating S3 and Workspaces.',
    ],
  },
  {
    role: 'Application Developer — Front-End',
    company: 'CBRE',
    via: 'via Orabase Solutions LLC',
    location: 'Dallas, USA',
    period: 'Aug 2017 – Apr 2019',
    current: false,
    achievements: [
      'Developed 10+ reusable React (v15) components for the AVA property management platform; integrated REST APIs for 500+ property managers.',
      'Established Git branching/PR workflows, reducing merge conflicts by 40%.',
      'Contributed to full Agile lifecycle across 8 consecutive sprints.',
    ],
  },
];

export const education = [
  {
    degree: 'M.S. Computer Science',
    institution: 'Fairleigh Dickinson University',
    location: 'New Jersey, USA',
    period: '2015 – 2017',
  },
  {
    degree: 'B.E. Electrical & Electronics',
    institution: 'JNTU',
    location: 'Hyderabad, India',
    period: '2009 – 2013',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
