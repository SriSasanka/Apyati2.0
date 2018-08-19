import { NgModule } from '@angular/core';
import {LabDetailsComponent} from './lab-details.component';
import {RouterModule, Routes} from '@angular/router';
import {PagesCoreDependencyService} from '../../core/pages-core-dependency.service';
import {CommonModule} from '@angular/common';
const LABDETAILSCOMPONENTS = [
  LabDetailsComponent
];
const routes: Routes = [
  {path: '', component: LabDetailsComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    PagesCoreDependencyService,
    CommonModule
  ],
  declarations: [
    ...LABDETAILSCOMPONENTS
  ],
  exports: [
    RouterModule
  ]
})
export class LabDetailsModule { }
