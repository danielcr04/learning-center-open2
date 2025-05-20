import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDomainSummaryComponent } from './list-domain-summary.component';

describe('ListDomainSummaryComponent', () => {
  let component: ListDomainSummaryComponent;
  let fixture: ComponentFixture<ListDomainSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDomainSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDomainSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
