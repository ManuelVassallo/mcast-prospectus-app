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
    this.router.navigate(['']);
  }

  ics(){
    this.router.navigate(['']);
  }

  ica(){
    this.router.navigate(['']);
  }

  iet(){
    this.router.navigate(['']);
  }

  ict(){
    this.router.navigate(['']);
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
