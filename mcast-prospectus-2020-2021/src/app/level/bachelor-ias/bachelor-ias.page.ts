import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bachelor-ias',
  templateUrl: './bachelor-ias.page.html',
  styleUrls: ['./bachelor-ias.page.scss'],
})
export class BachelorIasPage implements OnInit {

  constructor(public router: Router) { }
  cn1(){
    this.router.navigate(['ba-ct']);
  }

  cn2(){
    this.router.navigate(['ba-ee']);
  }

  cn3(){
    this.router.navigate(['ba-hs']);
  }

  cn4(){
    this.router.navigate(['ba-eh']);
  }

  cn5(){
    this.router.navigate(['ba-am-vn']);
  }

  cn6(){
    this.router.navigate(['ba-h']);
  }

  cn7(){
    this.router.navigate(['ba-fm']);
  }

  cn8(){
    this.router.navigate(['']);
  }

  cn9(){
    this.router.navigate(['']);
  }

  cn10(){
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
