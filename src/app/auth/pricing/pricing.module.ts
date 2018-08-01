import {PricingComponent} from './pricing.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const PRICING_COMPONENTS = [
  PricingComponent
];
const routes: Routes = [
  {
    path: '',
    component: PricingComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
    ...PRICING_COMPONENTS
  ],
  exports: [RouterModule]
})
export class PricingModule {}
