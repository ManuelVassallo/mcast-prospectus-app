import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bachelor-business',
  templateUrl: './bachelor-business.page.html',
  styleUrls: ['./bachelor-business.page.scss'],
})
export class BachelorBusinessPage implements OnInit {

  constructor(public router: Router) { }
  cn1(){
    this.router.navigate(['hd-at']);
  }

  cn2(){
    this.router.navigate(['ba-be']);
  }

  cn3(){
    this.router.navigate(['ba-pf']);
  }

  cn4(){
    this.router.navigate(['ba-fsm']);
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
