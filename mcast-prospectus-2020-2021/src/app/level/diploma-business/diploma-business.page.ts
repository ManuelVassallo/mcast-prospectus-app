import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diploma-business',
  templateUrl: './diploma-business.page.html',
  styleUrls: ['./diploma-business.page.scss'],
})
export class DiplomaBusinessPage implements OnInit {

  constructor(public router: Router) { }
  cn1(){
    this.router.navigate(['d-b']);
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
