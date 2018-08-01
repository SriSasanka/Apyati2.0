import {HomeComponent} from './home.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'ngx-bootstrap';

const HOME_COMPONENTS = [
 HomeComponent
];
const routes: Routes = [
  {path: '', component: HomeComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NgbModule,
    CarouselModule.forRoot()
  ],
  declarations: [
    ...HOME_COMPONENTS
  ],
  exports: [RouterModule]
})
export class HomeModule {
}
