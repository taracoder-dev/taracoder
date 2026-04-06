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
    services: Service[] = [];
    testimonials: Testimonial[] = [];
    benefits: Benefit[] = [];
    stats: Stat[] = [];

    technologies = [
        { name: 'Angular', icon: '⚡', category: 'Frontend' },
        { name: 'React', icon: '⚛️', category: 'Frontend' },
        { name: 'Java', icon: '☕', category: 'Backend' },
        { name: 'Spring Boot', icon: '🌱', category: 'Backend' },
        { name: 'AWS', icon: '☁️', category: 'Cloud' },
        { name: 'Docker', icon: '🐳', category: 'DevOps' },
        { name: 'Kubernetes', icon: '⚓', category: 'DevOps' },
        { name: 'TypeScript', icon: '📘', category: 'Language' }
    ];

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.dataService.getServices().subscribe(data => {
            this.services = data.slice(0, 5);
        });

        this.dataService.getTestimonials().subscribe(data => {
            this.testimonials = data;
        });

        this.dataService.getBenefits().subscribe(data => {
            this.benefits = data;
        });

        this.dataService.getStats().subscribe(data => {
            this.stats = data;
        });
    }
}
