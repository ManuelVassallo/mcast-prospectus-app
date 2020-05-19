import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advanced-diploma-ics',
  templateUrl: './advanced-diploma-ics.page.html',
  styleUrls: ['./advanced-diploma-ics.page.scss'],
})
export class AdvancedDiplomaIcsPage implements OnInit {

  constructor(public router: Router) { }
  cn1(){
    this.router.navigate(['ics-ed-s-e-p']);
  }

  cn2(){
    this.router.navigate(['ics-ad-b-ct']);
  }

  cn3(){
    this.router.navigate(['ics-ad-cc-l-d']);
  }

  cn4(){
    this.router.navigate(['ics-ad-h-sc']);
  }

  cn5(){
    this.router.navigate(['ics-ad-s']);
  }

  cn6(){
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
