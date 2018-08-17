import {PagesComponent} from './pages.component';
import {NgModule} from '@angular/core';
import {PagesRoutingModule} from './pages-routing.module';
import {
  MatBadgeModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

const PAGES_COMPONENTS = [
  PagesComponent
];
@NgModule({
  imports: [
    PagesRoutingModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatMenuModule
  ],
  declarations: [
    ...PAGES_COMPONENTS
  ]
})
export class PagesModule {}
