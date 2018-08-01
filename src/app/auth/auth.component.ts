import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isNavbarCollapsed = true;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadRouts();
  }
  loadRouts() {
    console.log(1);
    this.router.navigate(['/pricing']);
  }
  loadPricing() { console.log(2);
    this.router.navigate(['./../auth/pricing'], {relativeTo: this.route});
  }
}
