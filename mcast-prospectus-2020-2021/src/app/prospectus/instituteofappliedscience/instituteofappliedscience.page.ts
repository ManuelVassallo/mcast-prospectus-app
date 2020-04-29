import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instituteofappliedscience',
  templateUrl: './instituteofappliedscience.page.html',
  styleUrls: ['./instituteofappliedscience.page.scss'],
})
export class InstituteofappliedsciencePage implements OnInit {

  constructor(public router: Router) { }

  courses(){
    this.router.navigate(['courselevels']);
  }

  info(){
    this.router.navigate(['institutesummary']);
  }

  ngOnInit() {
  }

}
