import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
    name: string;
    email: string;
    phone: string;
    company: string;
    subject: string;
    message: string;
}

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
    formData: ContactForm = {
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
    };

    submitted = false;
    submitSuccess = false;

    contactInfo = [
        {
            icon: '📧',
            label: 'Email',
            value: 'info@taracoder.com',
            link: 'mailto:info@taracoder.com'
        },
        {
            icon: '📞',
            label: 'Phone',
            value: '+91 9876-543-210',
            link: 'tel:+919876543210'
        },
        {
            icon: '📍',
            label: 'Address',
            value: 'Bangalore, India',
            link: '#'
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

    submitForm(): void {
        if (this.validateForm()) {
            // Simulate form submission
            alert(`Thank you ${this.formData.name}! Your message has been received. We'll get back to you soon.`);
            this.resetForm();
            this.submitSuccess = true;
            setTimeout(() => {
                this.submitSuccess = false;
            }, 5000);
        }
    }

    private validateForm(): boolean {
        return !!(
            this.formData.name &&
            this.formData.email &&
            this.formData.message &&
            this.isValidEmail(this.formData.email)
        );
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    private resetForm(): void {
        this.formData = {
            name: '',
            email: '',
            phone: '',
            company: '',
            subject: '',
            message: ''
        };
        this.submitted = false;
    }
}
