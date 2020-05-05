import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gozo-campus-home-page',
  templateUrl: './gozo-campus-home-page.page.html',
  styleUrls: ['./gozo-campus-home-page.page.scss'],
})
export class GozoCampusHomePagePage implements OnInit {

  constructor(public router: Router) { }

  courses(){
    this.router.navigate(['course-levels-gozo']);
  }

  info(){
    this.router.navigate(['institute-info-gozo']);
  }

  ngOnInit() {
  }

}
