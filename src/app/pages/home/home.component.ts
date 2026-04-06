import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/components/card/card.component';
import { SectionComponent } from '../../shared/components/section/section.component';
import { TestimonialCardComponent } from '../../shared/components/testimonial-card/testimonial-card.component';
import { StatsComponent } from '../../shared/components/stats/stats.component';
import { NewsletterComponent } from '../../shared/components/newsletter/newsletter.component';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';
import { DataService, Service, Testimonial, Benefit, Stat } from '../../services/data.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        CardComponent,
        SectionComponent,
        TestimonialCardComponent,
        StatsComponent,
        NewsletterComponent,
        ScrollAnimationDirective
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    services: Service[] = [
        {
            id: 1,
            title: 'Web Development',
            description: 'Custom web applications built with latest technologies',
            icon: '🌐',
            features: ['Responsive Design', 'SEO Optimized', 'Fast Loading']
        },
        {
            id: 2,
            title: 'Mobile Apps',
            description: 'Native and cross-platform mobile applications',
            icon: '📱',
            features: ['iOS', 'Android', 'React Native']
        },
        {
            id: 3,
            title: 'API Development',
            description: 'Scalable REST and GraphQL APIs',
            icon: '🔌',
            features: ['RESTful', 'GraphQL', 'Real-time']
        },
        {
            id: 4,
            title: 'Cloud Solutions',
            description: 'Infrastructure and deployment on AWS, Azure, GCP',
            icon: '☁️',
            features: ['Auto-scaling', 'High Availability', 'Security']
        },
        {
            id: 5,
            title: 'UI/UX Design',
            description: 'Beautiful and intuitive user interface design',
            icon: '🎨',
            features: ['Figma Design', 'Prototyping', 'User Research']
        }
    ];
    testimonials: Testimonial[] = [
        {
            id: 1,
            name: 'John Smith',
            company: 'TechCorp Inc',
            rating: 5,
            message: 'Taracoder delivered an exceptional Angular application. Their team showed deep expertise and professionalism throughout.',
            image: '👨‍💼'
        },
        {
            id: 2,
            name: 'Sarah Johnson',
            company: 'StartUp Pro',
            rating: 5,
            message: 'Incredible team! They understood our vision and turned it into reality with stunning UI/UX. Highly recommended!',
            image: '👩‍💼'
        },
        {
            id: 3,
            name: 'Michael Chen',
            company: 'Global Solutions',
            rating: 5,
            message: 'Professional, reliable, and innovative. Taracoder is our go-to partner for all web development needs.',
            image: '👨‍💻'
        },
        {
            id: 4,
            name: 'Emily Rodriguez',
            company: 'Digital Ventures',
            rating: 5,
            message: 'Outstanding quality and attention to detail. The team delivered on time and exceeded our expectations.',
            image: '👩‍💻'
        },
        {
            id: 5,
            name: 'David Kim',
            company: 'Innovation Labs',
            rating: 4,
            message: 'Great technical skills and excellent communication. Would definitely work with them again for future projects.',
            image: '👨‍🔬'
        }
    ];
    benefits: Benefit[] = [
        {
            id: 1,
            title: 'Expert Developers',
            description: 'Team of certified, experienced full-stack developers',
            icon: '👨‍💻'
        },
        {
            id: 2,
            title: 'Agile Methodology',
            description: 'Flexible, iterative development approach for faster delivery',
            icon: '⚙️'
        },
        {
            id: 3,
            title: 'Scalable Solutions',
            description: 'Architecture designed to grow with your business needs',
            icon: '📈'
        },
        {
            id: 4,
            title: 'Client-Centric',
            description: '24/7 support and dedicated account management',
            icon: '🤝'
        }
    ];
    stats: Stat[] = [
        { value: 5, label: 'Years of Experience', suffix: '+' },
        { value: 100, label: 'Projects Completed', suffix: '+' },
        { value: 50, label: 'Happy Clients', suffix: '+' },
        { value: 24, label: 'Customer Support', suffix: '/7' }
    ];

    // Local dummy data for technologies
    technologies = [
        { name: 'Angular', icon: '⚡', category: 'Frontend' },
        { name: 'React', icon: '⚛️', category: 'Frontend' },
        { name: 'Vue.js', icon: '💚', category: 'Frontend' },
        { name: 'Java', icon: '☕', category: 'Backend' },
        { name: 'Node.js', icon: '🟢', category: 'Backend' },
        { name: 'Spring Boot', icon: '🌱', category: 'Backend' },
        { name: 'Python', icon: '🐍', category: 'Backend' },
        { name: 'AWS', icon: '☁️', category: 'Cloud' },
        { name: 'Google Cloud', icon: '🌐', category: 'Cloud' },
        { name: 'Azure', icon: '🔵', category: 'Cloud' },
        { name: 'Docker', icon: '🐳', category: 'DevOps' },
        { name: 'Kubernetes', icon: '⚓', category: 'DevOps' },
        { name: 'TypeScript', icon: '📘', category: 'Language' },
        { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
        { name: 'MongoDB', icon: '🍃', category: 'Database' },
        { name: 'Redis', icon: '🔴', category: 'Cache' }
    ];

    // Local dummy benefits for quick reference
    dummyBenefits = this.benefits;

    // Local dummy stats for quick reference
    dummyStats = this.stats;

    // Local dummy testimonials for quick reference
    dummyTestimonials = this.testimonials;

    // Local dummy services for quick reference
    dummyServices = this.services;

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.dataService.getServices().subscribe(data => {
            if (data && data.length > 0) {
                this.services = data.slice(0, 5);
            }
        });

        this.dataService.getTestimonials().subscribe(data => {
            if (data && data.length > 0) {
                this.testimonials = data;
            }
        });

        this.dataService.getBenefits().subscribe(data => {
            if (data && data.length > 0) {
                this.benefits = data;
            }
        });

        this.dataService.getStats().subscribe(data => {
            if (data && data.length > 0) {
                this.stats = data;
            }
        });
    }
}
