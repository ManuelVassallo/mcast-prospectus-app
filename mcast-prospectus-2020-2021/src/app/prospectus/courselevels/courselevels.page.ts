import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courselevels',
  templateUrl: './courselevels.page.html',
  styleUrls: ['./courselevels.page.scss'],
})
export class CourselevelsPage implements OnInit {

  constructor(public router: Router) { }
  
  // redirection to other pages
  ic(){
    this.router.navigate(['introductory-ias']);
  }

  fc(){
    this.router.navigate(['foundation-ias']);
  }

  d(){
    this.router.navigate(['diploma-ias']);
  }

  ad(){
    this.router.navigate(['advanced-diploma-ias']);
  }

  bsh(){
    this.router.navigate(['bachelor-ias']);
  }

  ngOnInit() {
  }

}
