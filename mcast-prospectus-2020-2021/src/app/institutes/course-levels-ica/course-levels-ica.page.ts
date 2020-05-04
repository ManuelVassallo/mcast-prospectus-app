import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-levels-ica',
  templateUrl: './course-levels-ica.page.html',
  styleUrls: ['./course-levels-ica.page.scss'],
})
export class CourseLevelsICAPage implements OnInit {

  constructor(public router: Router) { }

  ic(){
    this.router.navigate(['introductory-ica']);
  }

  fc(){
    this.router.navigate(['foundation-ica']);
  }

  d(){
    this.router.navigate(['diploma-ica']);
  }

  ad(){
    this.router.navigate(['advanced-diploma-ica']);
  }

  bsh(){
    this.router.navigate(['bachelor-ica']);
  }

  ngOnInit() {
  }

}
