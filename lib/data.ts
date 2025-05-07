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

export const MY_STACK = {
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
    }
    
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineering Intern (Fullstack)',
        company: 'Akriti Precision Systems',
        duration: 'Mar 2025 - Present',
    },
    {
        title: 'CTF Player',
        company: 'Try Hack Me',
        duration: 'May 2021 - Present',
    },
    {
        title: 'Research Intern,
        company: 'ICMR',
        duration: 'Feb 2023 - Mar 2023',
    },
    {
        title: 'Defense Hacker Intern,
        company: 'Illinois Institute of Technology,
        duration: 'Nov 2022 - Jan 2023',
    },
    {
        title: 'Freelancer',
        company: 'Upwork',
        duration: 'Aug 2021 - Dec 2023',
    },
];
