import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-levels-gozo',
  templateUrl: './course-levels-gozo.page.html',
  styleUrls: ['./course-levels-gozo.page.scss'],
})
export class CourseLevelsGozoPage implements OnInit {

  constructor(public router: Router) { }

  
  ic(){
    this.router.navigate(['introductory-gozo']);
  }

  fc(){
    this.router.navigate(['foundation-gozo']);
  }

  d(){
    this.router.navigate(['diploma-gozo']);
  }

  ad(){
    this.router.navigate(['advanced-diploma-gozo']);
  }

  bsh(){
    this.router.navigate(['bachelor-gozo']);
  }

  ngOnInit() {
  }

}
