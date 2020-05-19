import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bachelor-ics',
  templateUrl: './bachelor-ics.page.html',
  styleUrls: ['./bachelor-ics.page.scss'],
})
export class BachelorIcsPage implements OnInit {

  constructor(public router: Router) { }
  cn1(){
    this.router.navigate(['ica-hd-ey']);
  }

  cn2(){
    this.router.navigate(['ics-ba-h-sc']);
  }

  cn3(){
    this.router.navigate(['ics-ba-ie']);
  }

  cn4(){
    this.router.navigate(['ics-ba-h-s']);
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
