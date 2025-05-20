  import { Component, Input, OnInit } from '@angular/core';
  import { MatCard, MatCardContent, MatCardFooter, MatCardHeader } from '@angular/material/card';
  import { Domain } from '../../model/domain.entity';
  import { DomainAnalysesService } from '../../../seo/services/domain-analyses.service';
  import {LogoApiService} from '../../../shared/services/logo-api.service';
  import {DatePipe} from '@angular/common';

  @Component({
    selector: 'app-domain-summary',
    standalone: true,
    imports: [
      MatCard,
      MatCardHeader,
      MatCardContent,
      MatCardFooter,
      DatePipe
    ],
    templateUrl: './domain-summary.component.html',
    styleUrls: ['./domain-summary.component.css']
  })
  export class DomainSummaryComponent implements OnInit {
    @Input() domain!: Domain;

    // Variables para el número de análisis y la autoridad promedio del dominio
    numberAnalyses: number = 0;
    averageDomainAuthority: number | null = null;
    lastAnalyzedAt: string = '';
    logoUrl: string = '';

    constructor(
      private domainAnalysesService: DomainAnalysesService,
      private logoApiService: LogoApiService
    ) {}

    ngOnInit(): void {
      this.loadDomainAnalyses();
      this.loadLogo();
    }

    private loadLogo(): void {
      if (this.domain && this.domain.name) {
        this.logoUrl = this.logoApiService.getUrlToLogo({ url: `https://${this.domain.name}` });
      }
    }

    // Cargar todos los datos de análisis del dominio en una sola llamada
    private loadDomainAnalyses(): void {
      this.domainAnalysesService.getAll().subscribe((analyses) => {
        const domainAnalyses = analyses.filter(
          (analysis) => analysis.domainId === this.domain.id
        );

        // Actualizar número de análisis
        this.numberAnalyses = domainAnalyses.length;

        // Actualizar autoridad promedio
        if (domainAnalyses.length === 0) {
          this.averageDomainAuthority = null;
        } else {
          const sum = domainAnalyses.reduce((total, analysis) => total + analysis.domainAuthority, 0);
          this.averageDomainAuthority = Math.round(sum / domainAnalyses.length);
        }

        // Actualizar fecha del último análisis
        if (domainAnalyses.length > 0) {
          const lastAnalysis = domainAnalyses[domainAnalyses.length - 1];
          this.lastAnalyzedAt = lastAnalysis.analyzedAt;
        } else {
          this.lastAnalyzedAt = 'No analyses';
        }
      });
    }
  }
