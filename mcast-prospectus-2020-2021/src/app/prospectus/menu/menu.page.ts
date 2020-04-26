import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router: Router) { }
  
  institutes(){
    this.router.navigate(['institutes']);
  }

  about(){
    this.router.navigate(['about']);
  }

  corporate(){
    this.router.navigate(['corporateservices']);
  }

  kunsill(){
    this.router.navigate(['kunsilstudentimcast']);
  }

  events(){
    this.router.navigate(['eventsatmcast']);
  }

  principal(){
    this.router.navigate(['principalandceo']);
  }

  ngOnInit() {
  }

}
