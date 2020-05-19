import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introductory-ica',
  templateUrl: './introductory-ica.page.html',
  styleUrls: ['./introductory-ica.page.scss'],
})
export class IntroductoryIcaPage implements OnInit {

  constructor(public router: Router) { }

  cn1(){
    this.router.navigate(['ica-ic-ad']);
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

  cn6(){
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
