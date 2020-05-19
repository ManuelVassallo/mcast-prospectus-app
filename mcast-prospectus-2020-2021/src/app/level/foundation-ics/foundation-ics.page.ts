import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foundation-ics',
  templateUrl: './foundation-ics.page.html',
  styleUrls: ['./foundation-ics.page.scss'],
})
export class FoundationIcsPage implements OnInit {

  constructor(public router: Router) { }

  cn1(){
    this.router.navigate(['fc-c']);
  }

  cn2(){
    this.router.navigate(['fc-wb-b-h']);
  }

  cn3(){
    this.router.navigate(['fc-s']);
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
