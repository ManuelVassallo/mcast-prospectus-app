import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advanced-diploma-ica',
  templateUrl: './advanced-diploma-ica.page.html',
  styleUrls: ['./advanced-diploma-ica.page.scss'],
})
export class AdvancedDiplomaIcaPage implements OnInit {

  constructor(public router: Router) { }
  cn1(){
    this.router.navigate(['ica-ad-ad']);
  }

  cn2(){
    this.router.navigate(['ica-ad-cmp']);
  }

  cn3(){
    this.router.navigate(['ica-ad-chs']);
  }

  cn4(){
    this.router.navigate(['ica-ad-fr']);
  }

  cn5(){
    this.router.navigate(['ica-ad-gd-im']);
  }

  cn6(){
    this.router.navigate(['ica-ad-pa']);
  }

  cn7(){
    this.router.navigate(['ica-ad-p']);
  }

  ngOnInit() {
  }

}
