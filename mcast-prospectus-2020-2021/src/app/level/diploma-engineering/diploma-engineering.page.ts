import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diploma-engineering',
  templateUrl: './diploma-engineering.page.html',
  styleUrls: ['./diploma-engineering.page.scss'],
})
export class DiplomaEngineeringPage implements OnInit {

  constructor(public router: Router) { }
  cn1(){
    this.router.navigate(['']);
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
