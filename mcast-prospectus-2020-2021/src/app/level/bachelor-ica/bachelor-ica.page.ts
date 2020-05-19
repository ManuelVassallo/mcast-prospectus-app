import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bachelor-ica',
  templateUrl: './bachelor-ica.page.html',
  styleUrls: ['./bachelor-ica.page.scss'],
})
export class BachelorIcaPage implements OnInit {

  constructor(public router: Router) { }
  cn1(){
    this.router.navigate(['ica-ba-fa']);
  }

  cn2(){
    this.router.navigate(['ica-ba-ga-vd']);
  }

  cn3(){
    this.router.navigate(['ica-ba-gd']);
  }

  cn4(){
    this.router.navigate(['ica-ba-im']);
  }

  cn5(){
    this.router.navigate(['ica-ba-pd']);
  }

  cn6(){
    this.router.navigate(['ica-ba-sd']);
  }

  cn7(){
    this.router.navigate(['ica-ba-cmp']);
  }

  cn8(){
    this.router.navigate(['ica-ba-p']);
  }

  cn9(){
    this.router.navigate(['ica-ba-j']);
  }

  cn10(){
    this.router.navigate(['ica-ba-pa']);
  }

  cn11(){
    this.router.navigate(['ica-ba-f']);
  }

  ngOnInit() {
  }

}
