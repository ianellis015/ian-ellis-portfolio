export const projects = [
  {
    slug: 'debrief-ai',
    title: 'Debrief AI',
    description:
      'A personal intelligence engine powered by AI that builds a dynamic model of who I am and delivers tailored news, insights, and market projections using advanced financial mathematical analysis.',
    longDescription:
      'I built this to move beyond generic information feeds and create something more intentional. I wanted a way to personalize my information stream while enforcing a higher standard of reliability, grounding everything in reputable sources through a RAG-based pipeline. Instead of passively consuming content, this system understands my interests, goals, and decision-making context to surface what matters most, while uncovering deeper patterns and forward-looking insights through structured analysis. The goal is to turn information into clarity, and clarity into better decisions over time.',
    tech: ['React', 'FastAPI', 'Milvus', ],
    category: 'AI & LLM Integration',
    image: '/images/work/debrief-ai.jpg',
    color: '#f59e0b',
    year: '2025',
    featured: true,
  },
  {
    slug: 'nest-check',
    title: 'NESTCheck',
    description:
      'A full-stack check-in system for a community tech center that uses opt-in geolocation to trigger arrival-based check-in reminders, enabling fast one-tap sign-ins and simplifying attendance tracking.',
    longDescription:
      'My role in this full-stack check-in platform focused on developing the geospatial mathematics behind its location-based features, enabling optional, on-device arrival detection for seamless check-in reminders. I also led the technical effort during the beta phase, driving the implementation of data encryption, rate limiting, and unit and load testing to ensure the system was secure, reliable, and ready for real-world use.',
    tech: ['React', 'Node.js', 'Capacitor', 'Airtable API'],
    category: 'Mobile Application',
    image: '/images/work/nest-check.jpg',
    color: '#4f7df9',
    year: '2025',
    featured: true,
  },
  {
    slug: 'ai-learning-hub',
    title: 'AI Learning Hub',
    description:
      'An educational AI hub that brings together the tools, prompt frameworks, and real-world workflows we actively use in practice at Digital NEST, alongside information on the AI workshops we offer to organizations. It’s designed to help others move beyond experimentation and develop practical, effective, and responsible AI skills.',
    longDescription:
      'AI is advancing rapidly, at Digital Nest we wanted to create a platform that offers a clear path toward deeper understanding. This site is designed as a practical toolkit that helps our community explore both the real benefits and risks, while building strong, intentional AI skills. More importantly, it gives people the foundation they need to keep learning, adapting, and evolving alongside the technology as it continues to grow.',
    tech: ['Next.js', 'OpenAI API', 'Cloudflare'],
    category: 'AI Education & Full-Stack Application',
    image: '/images/work/ai-learning-hub.jpg',
    externalUrl: 'https://ai.bizznest.org',
    color: '#10b981',
    year: '2025',
    featured: true,
  },
  {
    slug: 'digital-calendar',
    title: 'Cabrillo Digital Calendar',
    description:
      'A digital calendar display installed in Cabrillo College’s tech lab that aggregates tutoring schedules, campus events, weather updates, and real-time bus arrival information.',
    longDescription:
      'Built an embedded digital display system for Cabrillo College’s tech lab using a Raspberry Pi, combining hardware setup with a custom Node.js backend to aggregate and serve real-time data. I worked on the electrical setup of the device and developed backend services that retrieve and process tutoring schedules, campus events, weather updates, and live bus tracking data from external APIs. The system runs locally on the Pi 24/7 as a centralized, real-time information hub for students.',
    tech: ['Raspberry PI', 'Node.js', 'MagicMirror 2'],
    category: 'Embedded Systems',
    image: '/images/work/digital-calendar.jpg',
    color: '#ec4899',
    year: '2024',
    featured: true,
  },
];

export const caseStudies = [
  {
  slug: 'turning-beginners-into-ai-power-users',
  title: 'Turning a Room of Beginners into AI Power Users in 3 Hours',
  excerpt:
    'Co-leading an AI literacy workshop for non-profit communications professionals — from curriculum design to a 97% approval rating.',
  category: 'AI / Education',
  readTime: '4 min read',
  date: '2025',
  problem:
    'After my manager at Digital NEST attended an AI workshop hosted by OpenAI, he began exploring a collaboration with the Community Foundation of Monterey County, who was looking to develop an AI literacy curriculum for non-profit communications professionals. Digital NEST\'s development team had deep, hands-on experience with AI tools, including advanced techniques most users never reach, which made the partnership a natural fit. I was asked to sit in on the discovery call with little context — I assumed it would be another software project. It wasn\'t. The challenge wasn\'t to build a product, but to take a room full of communications professionals who had never used AI and convince them to adopt it as a core part of their workflow, in a single afternoon. The central question: how do you turn a room of complete AI beginners into advanced, confident users in three hours?',
  approach:
    'When my manager asked me to lead this, it was unlike anything I\'d taken on before. I had no playbook, no prior experience running a workshop, and an ambitious goal on a tight timeline. But I was all in. I was determined to stretch myself and deliver something that would genuinely make an impact. A standard slideshow lecture wasn\'t going to cut it — not for three hours, not for fifty people, and certainly not for a topic as hands-on as AI. We needed real interactivity, guided practice, social collaboration, and moments that made people laugh and feel comfortable before asking them to change how they work. We designed a workshop-style format that minimized passive lecture time and maximized active, practical engagement with the tools. My role was to co-lead the full execution: client communications, curriculum design, task delegation, and presentation.',
  decisions: [
    'Built a companion website as a centralized event hub — a single place for all resources, tools, and course content that attendees could reference during and long after the event',
    'Designed interactive AI-based games to open the session and warm up the room, getting attendees laughing and comfortable with the tools before the real learning began',
    'Capped lecture segments at 10-15 minutes, always followed by a hands-on activity to keep energy high and ensure attendees were building real skills rather than absorbing information passively',
    'Taught advanced prompting frameworks so attendees learned not just how to get an output, but how to get a great one — and why the underlying principles actually work',
    'Guided attendees through building real deliverables on the spot, including campaign strategy drafts and social media content, so they left with tangible materials and a repeatable process',
  ],
  outcome:
    'The event exceeded expectations on every front. Attendees didn\'t just gain new technical skills — we shifted how they thought about AI entirely: not as a replacement for critical thinking, but as an accelerator of it. Our post-event survey came back with a 97% approval rating. What excited me most was the reach — we were speaking to professionals from multiple organizations, meaning every person in that room could return to their workplace and multiply the impact far beyond the event itself. On a personal level, this project changed how I see myself as a professional. I discovered that my abilities extend well beyond software engineering — that I could design a learning experience, communicate complex technical concepts clearly, and hold a room genuinely engaged. The success opened doors, and I\'ve since built experience across multiple workshops. My goal for every single one: make it the best workshop the attendees have ever attended.',
},
];

export const trainingEvents = [
  {
    slug: 'comms-ai-workshop',
    title: 'AI for Communications Professionals',
    description:
      'Trained communications specialists on leveraging advanced AI techniques as a force multiplier in their daily workflows — from drafting campaign strategies to creating marketing deliverables with AI-assisted workflows.',

    date: '2025',
    category: 'Workshops',
    image: '/images/training/comms-workshop.jpg',
  },
  {
    slug: 'mcp-server-engineering',
    title: 'Building MCP Servers for Engineers',
    description:
      'Led a hands-on technical workshop teaching engineers how to architect and deploy custom Model Context Protocol (MCP) servers — enabling seamless, agentic AI integrations in their own products.',

    date: '2025',
    category: 'Technical Training',
    image: '/images/training/mcp-workshop.jpg',
  },
  {
    slug: 'digital-nest-curriculum',
    title: 'Digital NEST Staff AI Curriculum',
    description:
      'Designed and delivered a comprehensive AI training curriculum for Digital NEST staff, enabling them to integrate AI tools into their workflows to move faster and work more effectively across programs.',

    date: '2025–2026',
    category: 'Curriculum Design',
    image: '/images/training/nest-curriculum.jpg',
  },
  {
    slug: 'ai-advisory',
    title: 'AI Strategy & Usage Presentation',
    description:
      'Practical AI usage strategies — I can answer questions regarding implementation challenges and usage policies.',

    date: '2026',
    category: 'Advisory',
    image: '/images/training/ai-policy.jpg',
  },
];

export const services = [
  {
    title: 'Full-Stack Web Development',
    description:
      'End-to-end web applications built with modern frameworks. From database design to polished UIs, I build performant, scalable products that ship fast.',
    tech: 'React, Next.js, Node.js, PostgreSQL',
    icon: 'code',
    bookingUrl: 'https://cal.com/ian-ellis-b8tzau/full-stack-development-consultation',
  },
  {
    title: 'AI & LLM Integrations',
    description:
      'Custom AI-powered features and pipelines integrated into your existing or new products. I work with the latest models to build intelligent experiences that actually add value.',
    tech: 'OpenAI, Anthropic, Google Gemini',
    icon: 'brain',
    bookingUrl: 'https://cal.com/ian-ellis-b8tzau/ai-llm-integration-discovery-call',
  },
  {
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile applications that feel native. Building apps that work seamlessly across iOS and Android from a single codebase.',
    tech: 'Capacitor, React Native, iOS, Android',
    icon: 'mobile',
    bookingUrl: 'https://cal.com/ian-ellis-b8tzau/mobile-app-development-consultation',
  },
  {
    title: 'AI Training & Workshops',
    description:
      'Hands-on AI training for engineers and non-technical professionals alike. I also advise on AI policy, and better usage strategies.',
    tech: 'Prompt Engineering, LLM Tools, AI Policy, Curriculum Design',
    icon: 'consulting',
    bookingUrl: 'https://cal.com/ian-ellis-b8tzau/ai-training-consultation',
  },
];

export const siteConfig = {
  name: 'Ian Ellis',
  title: 'Full-Stack Engineer & AI Integration Specialist',
  tagline: 'Building intelligent software that bridges the gap between cutting-edge AI and real-world products.',
  email: 'ianellis015@gmail.com',
  github: 'https://github.com/ianellis015',
  linkedin: 'https://linkedin.com/in/ian-ellis-283821256',
  about: [
    "I'm a full-stack software engineer and technical leader who specializes in AI integrations and agentic applications with custom MCP layers. I lead projects end-to-end, from system architecture and project scoping to delivery, bringing both the technical depth and project management mindset needed to turn a client's vision into a functioning product.",
    "I’m especially interested in building systems that turn complex information into clarity. Whether that’s through AI-powered tools, data-driven models, or thoughtful interfaces, I enjoy working at the intersection of mathematics, engineering, and real-world decision making. I tend to approach problems from both a technical and human perspective, aiming to build things that not only work well, but genuinely help people think better and move forward with confidence.",
    "Away from work, I'm deeply obsessed with the culinary world and love challenging myself to create fine dining experiences in my own kitchen. I'm also an avid ping pong player and proud of it. At the end of the day, I'm just an engineer who loves living life, always chasing new experiences and finding the next thing to be curious about.",
  ],
};
