import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list-masters',
  templateUrl: './courses-list-masters.page.html',
  styleUrls: ['./courses-list-masters.page.scss'],
})
export class CoursesListMastersPage implements OnInit {

  constructor(public router: Router) { }

  cn1(){
    this.router.navigate(['']);
  }

  cn2(){
    this.router.navigate(['']);
  }

  cn3(){
    this.router.navigate(['']);
  }

  cn4(){
    this.router.navigate(['']);
  }

  cn5(){
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
