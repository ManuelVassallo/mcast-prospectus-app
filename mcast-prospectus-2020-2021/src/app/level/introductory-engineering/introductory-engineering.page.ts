import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introductory-engineering',
  templateUrl: './introductory-engineering.page.html',
  styleUrls: ['./introductory-engineering.page.scss'],
})
export class IntroductoryEngineeringPage implements OnInit {

  constructor(public router: Router) { }

  cn1(){
    this.router.navigate(['engineering-ic-ce']);
  }

  cn2(){
    this.router.navigate(['engineering-ic-e']);
  }

  cn3(){
    this.router.navigate(['']);
  }

  cn4(){
    this.router.navigate(['']);
  }

  cn5(){
    this.router.navigate(['']);
  }

  cn6(){
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
