import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kunsilstudentimcast',
  templateUrl: './kunsilstudentimcast.page.html',
  styleUrls: ['./kunsilstudentimcast.page.scss'],
})
export class KunsilstudentimcastPage implements OnInit {

  constructor(private router: Router) { }

  aims(){
    this.router.navigate(['ksmsmainaims']);
  }

  ngOnInit() {
  }

}
