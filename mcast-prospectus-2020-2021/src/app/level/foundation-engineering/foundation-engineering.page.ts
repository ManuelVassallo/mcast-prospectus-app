import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foundation-engineering',
  templateUrl: './foundation-engineering.page.html',
  styleUrls: ['./foundation-engineering.page.scss'],
})
export class FoundationEngineeringPage implements OnInit {

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

  cn6(){
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
