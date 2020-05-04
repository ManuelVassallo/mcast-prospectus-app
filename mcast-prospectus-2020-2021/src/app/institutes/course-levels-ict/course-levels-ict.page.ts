import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-levels-ict',
  templateUrl: './course-levels-ict.page.html',
  styleUrls: ['./course-levels-ict.page.scss'],
})
export class CourseLevelsICTPage implements OnInit {

  constructor(public router: Router) { }
  ic(){
    this.router.navigate(['introductory-ict']);
  }

  fc(){
    this.router.navigate(['foundation-ict']);
  }

  d(){
    this.router.navigate(['diploma-ict']);
  }

  ad(){
    this.router.navigate(['advanced-diploma-ict']);
  }

  bsh(){
    this.router.navigate(['bachelor-ict']);
  }
  ngOnInit() {
  }

}
