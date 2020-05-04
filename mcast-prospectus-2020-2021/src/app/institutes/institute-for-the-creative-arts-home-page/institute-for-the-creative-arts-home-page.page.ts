import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institute-for-the-creative-arts-home-page',
  templateUrl: './institute-for-the-creative-arts-home-page.page.html',
  styleUrls: ['./institute-for-the-creative-arts-home-page.page.scss'],
})
export class InstituteForTheCreativeArtsHomePagePage implements OnInit {

  constructor(public router: Router) { }

  courses(){
    this.router.navigate(['course-levels-ica']);
  }

  info(){
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
