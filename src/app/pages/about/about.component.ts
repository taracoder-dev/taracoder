import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, TeamMember } from '../../services/data.service';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
    teamMembers: TeamMember[] = [];

    whyChooseUs = [
        {
            icon: '🎯',
            title: 'Expertise',
            description: 'Team of highly skilled developers with 10+ years of combined experience'
        },
        {
            icon: '⏱️',
            title: 'On-Time Delivery',
            description: 'We respect your deadlines and deliver projects on schedule'
        },
        {
            icon: '💡',
            title: 'Innovation',
            description: 'Latest technologies and best practices in software development'
        },
        {
            icon: '🤝',
            title: 'Collaboration',
            description: 'We work closely with clients to understand and exceed expectations'
        },
        {
            icon: '🔒',
            title: 'Security',
            description: 'Industry-leading security practices and data protection'
        },
        {
            icon: '📊',
            title: 'Scalability',
            description: 'Solutions designed to grow with your business'
        }
    ];

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.dataService.getTeamMembers().subscribe(data => {
            this.teamMembers = data;
        });
    }
}
