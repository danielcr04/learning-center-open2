import { Component, OnInit } from '@angular/core';
import { DomainService } from '../../services/domain.service';
import { Domain } from '../../model/domain.entity';
import { DomainSummaryComponent } from '../domain-summary/domain-summary.component';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';

@Component({
  selector: 'app-list-domain-summary',
  standalone: true,
  imports: [
    MatGridList,
    DomainSummaryComponent,
    MatGridTile
  ],
  templateUrl: './list-domain-summary.component.html',
  styleUrls: ['./list-domain-summary.component.css']
})
export class ListDomainSummaryComponent implements OnInit {
  domains: Domain[] = [];
  errorMessage: string | null = null;

  constructor(private domainService: DomainService) {}

  ngOnInit(): void {
    this.loadDomains();
  }

  loadDomains(): void {
    this.domainService.getAll().subscribe({
      next: (response) => {
        this.domains = response;
      },
      error: (error) => {
        console.error('Error loading domains:', error);
        this.errorMessage = 'Error loading domains, please try again later.';
      }
    });
  }
}
