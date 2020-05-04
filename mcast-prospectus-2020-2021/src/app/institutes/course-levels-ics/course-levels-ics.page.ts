import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-levels-ics',
  templateUrl: './course-levels-ics.page.html',
  styleUrls: ['./course-levels-ics.page.scss'],
})
export class CourseLevelsICSPage implements OnInit {

  constructor(public router: Router) { }

  ic(){
    this.router.navigate(['introductory-ics']);
  }

  fc(){
    this.router.navigate(['foundation-ics']);
  }

  d(){
    this.router.navigate(['diploma-ics']);
  }

  ad(){
    this.router.navigate(['advanced-diploma-ics']);
  }

  bsh(){
    this.router.navigate(['bachelor-ics']);
  }

  ngOnInit() {
  }

}
