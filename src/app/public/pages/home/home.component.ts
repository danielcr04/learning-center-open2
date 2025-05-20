import { Component } from '@angular/core';
import { ListDomainSummaryComponent } from '../../../domains/components/list-domain-summary/list-domain-summary.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ListDomainSummaryComponent,
    ToolbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}
