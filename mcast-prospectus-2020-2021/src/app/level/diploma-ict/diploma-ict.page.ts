import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diploma-ict',
  templateUrl: './diploma-ict.page.html',
  styleUrls: ['./diploma-ict.page.scss'],
})
export class DiplomaIctPage implements OnInit {

  constructor(public router: Router) { }
  cn1(){
    this.router.navigate(['ict-d-ict']);
  }

  cn2(){
    this.router.navigate(['ict-d-ig']);
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
