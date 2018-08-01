import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {SignupComponent} from './signup/signup.component';
import {ScheduledemoComponent} from './scheduledemo/scheduledemo.component';
import {ContactComponent} from './contact/contact.component';
const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [{
    path: '',
    redirectTo: 'home'
  },
    /*{path: '**',
      redirectTo: 'home'
    },*/
    {
      path: 'home',
      loadChildren: '../auth/home/home.module#HomeModule'
    },
    {
      path: 'pricing',
      loadChildren: '../auth/pricing/pricing.module#PricingModule'
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'signup',
      component: SignupComponent
    },
    {
      path: 'scheduleademo',
      component: ScheduledemoComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
  ],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export  class AuthRoutingModule {

}
