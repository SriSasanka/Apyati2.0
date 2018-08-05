import {DashboardComponent} from './dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const DASHBOARD_COMPONENTS = [
  DashboardComponent
];
const routes: Routes = [
  {path: '', component: DashboardComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
    ...DASHBOARD_COMPONENTS
  ],
  exports: [RouterModule]
})
export class DashboardModule {}
