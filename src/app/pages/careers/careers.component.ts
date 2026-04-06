import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Job } from '../../services/data.service';

@Component({
    selector: 'app-careers',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './careers.component.html',
    styleUrl: './careers.component.css'
})
export class CareersComponent implements OnInit {
    jobs: Job[] = [];
    selectedJob: Job | null = null;
    showApplicationForm = false;
    applicationData = {
        name: '',
        email: '',
        phone: '',
        resume: '',
        coverLetter: ''
    };

    whyCareersItems = [
        { icon: '💼', title: 'Growth Opportunities', description: 'Grow your skills with latest technologies' },
        { icon: '🎯', title: 'Work on Projects', description: 'Work on challenging and innovative projects' },
        { icon: '🤝', title: 'Collaborative Team', description: 'Friendly and supportive work environment' },
        { icon: '💰', title: 'Competitive Salary', description: 'Industry-competitive salary packages' }
    ];

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.dataService.getJobs().subscribe(data => {
            this.jobs = data;
            if (data.length > 0) {
                this.selectedJob = data[0];
            }
        });
    }

    selectJob(job: Job): void {
        this.selectedJob = job;
        this.showApplicationForm = false;
    }

    showForm(): void {
        this.showApplicationForm = true;
    }

    cancelApplication(): void {
        this.showApplicationForm = false;
    }

    submitApplication(): void {
        if (this.applicationData.name && this.applicationData.email && this.applicationData.phone) {
            alert(`Thank you ${this.applicationData.name}! Your application for ${this.selectedJob?.title} has been submitted successfully. We will review your application and get back to you soon.`);
            this.resetForm();
            this.showApplicationForm = false;
        } else {
            alert('Please fill in all required fields.');
        }
    }

    private resetForm(): void {
        this.applicationData = {
            name: '',
            email: '',
            phone: '',
            resume: '',
            coverLetter: ''
        };
    }
}
