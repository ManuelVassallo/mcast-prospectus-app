import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foundation-ica',
  templateUrl: './foundation-ica.page.html',
  styleUrls: ['./foundation-ica.page.scss'],
})
export class FoundationIcaPage implements OnInit {

  constructor(public router: Router) { }

  cn1(){
    this.router.navigate(['ica-fc-ca']);
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
