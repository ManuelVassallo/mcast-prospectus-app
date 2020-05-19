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
    this.router.navigate(['gozo-fc-c']);
  }

  cn2(){
    this.router.navigate(['gozo-fc-wb']);
  }

  cn3(){
    this.router.navigate(['gozo-fc-ict']);
  }

  cn4(){
    this.router.navigate(['gozo-fc-es']);
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
