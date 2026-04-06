import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
    isNavCollapsed = true;
    isDarkMode = false;
    isScrolled = false;

    navigationLinks = [
        { label: 'Home', route: '/' },
        { label: 'About Us', route: '/about' },
        { label: 'Services', route: '/services' },
        { label: 'Career', route: '/careers' },
        { label: 'Contact Us', route: '/contact' }
    ];

    constructor() { }

    ngOnInit(): void {
        // Check for saved dark mode preference
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        this.isDarkMode = savedDarkMode;
        this.applyDarkMode(savedDarkMode);
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isScrolled = window.scrollY > 50;
    }

    toggleNavbar(): void {
        this.isNavCollapsed = !this.isNavCollapsed;
    }

    collapseNavbar(): void {
        this.isNavCollapsed = true;
    }

    toggleDarkMode(): void {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('darkMode', this.isDarkMode.toString());
        this.applyDarkMode(this.isDarkMode);
    }

    private applyDarkMode(isDark: boolean) {
        if (isDark) {
            document.documentElement.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
        }
    }
}
