import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diploma-engineering',
  templateUrl: './diploma-engineering.page.html',
  styleUrls: ['./diploma-engineering.page.scss'],
})
export class DiplomaEngineeringPage implements OnInit {

  constructor(public router: Router) { }
  cn1(){
    this.router.navigate(['engineering-d-am']);
  }

  cn2(){
    this.router.navigate(['engineering-d-asr']);
  }

  cn3(){
    this.router.navigate(['engineering-d-bsi']);
  }

  cn4(){
    this.router.navigate(['engineering-d-csm']);
  }

  cn5(){
    this.router.navigate(['engineering-d-ce']);
  }

  cn6(){
    this.router.navigate(['engineering-d-hva']);
  }

  cn7(){
    this.router.navigate(['engineering-d-jf']);
  }

  cn8(){
    this.router.navigate(['engineering-d-mhs']);
  }

  cn9(){
    this.router.navigate(['engineering-d-tt']);
  }

  cn10(){
    this.router.navigate(['engineering-d-wf']);
  }

  cn11(){
    this.router.navigate(['engineering-d-ei']);
  }

  cn12(){
    this.router.navigate(['engineering-d-e']);
  }

  cn13(){
    this.router.navigate(['engineering-d-ar']);
  }

  cn14(){
    this.router.navigate(['engineering-d-l']);
  }

  cn15(){
    this.router.navigate(['engineering-d-me']);
  }

  cn16(){
    this.router.navigate(['engineering-d-do']);
  }

  ngOnInit() {
  }

}
