import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foundation-gozo',
  templateUrl: './foundation-gozo.page.html',
  styleUrls: ['./foundation-gozo.page.scss'],
})
export class FoundationGozoPage implements OnInit {

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
