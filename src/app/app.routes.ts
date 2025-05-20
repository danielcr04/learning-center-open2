import { Routes } from '@angular/router';
import {HomeComponent} from './public/pages/home/home.component';
import {PageNotFoundComponent} from './public/pages/page-not-found/page-not-found.component';
import {AnalysisComponent} from './seo/pages/analysis/analysis.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'seo/analyses/new', component: AnalysisComponent},
  {path: '**', component: PageNotFoundComponent},
];
