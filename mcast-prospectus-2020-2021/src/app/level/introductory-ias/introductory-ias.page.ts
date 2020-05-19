import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introductory-ias',
  templateUrl: './introductory-ias.page.html',
  styleUrls: ['./introductory-ias.page.scss'],
})
export class IntroductoryIasPage implements OnInit {

  constructor(
    public router: Router) { }


    cn1(){
      this.router.navigate(['ic-applied-science']);
    }
  
    cn2(){
      this.router.navigate(['ic-animal-husbandry-and-horticultural-skills']);
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
