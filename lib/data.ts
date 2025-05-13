import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'shreyasssaunshi@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Shreyas , I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/shreyassaunshi' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/shreyassaunshi' },
    { name: 'instagram', url: 'https://www.instagram.com/shreyassaunshi' },
];

export const MY_SKILLS = {
    core: [
        {
            name: 'Kali Linux',
            icon: '/logo/kali.png',
        },
        {
            name: 'Metasploit',
            icon: '/logo/metasploit.png',
        },
        {
            name: 'Burp Suite',
            icon: '/logo/burp.png',
        },
        {
            name: 'Nmap',
            icon: '/logo/nmap.png',
        },
        {
            name: 'Wireshark',
            icon: '/logo/wireshark.png',
        },
        {
            name: 'John the Ripper',
            icon: '/logo/john.png',
        },
        {
            name: 'Aircrack-ng',
            icon: '/logo/aircrack.png',
        },
        {
            name: 'Cobalt Strike',
            icon: '/logo/cobalt-strike.png',
        },
        {
            name: 'Empire',
            icon: '/logo/empire.png',
        },
        {
            name: 'BloodHound',
            icon: '/logo/bloodhound.png',
        },
        {
            name: 'Netcat',
            icon: '/logo/netcat.png',
        },
    ],
    techniques: [
        {
            name: 'Penetration Testing',
            icon: '/logo/penetration-testing.png',
        },
        {
            name: 'Buffer overflow',
            icon: '/logo/penetration-testing.png',
        },
        {
            name: 'Privilege Escalation',
            icon: '/logo/buffer-overflow.png',
        },
        {
            name: 'Lateral Movement',
            icon: '/logo/lateral-movement.png',
        },
        {
            name: 'Exploit Development',
            icon: '/logo/exploit-development.png',
        },
        {
            name: 'Social Engineering',
            icon: '/logo/social-engineering.png',
        },
        {
            name: 'Malware Analysis',
            icon: '/logo/malware-analysis.png',
        },
        {
            name: 'Physical Security Assessment',
            icon: '/logo/physical-security.png',
        },
    ],
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Nest.js',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Akriti Precision Systems',
        slug: 'akriti-precision-systems',
        liveUrl: 'https://akriti-precision.vercel.app/',
        year: 2025,
        description: `
      A comprehensive web platform built for Akriti Precision Systems to present their cutting-edge engineering solutions, detailed service offerings, and industrial-grade product lineup. <br/><br/>
      
      Key Features:<br/>
      <ul>
        <li>🔧 Engineering Solutions Showcase: Visually engaging breakdown of core services</li>
        <li>📘 Knowledge Base: Informative content modules on precision engineering</li>
        <li>📦 Product Listings: Categorized product display with specs and filtering</li>
        <li>📱 Mobile-Optimized: Fully responsive across all modern devices</li>
        <li>🚀 High-Speed Experience: Next.js performance optimizations using ISR</li>
      </ul><br/>
    
      Technical Highlights:
      <ul>
        <li>Developed a dynamic filtering system for product exploration</li>
        <li>Customized Payload CMS setup for seamless content and product management</li>
        <li>Built responsive, consistent UI components using shadcn and Tailwind</li>
        <li>Implemented secure and efficient API integration for real-time updates</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Led the end-to-end development process:
      <ul>
        <li>✅ Backend: Structured Payload CMS with custom models for services, knowledge base, and product specs</li>
        <li>🎨 Frontend: Developed all UI layouts and animations with Tailwind CSS and shadcn</li>
        <li>🔄 Data Handling: Efficient state and API management for smooth UX</li>
        <li>🖥️ CMS Customization: Tailored admin panel with access control for editors</li>
        <li>🚀 Deployment: Configured automated deployments and hosting on Vercel</li>
        <li>🔌 Integration: Added external libraries for performance monitoring and analytics</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'Tailwind CSS',
            'Typescript',
            'Three.js',
            'Supabase',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/akriti-precision.webp',
        longThumbnail: '/projects/long/akriti-precision.webp',
        images: [
            '/projects/images/akriti-precision-1.webp',
            '/projects/images/akriti-precision-2.webp',
        ],
    },
{
  title: 'Variant Group Extension - OpenCart',
  slug: 'opencart-variant-extension',
  liveUrl: 'https://github.com/ShreyasSaunshi/opencart_variant_extension',
  year: 2025,
  description: `
    The Variant Group Extension for OpenCart enhances product presentation and management by allowing multiple variants (e.g., sizes, colors, models) to be grouped under a single master product. This improves user experience on the storefront and simplifies catalog maintenance for store admins. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>🧩 Group multiple products as variants under a unified product page</li>
      <li>🔁 Seamless variant switching via buttons, dropdowns, or image swatches</li>
      <li>🔗 SEO-friendly shared URL structure using query parameters or AJAX updates</li>
      <li>🎨 Custom UI options for variant selectors (e.g., color swatches, size buttons)</li>
      <li>⚙️ Admin panel tools to easily link/unlink variant products</li>
      <li>💰 Variant-specific pricing, stock, and images supported</li>
      <li>🌐 Fully compatible with multi-language and multi-store setups</li>
    </ul>
  `,
  role: `
    Full-Stack Developer <br/>
    Designed and implemented the extension:
    <ul>
      <li>✅ Backend: Developed variant grouping logic and admin controls in PHP</li>
      <li>🎨 Frontend: Integrated dynamic variant switchers using JavaScript and AJAX</li>
      <li>🔍 SEO: Ensured clean and optimized URL structures for all variants</li>
      <li>🛠️ Compatibility: Built with native OpenCart conventions for theme and store support</li>
      <li>📦 Packaged: Published and documented on GitHub for community use</li>
    </ul>
  `,
  techStack: [
    'PHP',
    'JavaScript',
    'OpenCart',
    'AJAX',
  ],
  thumbnail: '/projects/thumbnail/opencart-variant.webp',
  longThumbnail: '/projects/long/opencart-variant.webp',
  images: [
    '/projects/images/opencart-variant-1.webp',
    '/projects/images/opencart-variant-2.webp',
  ],
},
    {
  title: 'Captured Thinkings',
  slug: 'captured-thinkings',
  liveUrl: 'https://capturedthinkings.vercel.app/',
  year: 2025,
  description: `
    A minimalistic poem-sharing blog platform that allows users to write, share, and explore thoughtful poetry. Built to celebrate creative expression, Captured Thinkings provides a clean and inviting interface for both readers and writers. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>✍️ Poem Uploads: Users can submit their original poems through a sleek UI</li>
      <li>📚 Explore Poems: Browse all entries with real-time loading and filtering</li>
      <li>❤️ Likes & Engagement: Readers can like and appreciate others' works</li>
      <li>🌓 Dark/Light Mode: Toggle between reading-friendly themes</li>
      <li>📱 Responsive Layout: Optimized for seamless reading on any device</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Integrated Supabase for real-time data storage, user-generated content, and authentication</li>
      <li>Used React + TypeScript for maintainable component architecture</li>
      <li>Styled entirely with Tailwind CSS for a smooth and cohesive design</li>
      <li>Implemented lazy loading and local storage for improved performance and persistence</li>
    </ul>
  `,
  role: `
    Full-Stack Developer <br/>
    Designed and built the platform from scratch:
    <ul>
      <li>✅ Backend: Structured Supabase tables and authentication for poem and user data</li>
      <li>🎨 Frontend: Developed dynamic pages and animations with React, Tailwind, and TypeScript</li>
      <li>🔄 State Handling: Used local state and hooks for responsive UX and poem persistence</li>
      <li>🧑‍💻 Admin Logic: Added basic moderation controls and protected routes</li>
      <li>🚀 Deployment: Configured build and deployment flow using Vercel</li>
    </ul>
  `,
  techStack: [
    'React.js',
    'Typescript',
    'Supabase',
    'Tailwind CSS',
    'Vercel',
  ],
  thumbnail: '/projects/thumbnail/captured-thinkings.webp',
  longThumbnail: '/projects/long/captured-thinkings.webp',
  images: [
    '/projects/images/captured-thinkings-1.webp',
    '/projects/images/captured-thinkings-2.webp',
  ],
},
{
  title: 'Personal Portfolio',
  slug: 'personal-portfolio',
  liveUrl: 'https://shreyassaunshi.vercel.app/',
  year: 2025,
  description: `
    A sleek, high-performance personal portfolio built using Next.js and TypeScript to showcase projects, skills, and experience with a focus on design, accessibility, and performance. The site is optimized for fast loading, mobile responsiveness, and modern web aesthetics. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>🧑‍💻 Project Showcase: Visually engaging layout to highlight key projects</li>
      <li>⚡ Performance Optimized: Utilizes next/font for faster font rendering (Geist)</li>
      <li>🧭 Smooth Navigation: Section-based scroll and routing</li>
      <li>📱 Fully Responsive: Works flawlessly across all device types</li>
      <li>🖌️ Custom Styling: Combined SASS modules and Tailwind CSS for flexible design</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Developed with Next.js and TypeScript for type-safe and performant code</li>
      <li>Font rendering optimized using Vercel’s next/font with Geist family</li>
      <li>Integrated Tailwind CSS with SASS for modular and responsive styling</li>
      <li>Deployed on Vercel with CI/CD for fast global delivery</li>
    </ul>
  `,
  role: `
    Designer & Developer <br/>
    Independently developed and deployed:
    <ul>
      <li>🎨 UI/UX: Designed custom responsive UI using Tailwind CSS and SASS</li>
      <li>⚙️ Codebase: Built with Next.js and TypeScript for maintainable structure</li>
      <li>🚀 Optimization: Implemented performance tuning and font optimization</li>
      <li>📤 Deployment: Set up Git-based deployments on Vercel with environment config</li>
    </ul>
  `,
  techStack: [
    'Next.js',
    'TypeScript',
    'SASS',
    'Tailwind CSS',
    'next/font',
    'Vercel',
  ],
  thumbnail: '/projects/thumbnail/portfolio.webp',
  longThumbnail: '/projects/long/portfolio.webp',
  images: [
    '/projects/images/portfolio-1.webp',
    '/projects/images/portfolio-2.webp',
  ],
},
{
  title: 'Personal Finance Tracker',
  slug: 'personal-finance-tracker',
  liveUrl: 'https://shreyas-personal-finance-tracker.vercel.app/',
  year: 2025,
  description: `
    A simple yet powerful personal finance tracker built using Next.js to help users efficiently manage their income, expenses, and savings goals. The app is designed with a clean UI, secure data handling, and insightful visualizations to promote better financial habits. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>💸 Expense & Income Tracking: Add, edit, and categorize transactions easily</li>
      <li>📊 Visual Insights: Interactive charts and graphs to analyze trends</li>
      <li>🎯 Budgeting Tools: Set monthly budgets and track against actuals</li>
      <li>🔐 User Authentication: Secure login system to protect personal data</li>
      <li>📱 Fully Responsive: Optimized for both desktop and mobile experiences</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Built with Next.js and React for fast performance and server-side rendering</li>
      <li>State managed using React Context API for simplicity and efficiency</li>
      <li>Styled using Tailwind CSS to ensure consistency and responsiveness</li>
      <li>Authentication and local/session storage for persistent user sessions</li>
      <li>Deployed via Vercel with CI/CD for seamless updates</li>
    </ul>
  `,
  role: `
    Full-Stack Developer <br/>
    Built and maintained the entire application:
    <ul>
      <li>✅ Frontend: Developed UI using Next.js, React, and Tailwind CSS</li>
      <li>📈 Charts: Integrated chart libraries for financial data visualization</li>
      <li>🛠️ State Management: Handled global state using React Context</li>
      <li>🔐 Auth: Implemented secure user authentication system</li>
      <li>🚀 Deployment: Hosted on Vercel with environment config and build optimizations</li>
    </ul>
  `,
  techStack: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'React Context',
  ],
  thumbnail: '/projects/thumbnail/personal-finance.webp',
  longThumbnail: '/projects/long/personal-finance.webp',
  images: [
    '/projects/images/personal-finance-1.webp',
    '/projects/images/personal-finance-2.webp',
  ],
},
      {
  title: 'SMB Scanner',
  slug: 'smb-scanner',
  liveUrl: 'https://github.com/shreyassaunshi/custom_smb-scanner', 
  year: 2024,
  description: `
    A powerful command-line tool designed for security researchers and penetration testers to enumerate and analyze SMB (Server Message Block) shares across networks. Built for Kali Linux environments, this scanner helps identify misconfigured or exposed SMB shares for further exploitation. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>🔍 Network Scanning: Quickly scan IP ranges for open SMB ports (139, 445)</li>
      <li>📂 Share Enumeration: List available SMB shares, access permissions, and guest access status</li>
      <li>🔐 Credential Support: Supports brute-force or login using provided user credentials</li>
      <li>📦 Dockerized: Easily deploy and run in isolated environments via Docker</li>
      <li>📝 Report Generation: Outputs detailed results in structured, readable format</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Developed in Python using socket, smbprotocol, and argparse libraries</li>
      <li>Dockerized the tool for consistent deployment across environments</li>
      <li>Integrated Git for version control and community contributions</li>
      <li>Tested on Kali Linux with standard tools for offensive security tasks</li>
    </ul>
  `,
  role: `
    Developer & Maintainer <br/>
    Built and maintained the tool for practical cybersecurity use cases:
    <ul>
      <li>✅ Core Development: Wrote Python scripts for SMB detection, enumeration, and reporting</li>
      <li>🐳 Docker Integration: Packaged the tool into a Docker container for portable execution</li>
      <li>🔁 Version Control: Managed open-source codebase with Git and documented usage</li>
      <li>🧪 Testing: Verified functionality in various network configurations on Kali Linux</li>
    </ul>
  `,
  techStack: [
    'Python',
    'Docker',
    'Git',
    'Kali Linux',
  ],
  thumbnail: '/projects/thumbnail/smb-scanner.webp',
  longThumbnail: '/projects/long/smb-scanner.webp',
  images: [
    '/projects/images/smb-scanner-1.webp',
    '/projects/images/smb-scanner-2.webp',
  ],
},
    {
  title: 'EC Resource Hub',
  slug: 'ec-resource-hub',
  liveUrl: 'https://ecnitte.vercel.app/',
  year: 2024,
  description: `
    A centralized educational platform designed for Electronics and Communication (EC) students to access and download academic resources, including PDFs, notes, and reference materials, with ease. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>📂 Resource Library: Categorized materials like notes, question papers, and project files</li>
      <li>🔍 Search & Filter: Quickly find documents by subject, semester, or file type</li>
      <li>⬇️ Direct Downloads: One-click access to all hosted materials</li>
      <li>📱 Responsive UI: Optimized for desktops, tablets, and mobile devices</li>
      <li>⚡ Fast Load Time: Lightweight frontend with efficient asset handling</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Built using React with modular component architecture for easy scalability</li>
      <li>Integrated secure backend for handling resource uploads and retrieval</li>
      <li>Responsive UI components styled with Tailwind CSS</li>
      <li>Used TypeScript for type-safe development and better maintainability</li>
    </ul>
  `,
  role: `
    Full-Stack Developer <br/>
    Led the development and deployment of the entire platform:
    <ul>
      <li>✅ Backend: Designed and implemented resource data structure and download logic</li>
      <li>🎨 Frontend: Created responsive layouts and intuitive UX with React and Tailwind</li>
      <li>🔄 State Management: Handled filtering and file operations with clean React patterns</li>
      <li>🛠️ Admin Interface: Built lightweight upload panel for admins</li>
      <li>🚀 Deployment: Deployed and maintained on Vercel with continuous updates</li>
    </ul>
  `,
  techStack: [
    'React.js',
    'Tailwind CSS',
    'Typescript',
    'Vercel',
  ],
  thumbnail: '/projects/thumbnail/ec-resource-hub.webp',
  longThumbnail: '/projects/long/ec-resource-hub.webp',
  images: [
    '/projects/images/ec-resource-1.webp',
    '/projects/images/ec-resource-2.webp',
  ],
},
{
  title: 'HackerEarth Hub NMAMIT',
  slug: 'hackerearth-hub',
  liveUrl: 'https://hackerearthhub-nmamit.vercel.app/', 
  year: 2024,
  description: `
    A centralized web platform for the college's HackerEarth club, enabling students to log in, track coding progress, and participate in challenges. The platform fosters competitive coding culture by offering personalized dashboards and a dynamic leaderboard. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>🔐 Student Login: Secure authentication for club members</li>
      <li>📊 Dashboard: Personal coding stats, problem-solving history, and event logs</li>
      <li>🏆 Leaderboard: Real-time ranking of active members based on coding activity</li>
      <li>📅 Club Events: Section for upcoming challenges and announcements</li>
      <li>📱 Mobile-Responsive: Designed to work seamlessly across devices</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Frontend built with React.js and styled using Tailwind CSS for a clean and dynamic UI</li>
      <li>Backend powered by Node.js with RESTful APIs to manage users, scores, and data</li>
      <li>Integrated leaderboard system reflecting live updates from coding platforms or submissions</li>
      <li>Role-based access to distinguish between admins and students</li>
    </ul>
  `,
  role: `
    Full-Stack Developer <br/>
    Developed and maintained the entire application lifecycle:
    <ul>
      <li>✅ Backend: Built Node.js APIs for authentication, leaderboard, and data management</li>
      <li>🎨 Frontend: Designed and implemented all UI components using React and Tailwind</li>
      <li>🔄 Data Sync: Handled coding data fetching and ranking logic for leaderboard</li>
      <li>🔐 Security: Implemented login protection and role management</li>
      <li>🚀 Deployment: Deployed and maintained on Vercel/Render with automatic updates</li>
    </ul>
  `,
  techStack: [
    'React.js',
    'Tailwind CSS',
    'Node.js',
  ],
  thumbnail: '/projects/thumbnail/hackerearth-hub.webp',
  longThumbnail: '/projects/long/hackerearth-hub.webp',
  images: [
    '/projects/images/hackerearth-hub-1.webp',
    '/projects/images/hackerearth-hub-2.webp',
  ],
},
    {
  title: 'Voluntariuss',
  slug: 'voluntariuss-volunteer-ngo-platform',
  liveUrl: 'https://voluntariuss.netlify.app/',
  year: 2023,
  description: `
    Voluntariuss is a web platform designed to connect passionate volunteers with NGOs seeking support. It provides a space for mutual discovery, communication, and collaboration between individuals looking to give back and organizations in need of manpower and talent. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>👥 User Registration & Authentication: Secure signup/login with profile management</li>
      <li>🏢 NGO Listings: NGOs can register, showcase their mission, and post volunteer opportunities</li>
      <li>🔍 Volunteer Search: Volunteers can browse and filter opportunities based on interests and skills</li>
      <li>💬 Real-time Messaging: In-platform chat system to connect volunteers and NGOs</li>
      <li>🛠️ Admin Dashboard: Admins can oversee, approve, or moderate content and user activity</li>
    </ul>
  `,
  role: `
    Full-Stack Developer <br/>
    Designed and developed the platform from scratch:
    <ul>
      <li>🧩 Backend: Built PHP-based logic for user auth, messaging, and content management</li>
      <li>🗃️ Database: Structured SQL schema to support users, NGOs, chats, and opportunity listings</li>
      <li>🎨 Frontend: Developed responsive interfaces using HTML, CSS, and vanilla JS</li>
      <li>⚙️ Admin Tools: Implemented admin panel for moderation and user control</li>
    </ul>
  `,
  techStack: [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'SQL',
  ],
  thumbnail: '/projects/thumbnail/voluntariuss.webp',
  longThumbnail: '/projects/long/voluntariuss.webp',
  images: [
    '/projects/images/voluntariuss-1.webp',
    '/projects/images/voluntariuss-2.webp',
  ],
},
{
  title: 'Interio E-Commerce',
  slug: 'interio-ecommerce',
  liveUrl: 'https://interio-ecommerce.netlify.app', 
  year: 2022,
  description: `
    A modern e-commerce platform designed for Interio to showcase and sell premium interior design products such as furniture, decor items, and home accessories. The platform offers a smooth shopping experience with dynamic content rendering and a secure checkout system. <br/><br/>

    Key Features:<br/>
    <ul>
      <li>🛒 Product Catalog: Dynamic product listings with images, pricing, and specifications</li>
      <li>🔎 Search & Filter: Sort products by category, price, and popularity</li>
      <li>📦 Cart & Checkout: Session-based cart system and secure order placement</li>
      <li>🧾 Admin Panel: Product management, order tracking, and customer data view</li>
      <li>📱 Responsive Design: Fully mobile-compatible UI using HTML and CSS</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Built with vanilla PHP for backend logic and MySQL for database management</li>
      <li>Structured database for users, orders, payments, and product inventory</li>
      <li>Implemented form validation, authentication, and session management</li>
      <li>Used modular CSS for consistent layout and styling across pages</li>
    </ul>
  `,
  role: `
    Full-Stack Developer <br/>
    Managed the end-to-end development lifecycle:
    <ul>
      <li>✅ Backend: Wrote PHP logic for user authentication, product handling, and checkout</li>
      <li>🎨 Frontend: Designed all pages with HTML, CSS, and JavaScript for interactivity</li>
      <li>🗃️ Database: Structured and optimized MySQL tables for performance</li>
      <li>🔐 Security: Implemented input sanitization and secure user sessions</li>
      <li>🚀 Deployment: Hosted the application with PHP and MySQL server integration</li>
    </ul>
  `,
  techStack: [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'MySQL',
    'Netlify',
  ],
  thumbnail: '/projects/thumbnail/interio.webp',
  longThumbnail: '/projects/long/interio.webp',
  images: [
    '/projects/images/interio-1.webp',
    '/projects/images/interio-2.webp',
  ],
},

];

export const MY_EXPERIENCE = [
    {
        title: 'SDE Intern (Full-Stack)',
        company: 'Akriti Precision Systems',
        duration: 'Mar 2025 - Present',
    },
    {
        title: 'CTF Player',
        company: 'Try Hack Me',
        duration: 'May 2021 - Present',
    },
    {
        title: 'Research Intern',
        company: 'ICMR',
        duration: 'Feb 2023 - Mar 2023',
    },
    {
        title: 'Defense Hacker Intern',
        company: 'Illinois Institute of Technology',
        duration: 'Nov 2022 - Jan 2023',
    },
    {
        title: 'Freelancer',
        company: 'Upwork',
        duration: 'Aug 2021 - Dec 2023',
    },
];
