import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advanced-diploma-ias',
  templateUrl: './advanced-diploma-ias.page.html',
  styleUrls: ['./advanced-diploma-ias.page.scss'],
})
export class AdvancedDiplomaIasPage implements OnInit {

  constructor(public router: Router) { }
  cn1(){
    this.router.navigate(['ad-pt']);
  }

  cn2(){
    this.router.navigate(['ad-as']);
  }

  cn3(){
    this.router.navigate(['ad-es']);
  }

  cn4(){
    this.router.navigate(['ad-hs']);
  }

  cn5(){
    this.router.navigate(['ad-ft']);
  }

  cn6(){
    this.router.navigate(['ad-am-vn']);
  }

  cn7(){
    this.router.navigate(['ad-fm']);
  }

  cn8(){
    this.router.navigate(['ad-h']);
  }

  ngOnInit() {
  }

}
