import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Service } from '../../services/data.service';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './services.component.html',
    styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
    services: Service[] = [];
    selectedService: Service | null = null;

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.dataService.getServices().subscribe(data => {
            this.services = data;
            if (data.length > 0) {
                this.selectedService = data[0];
            }
        });
    }

    selectService(service: Service): void {
        this.selectedService = service;
    }
}
