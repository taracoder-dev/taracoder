import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface SocialLink {
    label: string;
    icon: string;
    url: string;
}

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
    currentYear = new Date().getFullYear();

    quickLinks = [
        { label: 'Home', route: '/' },
        { label: 'About Us', route: '/about' },
        { label: 'Services', route: '/services' },
        { label: 'Careers', route: '/careers' },
        { label: 'Contact', route: '/contact' }
    ];

    socialLinks: SocialLink[] = [
        { label: 'Facebook', icon: 'f', url: 'https://facebook.com' },
        { label: 'LinkedIn', icon: 'in', url: 'https://linkedin.com' },
        { label: 'Twitter', icon: 'x', url: 'https://twitter.com' },
        { label: 'Instagram', icon: 'ig', url: 'https://instagram.com' }
    ];

    constructor() { }

    ngOnInit(): void {
    }
}
