
import { Project, Experience, Credential, Academic } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neobank Dashboard',
    role: 'Lead Designer',
    description: 'Redesigning the core banking experience for over 2 million users, focusing on accessibility and real-time transaction clarity.',
    category: 'Fintech',
    image: 'https://picsum.photos/800/500?random=1',
    icon: 'account_balance'
  },
  {
    id: '2',
    title: 'Field Operations Monitor',
    role: 'Product Strategy',
    description: 'A ruggedized tablet interface for field engineers to monitor pipeline integrity and report incidents in remote locations.',
    category: 'Oil & Gas',
    image: 'https://picsum.photos/800/500?random=2',
    icon: 'oil_barrel'
  },
  {
    id: '3',
    title: 'Telemed Patient Portal',
    role: 'UX Research & UI',
    description: 'Simplifying the telemedicine experience for elderly patients with large typography, high contrast, and voice navigation features.',
    category: 'Healthcare',
    image: 'https://picsum.photos/800/500?random=3',
    icon: 'cardiology'
  },
  {
    id: '4',
    title: 'Enterprise Design System',
    role: 'Systems Design',
    description: 'Creating a unified design language for a global SaaS conglomerate, reducing development time by 40% across 12 product teams.',
    category: 'Strategy',
    image: 'https://picsum.photos/800/500?random=4',
    icon: 'dataset'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: 'Senior Product Designer',
    company: 'Sandcup Design Studio',
    period: '2022 - Present',
    description: "Leading the design strategy for enterprise clients. Spearheaded the revamp of the core product suite, streamlining workflows and directly impacting client retention.",
    skills: ['Strategy', 'Leadership', 'Design Systems'],
    impactTitle: 'Reduced approval times by half',
    impactMetric: '-50% Time',
    impactIcon: 'verified_user'
  },
  {
    id: 'exp2',
    role: 'Instructor & Mentor',
    company: 'GOMYCODE',
    period: '2021 - 2022',
    description: 'Mentored aspiring designers in UI/UX principles. Developed curriculum modules that increased student engagement and practical skill application.',
    skills: ['Mentorship', 'Education', 'Public Speaking'],
    impactTitle: 'Achieved top instructor rating',
    impactMetric: '5 Stars',
    impactIcon: 'school'
  },
  {
    id: 'exp3',
    role: 'Product Designer',
    company: 'Gokada',
    period: '2020 - 2021',
    description: 'Designed interfaces for high-stakes logistics operations. Focused on mobility solutions and driver app efficiency in a fast-paced startup environment.',
    skills: ['Mobile UI', 'Logistics', 'Prototyping'],
    impactTitle: 'Enhanced driver app speed',
    impactMetric: '+35% Speed',
    impactIcon: 'two_wheeler'
  }
];

export const CERTIFICATIONS: Credential[] = [
  {
    id: 'cert1',
    title: 'Google UX Design Professional Certificate',
    issuer: 'COURSERA / GOOGLE',
    description: 'Rigorous training covering the complete design process from empathy mapping to high-fidelity prototyping and testing.',
    id_number: '8X92-GL-UX',
    icon: 'verified'
  },
  {
    id: 'cert2',
    title: 'Enterprise Design Thinking Practitioner',
    issuer: 'IBM',
    description: 'Mastery of key concepts of design thinking scaled for complex enterprise environments and cross-functional teams.',
    id_number: 'IBM-DT-P1',
    icon: 'psychology'
  },
  {
    id: 'cert3',
    title: 'Interaction Design Specialist',
    issuer: 'NN/g',
    description: 'Advanced principles of micro-interactions, motion design, and usability heuristics for interactive systems.',
    id_number: 'NNG-IXD-04',
    icon: 'touch_app'
  }
];

export const ACADEMICS: Academic[] = [
  {
    id: 'edu1',
    degree: 'BSc. Building Technology',
    school: 'UNIVERSITY OF LAGOS (UNILAG)',
    image: 'https://picsum.photos/400/400?random=5',
    details: [
      'Focus on structural integrity, project management, and architectural foundations.',
      'Graduated with Second Class Upper Division.'
    ],
    tags: ['Construction Mgmt', 'AutoCAD', 'Systems Analysis']
  }
];
