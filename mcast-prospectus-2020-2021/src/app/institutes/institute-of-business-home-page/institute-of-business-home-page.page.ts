import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institute-of-business-home-page',
  templateUrl: './institute-of-business-home-page.page.html',
  styleUrls: ['./institute-of-business-home-page.page.scss'],
})
export class InstituteOfBusinessHomePagePage implements OnInit {

  constructor(public router: Router) { }

  courses(){
    this.router.navigate(['course-levels-business']);
  }

  info(){
    this.router.navigate(['institute-info-business']);
  }

  ngOnInit() {
  }

}
