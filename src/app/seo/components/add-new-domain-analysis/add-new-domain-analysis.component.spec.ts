import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDomainAnalysisComponent } from './add-new-domain-analysis.component';

describe('AddNewDomainAnalysisComponent', () => {
  let component: AddNewDomainAnalysisComponent;
  let fixture: ComponentFixture<AddNewDomainAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewDomainAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewDomainAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
