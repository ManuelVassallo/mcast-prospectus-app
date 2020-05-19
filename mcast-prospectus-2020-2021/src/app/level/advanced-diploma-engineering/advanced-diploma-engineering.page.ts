import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advanced-diploma-engineering',
  templateUrl: './advanced-diploma-engineering.page.html',
  styleUrls: ['./advanced-diploma-engineering.page.scss'],
})
export class AdvancedDiplomaEngineeringPage implements OnInit {

  constructor(public router: Router) { }
  cn1(){
    this.router.navigate(['engineering-ad-ao']);
  }

  cn2(){
    this.router.navigate(['engineering-ad-bse']);
  }

  cn3(){
    this.router.navigate(['engineering-ad-ce']);
  }

  cn4(){
    this.router.navigate(['engineering-ad-hva']);
  }

  cn5(){
    this.router.navigate(['engineering-ad-jfdm']);
  }

  cn6(){
    this.router.navigate(['engineering-ad-mhs']);
  }

  cn7(){
    this.router.navigate(['engineering-ad-plpgs']);
  }

  cn8(){
    this.router.navigate(['engineering-ad-wf']);
  }

  cn9(){
    this.router.navigate(['engineering-ad-ie']);
  }

  cn10(){
    this.router.navigate(['engineering-ad-ppt']);
  }

  cn11(){
    this.router.navigate(['engineering-ad-lvm']);
  }

  cn12(){
    this.router.navigate(['engineering-ad-m']);
  }

  cn13(){
    this.router.navigate(['engineering-ad-me']);
  }

  cn14(){
    this.router.navigate(['engineering-ad-om']);
  }

  ngOnInit() {
  }

}
