import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advanced-diploma-business',
  templateUrl: './advanced-diploma-business.page.html',
  styleUrls: ['./advanced-diploma-business.page.scss'],
})
export class AdvancedDiplomaBusinessPage implements OnInit {

  constructor(public router: Router) { }
  cn1(){
    this.router.navigate(['ad-ba']);
  }

  cn2(){
    this.router.navigate(['ad-fi']);
  }

  cn3(){
    this.router.navigate(['ad-a']);
  }

  cn4(){
    this.router.navigate(['ad-m']);
  }

  cn5(){
    this.router.navigate(['ad-ass']);
  }

  cn6(){
    this.router.navigate(['ad-r']);
  }

  ngOnInit() {
  }

}
