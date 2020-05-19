import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introductory-ict',
  templateUrl: './introductory-ict.page.html',
  styleUrls: ['./introductory-ict.page.scss'],
})
export class IntroductoryIctPage implements OnInit {

  constructor(public router: Router) { }

  cn1(){
    this.router.navigate(['ict-ic-ict']);
  }

  cn2(){
    this.router.navigate(['']);
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
