import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {AuthRoutingModule} from './auth-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'ngx-bootstrap';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule, MatIconModule, MatInputModule,
  MatNativeDateModule
} from '@angular/material';
import {SignupComponent} from './signup/signup.component';
import {ScheduledemoComponent} from './scheduledemo/scheduledemo.component';
import {ContactComponent} from './contact/contact.component';
import {CommonModule} from '@angular/common';

const AUTH_COMPONENTS = [
  AuthComponent,
  LoginComponent,
  SignupComponent,
  ScheduledemoComponent,
  ContactComponent
];
@NgModule({
  imports: [
    AuthRoutingModule,
    NgbModule,
    CarouselModule.forRoot(),
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    CommonModule
  ],
  declarations: [
    ...AUTH_COMPONENTS,
  ]
})
export class AuthModule {
}
