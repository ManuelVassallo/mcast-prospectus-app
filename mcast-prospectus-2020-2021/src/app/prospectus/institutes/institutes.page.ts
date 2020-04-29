import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institutes',
  templateUrl: './institutes.page.html',
  styleUrls: ['./institutes.page.scss'],
})
export class InstitutesPage implements OnInit {

  constructor(private router: Router) { }

  ias(){
    this.router.navigate(['instituteofappliedscience']);
  }

  ibmc(){
    this.router.navigate(['institute-of-business-home-page']);
  }

  ics(){
    this.router.navigate(['institute-of-community-service-home-page']);
  }

  ica(){
    this.router.navigate(['institute-for-the-creative-arts-home-page']);
  }

  iet(){
    this.router.navigate(['institute-of-engineering-and-transport-home-page']);
  }

  ict(){
    this.router.navigate(['institute-of-ict-home-page']);
  }

  gc(){
    this.router.navigate(['']);
  }

  gd(){
    this.router.navigate(['']);
  }

  masters(){
    this.router.navigate(['']);
  }

  cpd(){
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
