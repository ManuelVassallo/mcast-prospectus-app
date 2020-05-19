import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list-masters',
  templateUrl: './courses-list-masters.page.html',
  styleUrls: ['./courses-list-masters.page.scss'],
})
export class CoursesListMastersPage implements OnInit {

  constructor(public router: Router) { }

  cn1(){
    this.router.navigate(['masters-pgc-rm']);
  }

  cn2(){
    this.router.navigate(['masters-r']);
  }

  cn3(){
    this.router.navigate(['masters-asb']);
  }

  cn4(){
    this.router.navigate(['masters-le']);
  }

  cn5(){
    this.router.navigate(['masters-its']);
  }

  cn6(){
    this.router.navigate(['masters-ee']);
  }

  cn7(){
    this.router.navigate(['masters-hpb']);
  }

  cn8(){
    this.router.navigate(['masters-iwr']);
  }

  cn9(){
    this.router.navigate(['masters-pd']);
  }

  cn10(){
    this.router.navigate(['masters-m']);
  }

  cn11(){
    this.router.navigate(['masters-ess']);
  }

  ngOnInit() {
  }

}
