import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { DomainAnalysesService } from '../../services/domain-analyses.service';
import { DomainService } from '../../../domains/services/domain.service';
import { DomainAnalysisToolService } from '../../services/domain-analysis-tool.service';
import { DomainAnalyses } from '../../model/domain-analyses.entity';
import { DomainAnalysisTool } from '../../model/domain-analysis-tool.entity';

@Component({
  selector: 'app-add-new-domain-analysis',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSelectModule
  ],
  templateUrl: './add-new-domain-analysis.component.html',
  styleUrls: ['./add-new-domain-analysis.component.css']
})
export class AddNewDomainAnalysisComponent implements OnInit {
  private fb = inject(FormBuilder);
  private domainAnalysesService = inject(DomainAnalysesService);
  private domainService = inject(DomainService);
  private domainAnalysisToolService = inject(DomainAnalysisToolService);
  private snackBar = inject(MatSnackBar);

  isSubmitting = false;
  availableTools: DomainAnalysisTool[] = [];
  availableDomains: any[] = [];

  analysisForm = this.fb.group({
    domainId: ['', Validators.required],
    toolCode: ['', Validators.required],
    domainAuthority: [null, [Validators.required, Validators.min(1), Validators.max(100)]],
    analyzedAt: ['', Validators.required]
  });

  constructor() {}

  ngOnInit(): void {
    this.loadTools();
    this.loadDomains();
  }

  private loadTools(): void {
    this.domainAnalysisToolService.getAll().subscribe({
      next: (tools) => {
        this.availableTools = tools;
      },
      error: (error) => {
        console.error('Error loading tools:', error);
        this.showMessage('Error loading analysis tools');
      }
    });
  }

  private loadDomains(): void {
    this.domainService.getAll().subscribe({
      next: (domains) => {
        this.availableDomains = domains;
      },
      error: (error) => {
        console.error('Error loading domains:', error);
        this.showMessage('Error loading domains');
      }
    });
  }

  onSubmit(): void {
    if (this.analysisForm.invalid) {
      this.analysisForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const formValue = this.analysisForm.value;

    // Verificar que el dominio y la herramienta existen
    const domain = this.availableDomains.find(d => d.id === Number(formValue.domainId));
    if (!domain) {
      this.showMessage('Domain not found');
      this.isSubmitting = false;
      return;
    }

    const tool = this.availableTools.find(t => t.code === formValue.toolCode);
    if (!tool) {
      this.showMessage('Tool not found');
      this.isSubmitting = false;
      return;
    }

    // Asegurarnos de que los valores no sean null o undefined
    if (!formValue.toolCode || !formValue.analyzedAt) {
      this.showMessage('Invalid form data');
      this.isSubmitting = false;
      return;
    }

    // Crear nuevo análisis
    const newAnalysis: DomainAnalyses = new DomainAnalyses({
      domainId: Number(formValue.domainId),
      toolCode: formValue.toolCode,
      domainAuthority: Number(formValue.domainAuthority),
      analyzedAt: formValue.analyzedAt
    });

    this.domainAnalysesService.create(newAnalysis).subscribe({
      next: () => {
        this.showMessage('Domain analysis successfully added');
        this.analysisForm.reset();
        this.isSubmitting = false;
      },
      error: () => {
        this.showMessage('Error adding domain analysis');
        this.isSubmitting = false;
      }
    });
  }

  private showMessage(message: string): void {
    this.snackBar.open(message, 'Close', { duration: 3000 });
  }
}
