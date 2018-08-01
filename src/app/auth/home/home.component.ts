import { Component, OnInit } from '@angular/core';
import {CarouselConfig} from 'ngx-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {
  isNavbarCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
