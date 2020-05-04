import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institute-of-engineering-and-transport-home-page',
  templateUrl: './institute-of-engineering-and-transport-home-page.page.html',
  styleUrls: ['./institute-of-engineering-and-transport-home-page.page.scss'],
})
export class InstituteOfEngineeringAndTransportHomePagePage implements OnInit {

  constructor(public router: Router) { }

  courses(){
    this.router.navigate(['course-levels-engineering']);
  }

  info(){
    
  }

  ngOnInit() {
  }

}
