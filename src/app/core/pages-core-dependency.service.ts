import {Injectable, NgModule} from '@angular/core';
import {
  ErrorStateMatcher,
  MatBadgeModule,
  MatButtonModule, MatCardModule, MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule, MatListModule,
  MatMenuModule, MatRadioModule, MatSelectModule,
  MatSidenavModule,
  MatToolbarModule, MatTooltipModule, ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
@NgModule({
  imports: [
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatTooltipModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatTooltipModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]

})
export class PagesCoreDependencyService {

  constructor() { }
}
