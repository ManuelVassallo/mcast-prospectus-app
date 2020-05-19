import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diploma-ias',
  templateUrl: './diploma-ias.page.html',
  styleUrls: ['./diploma-ias.page.scss'],
})
export class DiplomaIasPage implements OnInit {

  constructor(public router: Router) { }
  cn1(){
    this.router.navigate(['d-applied-science']);
  }

  cn2(){
    this.router.navigate(['d-animal-care']);
  }

  cn3(){
    this.router.navigate(['d-fish-husbandry']);
  }

  cn4(){
    this.router.navigate(['d-horticulture']);
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
