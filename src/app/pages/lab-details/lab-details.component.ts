import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {MyErrorStateMatcher} from '../../core/MyErrorStateMatcher';

@Component({
  selector: 'app-lab-details',
  templateUrl: './lab-details.component.html',
  styleUrls: ['./lab-details.component.css']
})

export class LabDetailsComponent implements OnInit {
  LabNameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z\\s]*'),
  ]);
  AddressLine1Control = new FormControl('', []);
  AddressLine2Control = new FormControl('', []);
  CityFormControl = new FormControl('', []);
  PincodeFormControl = new FormControl('', []);
  LandlineFormControl = new FormControl('', []);
  MobileFormControl = new FormControl('', []);
  FaxFormControl = new FormControl('', []);
  EmailFormControl = new FormControl('', [
    Validators.email,
    Validators.required
  ]);
  PasswordFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();
  constructor() { }

  ngOnInit() {
  }
}
