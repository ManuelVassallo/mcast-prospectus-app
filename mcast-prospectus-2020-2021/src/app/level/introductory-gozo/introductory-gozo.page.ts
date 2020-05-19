import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introductory-gozo',
  templateUrl: './introductory-gozo.page.html',
  styleUrls: ['./introductory-gozo.page.scss'],
})
export class IntroductoryGozoPage implements OnInit {

  constructor(public router: Router) { }

  
  cn1(){
    this.router.navigate(['gozo-ic-vs']);
  }

  cn2(){
    this.router.navigate(['gozo-ic-ce']);
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
