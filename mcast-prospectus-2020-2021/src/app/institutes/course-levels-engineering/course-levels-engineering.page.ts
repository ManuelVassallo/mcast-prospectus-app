import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-levels-engineering',
  templateUrl: './course-levels-engineering.page.html',
  styleUrls: ['./course-levels-engineering.page.scss'],
})
export class CourseLevelsEngineeringPage implements OnInit {

  constructor(public router: Router) { }

  ic(){
    this.router.navigate(['introductory-engineering']);
  }

  fc(){
    this.router.navigate(['foundation-engineering']);
  }

  d(){
    this.router.navigate(['diploma-engineering']);
  }

  ad(){
    this.router.navigate(['advanced-diploma-engineering']);
  }

  bsh(){
    this.router.navigate(['bachelor-engineering']);
  }

  ngOnInit() {
  }

}
