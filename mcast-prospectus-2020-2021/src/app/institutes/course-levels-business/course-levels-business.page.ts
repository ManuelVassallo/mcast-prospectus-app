import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-levels-business',
  templateUrl: './course-levels-business.page.html',
  styleUrls: ['./course-levels-business.page.scss'],
})
export class CourseLevelsBusinessPage implements OnInit {

  constructor(public router: Router) { }

  ic(){
    this.router.navigate(['introductory-business']);
  }

  fc(){
    this.router.navigate(['foundation-business']);
  }

  d(){
    this.router.navigate(['diploma-business']);
  }

  ad(){
    this.router.navigate(['advanced-diploma-business']);
  }

  bsh(){
    this.router.navigate(['bachelor-business']);
  }

  ngOnInit() {
  }

}
