import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principalandceo',
  templateUrl: './principalandceo.page.html',
  styleUrls: ['./principalandceo.page.scss'],
})
export class PrincipalandceoPage implements OnInit {

  constructor(private router: Router) { }

  president(){
    this.router.navigate(['president']);
  }

  ngOnInit() {
  }

}
