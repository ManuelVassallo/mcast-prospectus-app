import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foundation-ias',
  templateUrl: './foundation-ias.page.html',
  styleUrls: ['./foundation-ias.page.scss'],
})
export class FoundationIasPage implements OnInit {

  constructor(public router: Router) { }

  cn1(){
    this.router.navigate(['coursepageinfo']);
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
