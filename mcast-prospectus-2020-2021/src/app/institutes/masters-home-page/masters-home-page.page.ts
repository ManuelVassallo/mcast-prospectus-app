import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masters-home-page',
  templateUrl: './masters-home-page.page.html',
  styleUrls: ['./masters-home-page.page.scss'],
})
export class MastersHomePagePage implements OnInit {

  constructor(public router: Router) { }

  courses(){
    this.router.navigate(['courses-list-masters']);
  }

  ngOnInit() {
  }

}
