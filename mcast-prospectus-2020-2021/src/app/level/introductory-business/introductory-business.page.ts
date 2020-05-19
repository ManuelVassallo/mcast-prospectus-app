import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introductory-business',
  templateUrl: './introductory-business.page.html',
  styleUrls: ['./introductory-business.page.scss'],
})
export class IntroductoryBusinessPage implements OnInit {

  constructor(public router: Router) { }

  cn1(){
    this.router.navigate(['ic-b']);
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
