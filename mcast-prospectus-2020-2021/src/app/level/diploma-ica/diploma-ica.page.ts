import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diploma-ica',
  templateUrl: './diploma-ica.page.html',
  styleUrls: ['./diploma-ica.page.scss'],
})
export class DiplomaIcaPage implements OnInit {

  constructor(public router: Router) { }
  cn1(){
    this.router.navigate(['ica-d-ad']);
  }

  cn2(){
    this.router.navigate(['ica-d-pa']);
  }

  cn3(){
    this.router.navigate(['ica-d-m']);
  }

  cn4(){
    this.router.navigate(['ica-d-p']);
  }

  cn5(){
    this.router.navigate(['']);
  }

  cn6(){
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
