import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(private router: Router, private routes: ActivatedRoute) { }

  ngOnInit() {
  }

  SignupRedirect() {
    //this.router.navigate(['/auth/signup'], {relativeTo: this.routes})
  }
}
