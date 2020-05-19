import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diploma-ics',
  templateUrl: './diploma-ics.page.html',
  styleUrls: ['./diploma-ics.page.scss'],
})
export class DiplomaIcsPage implements OnInit {

  constructor(public router: Router) { }
  cn1(){
    this.router.navigate(['ics-d-bs']);
  }

  cn2(){
    this.router.navigate(['ics-d-hw']);
  }

  cn3(){
    this.router.navigate(['ics-d-h-sc']);
  }

  cn4(){
    this.router.navigate(['ics-d-s']);
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
