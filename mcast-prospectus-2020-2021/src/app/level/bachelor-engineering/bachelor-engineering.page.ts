import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bachelor-engineering',
  templateUrl: './bachelor-engineering.page.html',
  styleUrls: ['./bachelor-engineering.page.scss'],
})
export class BachelorEngineeringPage implements OnInit {

  constructor(public router: Router) { }
  cn1(){
    this.router.navigate(['engineering-ba-mhs']);
  }

  cn2(){
    this.router.navigate(['engineering-ba-bse']);
  }

  cn3(){
    this.router.navigate(['engineering-ba-ce']);
  }

  cn4(){
    this.router.navigate(['engineering-ba-ce-ce']);
  }

  cn5(){
    this.router.navigate(['engineering-ba-qs']);
  }

  cn6(){
    this.router.navigate(['engineering-ba-ece']);
  }

  cn7(){
    this.router.navigate(['engineering-ba-ee']);
  }

  cn8(){
    this.router.navigate(['engineering-ba-be']);
  }

  cn9(){
    this.router.navigate(['engineering-ba-me-m']);
  }

  cn10(){
    this.router.navigate(['engineering-ba-me-p']);
  }

  cn11(){
    this.router.navigate(['engineering-ba-me']);
  }

  ngOnInit() {
  }

}
