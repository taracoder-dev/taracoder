import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
    features: string[];
}

export interface Job {
    id: number;
    title: string;
    department: string;
    experience: string;
    description: string;
    requirements: string[];
}

export interface Testimonial {
    id: number;
    name: string;
    company: string;
    message: string;
    rating: number;
    image: string;
}

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
    social: {
        linkedin: string;
        twitter: string;
    };
}

export interface FAQ {
    id: number;
    question: string;
    answer: string;
}

export interface ProcessStep {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface Technology {
    name: string;
    category: string;
    icon: string;
}

export interface Benefit {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface Perk {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface Stat {
    value: number;
    label: string;
    suffix: string;
}

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private services: Service[] = [
        {
            id: 1,
            title: 'Web Development',
            description: 'Build responsive and scalable web applications using modern frameworks and technologies.',
            icon: '🌐',
            features: ['Responsive Design', 'Progressive Web Apps', 'Single Page Applications', 'Real-time Applications']
        },
        {
            id: 2,
            title: 'Mobile App Development',
            description: 'Create native and cross-platform mobile applications for iOS and Android.',
            icon: '📱',
            features: ['Native Development', 'Cross-platform Solutions', 'iOS/Android Apps', 'App Store Deployment']
        },
        {
            id: 3,
            title: 'API & Backend Development',
            description: 'Develop robust and secure APIs with scalable backend infrastructure.',
            icon: '⚙️',
            features: ['RESTful APIs', 'Microservices', 'Database Design', 'API Documentation']
        },
        {
            id: 4,
            title: 'Cloud Solutions',
            description: 'Deploy and manage applications on leading cloud platforms.',
            icon: '☁️',
            features: ['AWS Services', 'Cloud Migration', 'DevOps', 'Infrastructure as Code']
        },
        {
            id: 5,
            title: 'UI/UX Design',
            description: 'Create beautiful and intuitive user interfaces with excellent user experience.',
            icon: '🎨',
            features: ['UI Design', 'UX Research', 'Prototyping', 'User Testing']
        },
        {
            id: 6,
            title: 'DevOps Services',
            description: 'Streamline your deployment and infrastructure management with our DevOps expertise.',
            icon: '🔧',
            features: ['CI/CD Pipelines', 'Container Orchestration', 'Infrastructure Monitoring', 'Automated Deployment']
        },
        {
            id: 7,
            title: 'E-commerce Solutions',
            description: 'Build powerful e-commerce platforms that drive sales and customer engagement.',
            icon: '🛍️',
            features: ['Shopping Cart', 'Payment Integration', 'Inventory Management', 'Analytics Dashboard']
        }
    ];

    private jobs: Job[] = [
        {
            id: 1,
            title: 'Angular Developer',
            department: 'Frontend Development',
            experience: '2-4 years',
            description: 'We are looking for an experienced Angular developer to build cutting-edge web applications.',
            requirements: [
                'Expert knowledge of Angular framework',
                '2+ years of professional experience',
                'Strong TypeScript and JavaScript knowledge',
                'Experience with RxJS and state management',
                'Understanding of responsive design',
                'Git and CI/CD pipelines knowledge'
            ]
        },
        {
            id: 2,
            title: 'Java Developer',
            department: 'Backend Development',
            experience: '3-5 years',
            description: 'Join our backend team to develop robust and scalable Java applications.',
            requirements: [
                'Strong Java knowledge (Spring Boot)',
                '3+ years of professional experience',
                'Database design and SQL expertise',
                'RESTful API development',
                'Microservices architecture knowledge',
                'Cloud platform experience (AWS/Azure)'
            ]
        },
        {
            id: 3,
            title: 'DevOps Engineer',
            department: 'Infrastructure',
            experience: '2-3 years',
            description: 'Help us build and maintain our cloud infrastructure and deployment pipelines.',
            requirements: [
                'Docker and Kubernetes knowledge',
                'CI/CD pipeline experience',
                'Cloud platform expertise',
                'Linux administration',
                'Infrastructure as Code (Terraform/Ansible)',
                'Monitoring and logging tools experience'
            ]
        },
        {
            id: 4,
            title: 'Full Stack Developer',
            department: 'Development',
            experience: '2-3 years',
            description: 'Work on both frontend and backend of our web applications.',
            requirements: [
                'Angular or React knowledge',
                'Node.js/Java backend experience',
                'Database design skills',
                'API integration experience',
                'Version control (Git)',
                'Problem-solving skills'
            ]
        },
        {
            id: 5,
            title: 'UI/UX Designer',
            department: 'Design',
            experience: '1-3 years',
            description: 'Create beautiful and user-friendly designs for our products.',
            requirements: [
                'Proficiency in Figma or Adobe XD',
                'Strong design principles knowledge',
                'Prototyping experience',
                'User research skills',
                'Design system knowledge',
                'Portfolio with design samples'
            ]
        }
    ];

    private testimonials: Testimonial[] = [
        {
            id: 1,
            name: 'Rajesh Kumar',
            company: 'TechCorp India',
            message: 'Taracoder delivered our project on time and exceeded our expectations. Their team is professional and highly skilled.',
            rating: 5,
            image: 'https://via.placeholder.com/100?text=RK'
        },
        {
            id: 2,
            name: 'Priya Sharma',
            company: 'Digital Solutions Ltd',
            message: 'Excellent work on our mobile application. The team understood our requirements perfectly and delivered a polished product.',
            rating: 5,
            image: 'https://via.placeholder.com/100?text=PS'
        },
        {
            id: 3,
            name: 'Amit Patel',
            company: 'Innovation Labs',
            message: 'Great communication, timely delivery, and outstanding code quality. Taracoder is our go-to development partner.',
            rating: 5,
            image: 'https://via.placeholder.com/100?text=AP'
        },
        {
            id: 4,
            name: 'Neha Gupta',
            company: 'StartUp Hub',
            message: 'The team helped us build our MVP quickly and efficiently. Very impressed with their agile approach and expertise.',
            rating: 4,
            image: 'https://via.placeholder.com/100?text=NG'
        },
        {
            id: 5,
            name: 'Mohammed Ali',
            company: 'Global Tech Solutions',
            message: 'Working with Taracoder was a game-changer. They brought innovation and technical excellence to every aspect of our project.',
            rating: 5,
            image: 'https://via.placeholder.com/100?text=MA'
        }
    ];

    private teamMembers: TeamMember[] = [
        {
            id: 1,
            name: 'Vikram Singh',
            role: 'CEO & Founder',
            bio: 'Visionary tech leader with 15+ years in software development. Passionate about building innovative solutions.',
            image: 'https://via.placeholder.com/150?text=VS',
            social: {
                linkedin: 'https://linkedin.com',
                twitter: 'https://twitter.com'
            }
        },
        {
            id: 2,
            name: 'Anjali Verma',
            role: 'CTO & Co-Founder',
            bio: 'Expert in cloud architecture and microservices. Led development of multiple successful projects.',
            image: 'https://via.placeholder.com/150?text=AV',
            social: {
                linkedin: 'https://linkedin.com',
                twitter: 'https://twitter.com'
            }
        },
        {
            id: 3,
            name: 'Rohit Desai',
            role: 'Lead Frontend Architect',
            bio: 'Specializes in React and Angular. Advocate for clean code and best practices.',
            image: 'https://via.placeholder.com/150?text=RD',
            social: {
                linkedin: 'https://linkedin.com',
                twitter: 'https://twitter.com'
            }
        },
        {
            id: 4,
            name: 'Divya Nair',
            role: 'Lead Backend Developer',
            bio: 'Java and Node.js expert. Passionate about scalable system design.',
            image: 'https://via.placeholder.com/150?text=DN',
            social: {
                linkedin: 'https://linkedin.com',
                twitter: 'https://twitter.com'
            }
        }
    ];

    private faqs: FAQ[] = [
        {
            id: 1,
            question: 'What is your project delivery timeline?',
            answer: 'Our project delivery timeline depends on the complexity and scope of your project. Typically, projects range from 1 to 6 months. We follow an agile methodology with regular milestones and updates.'
        },
        {
            id: 2,
            question: 'Do you provide post-launch support?',
            answer: 'Yes, we provide comprehensive post-launch support including bug fixes, maintenance, and updates. We offer different support packages based on your needs.'
        },
        {
            id: 3,
            question: 'What technologies do you specialize in?',
            answer: 'We specialize in modern technologies including Angular, React, Node.js, Java Spring Boot, Python, AWS, Docker, Kubernetes, and more. Our team continuously updates their skills with the latest technologies.'
        },
        {
            id: 4,
            question: 'How do you handle security and compliance?',
            answer: 'Security is our top priority. We follow industry best practices including code reviews, penetration testing, and compliance with GDPR, HIPAA, and other standards.'
        },
        {
            id: 5,
            question: 'Can you work with existing codebases?',
            answer: 'Absolutely! We have extensive experience working with and improving existing codebases. We can help with refactoring, optimization, and adding new features.'
        },
        {
            id: 6,
            question: 'What is your communication process?',
            answer: 'We maintain regular communication through daily standups, weekly reports, and dedicated project managers. You can reach us via email, video calls, or Slack anytime.'
        }
    ];

    private processSteps: ProcessStep[] = [
        {
            id: 1,
            title: 'Requirement Analysis',
            description: 'We understand your business needs and requirements in detail.',
            icon: '📋'
        },
        {
            id: 2,
            title: 'Design',
            description: 'Our designers create wireframes and prototypes for your approval.',
            icon: '🎨'
        },
        {
            id: 3,
            title: 'Development',
            description: 'Our developers build your application following best practices.',
            icon: '⚙️'
        },
        {
            id: 4,
            title: 'Testing',
            description: 'Rigorous testing ensures quality and reliability.',
            icon: '✓'
        },
        {
            id: 5,
            title: 'Deployment',
            description: 'We deploy your application to production smoothly.',
            icon: '🚀'
        },
        {
            id: 6,
            title: 'Support',
            description: 'Ongoing support and maintenance after launch.',
            icon: '🛡️'
        }
    ];

    private technologies: Technology[] = [
        { name: 'Angular', category: 'Frontend', icon: '⚡' },
        { name: 'React', category: 'Frontend', icon: '⚛️' },
        { name: 'Java', category: 'Backend', icon: '☕' },
        { name: 'Spring Boot', category: 'Backend', icon: '🌱' },
        { name: 'Node.js', category: 'Backend', icon: '📦' },
        { name: 'AWS', category: 'Cloud', icon: '☁️' },
        { name: 'Docker', category: 'DevOps', icon: '🐳' },
        { name: 'Kubernetes', category: 'DevOps', icon: '⚓' }
    ];

    private stats: Stat[] = [
        { value: 5, label: 'Years Experience', suffix: '+' },
        { value: 100, label: 'Projects Delivered', suffix: '+' },
        { value: 50, label: 'Clients Worldwide', suffix: '+' },
        { value: 24, label: 'Support Available', suffix: '/7' }
    ];

    private benefits: Benefit[] = [
        {
            id: 1,
            title: 'Expert Developers',
            description: 'Our team consists of seasoned professionals with expertise in various technologies.',
            icon: '👨‍💻'
        },
        {
            id: 2,
            title: 'Agile Methodology',
            description: 'We follow agile practices for flexibility and faster delivery.',
            icon: '🎯'
        },
        {
            id: 3,
            title: 'Scalable Architecture',
            description: 'We build solutions that can grow with your business.',
            icon: '📈'
        },
        {
            id: 4,
            title: 'Client-Centric Approach',
            description: 'Your satisfaction is our top priority. Regular feedback and updates.',
            icon: '🤝'
        }
    ];

    private perks: Perk[] = [
        {
            id: 1,
            title: 'Remote Work',
            description: 'Work from anywhere in the world with flexible schedules.',
            icon: '🌍'
        },
        {
            id: 2,
            title: 'Health Benefits',
            description: 'Comprehensive health and wellness benefits for all employees.',
            icon: '🏥'
        },
        {
            id: 3,
            title: 'Learning Programs',
            description: 'Continuous learning opportunities and skill development.',
            icon: '📚'
        },
        {
            id: 4,
            title: 'Competitive Salary',
            description: 'Competitive compensation packages and performance bonuses.',
            icon: '💰'
        }
    ];

    constructor() { }

    getServices(): Observable<Service[]> {
        return of(this.services);
    }

    getServiceById(id: number): Observable<Service | undefined> {
        return of(this.services.find(s => s.id === id));
    }

    getJobs(): Observable<Job[]> {
        return of(this.jobs);
    }

    getJobById(id: number): Observable<Job | undefined> {
        return of(this.jobs.find(j => j.id === id));
    }

    getTestimonials(): Observable<Testimonial[]> {
        return of(this.testimonials);
    }

    getTeamMembers(): Observable<TeamMember[]> {
        return of(this.teamMembers);
    }

    getFAQs(): Observable<FAQ[]> {
        return of(this.faqs);
    }

    getProcessSteps(): Observable<ProcessStep[]> {
        return of(this.processSteps);
    }

    getTechnologies(): Observable<Technology[]> {
        return of(this.technologies);
    }

    getStats(): Observable<Stat[]> {
        return of(this.stats);
    }

    getBenefits(): Observable<Benefit[]> {
        return of(this.benefits);
    }

    getPerks(): Observable<Perk[]> {
        return of(this.perks);
    }
}
