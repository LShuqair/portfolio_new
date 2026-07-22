// All content sourced directly from Luna Shuqair's resume.
// Facts, dates, and wording preserved — presentation only is redesigned.

export const profile = {
  name: 'Luna Shuqair',
  email: 'luna.shuqair@2prodtech.com',
  phone: '(571) 606-0066',
  clearance: 'TOP SECRET',
  status: 'ACTIVE',
  summary:
    'Security-cleared technology professional with Top Secret clearance and experience in Facility Security Officer (FSO) operations, front-end development, and cloud environments. Skilled in NISPOM compliance, personnel security, access control, risk management, and safeguarding classified information. Proficient in web development, CI/CD pipelines, AWS cloud services, and IT support. Seeking roles in cybersecurity, IT security, government contracting, and cleared technical positions.',
}

export const coreCompetencies = [
  'Top Secret Clearance',
  'NISPOM Compliance',
  'Facility Security Officer (FSO)',
  'DCSA',
  'JPAS/DISS',
  'e-QIP',
  'Access Control',
  'Risk Management',
  'Information Security',
  'Cybersecurity',
  'AWS Cloud',
  'CI/CD',
  'Jenkins',
  'React',
  'JavaScript',
  'IT Support',
  'Troubleshooting',
  'System Administration',
  'Security Training',
]

// "Case files" — work experience, ordered most recent first
export const caseFiles = [
  {
    id: 'CF-01',
    org: '2Prod Technology Corp',
    role: 'Facility Security Officer (FSO)',
    period: 'Nov 2025 – Present',
    status: 'ACTIVE',
    duties: [
      'Ensure compliance with NISPOM and DCSA regulations',
      'Manage personnel security clearance processing (DISS, e-QIP)',
      'Oversee classified access control and secure document handling',
      'Conduct security training and risk assessments',
    ],
  },
  {
    id: 'CF-02',
    org: 'Freelance',
    role: 'Front-End Developer',
    period: 'Jan 2023 – Present',
    status: 'ACTIVE',
    duties: [
      'Developed React-based web applications',
      'Built CI/CD pipelines using Jenkins',
      'Deployed applications on AWS and Heroku',
    ],
  },
  {
    id: 'CF-03',
    org: 'National Low Income Housing Coalition',
    role: 'Drupal Developer',
    period: 'Apr 2021 – May 2021',
    status: 'CLOSED',
    duties: ['Developed Drupal websites and custom modules'],
  },
]

export const education = [
  {
    school: 'George Washington University',
    program: 'Full Stack Development Certificate',
  },
  {
    school: 'George Washington University',
    program: 'Associate degree – Information Technology',
  },
]

export const technicalSkills = [
  'HTML',
  'CSS',
  'JavaScript',
  'SQL',
  'React',
  'AWS',
  'MongoDB',
  'REST APIs',
  'Git',
  'Jenkins',
]

export const certifications = [
  { name: 'Active Top Secret Clearance', status: 'ACTIVE' },
  { name: 'ServiceNow Certified System Administrator', status: 'IN PROGRESS' },
]

export const about = {
  photo: '/images/luna-badge.jpg',
  lede: 'I bridge thoughtful interface design with modern React development to create fast, accessible, and user-focused web applications.',
  paragraphs: [
    'I enjoy transforming ideas into intuitive digital experiences by building responsive interfaces, reusable components, and clean, maintainable code.',
    'My approach combines attention to visual design with a strong focus on performance, accessibility, and usability. Whether developing a new feature or refining an existing product, I strive to create applications that are scalable, reliable, and enjoyable to use.',
    "I'm committed to continuous learning and staying current with modern front-end technologies, always looking for opportunities to build solutions that make a meaningful impact for both users and businesses.",
  ],
}

export const projects = [
  {
    id: 'PR-01',
    name: 'Spice-A-Holic',
    role: 'Team project · contributor',
    description:
      'Full-stack e-commerce storefront for spices, extracts, and teas. Account signup with member discounts, shopping cart, checkout, order history, product reviews and ratings, and an admin panel for inventory and product uploads.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Passport', 'Heroku'],
    live: 'https://spiceaholic.herokuapp.com/',
    source: 'https://github.com/LShuqair/project3_store',
  },
  {
    id: 'PR-02',
    name: 'Budget Tracker',
    role: 'Progressive web app',
    description:
      'Tracks expenses and deposits with offline support — transactions entered without a connection sync and update the running total automatically once the app is back online.',
    tags: ['JavaScript', 'PWA', 'Express', 'Heroku'],
    live: 'https://obscure-basin-36143.herokuapp.com/',
    source: 'https://github.com/LShuqair/budget-trackers',
  },
  {
    id: 'PR-03',
    name: 'Fitness Tracker',
    role: 'Full-stack application',
    description:
      'Log and track daily workouts across multiple exercises — name, type, weight, sets, reps, and duration — with progress visualized through graphs over time.',
    tags: ['JavaScript', 'Node.js', 'Express', 'Heroku'],
    live: 'https://warm-retreat-41164.herokuapp.com/',
    source: 'https://github.com/LShuqair/fitness-tracker',
  },
  {
    id: 'PR-04',
    name: 'Weather Dashboard',
    role: 'Front-end application',
    description:
      'Retrieves current conditions and a 5-day forecast for any searched city, built against a public weather API.',
    tags: ['JavaScript', 'HTML', 'CSS', 'REST API'],
    live: 'https://lshuqair.github.io/Weather-Dashboard-API/',
    source: 'https://github.com/LShuqair/Weather-Dashboard-API',
  },
]
