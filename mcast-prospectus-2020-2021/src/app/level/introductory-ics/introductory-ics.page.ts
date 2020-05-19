import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introductory-ics',
  templateUrl: './introductory-ics.page.html',
  styleUrls: ['./introductory-ics.page.scss'],
})
export class IntroductoryIcsPage implements OnInit {

  constructor(public router: Router) { }

  cn1(){
    this.router.navigate(['ic-c']);
  }

  cn2(){
    this.router.navigate(['ic-h']);
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
