import { Component, OnInit } from '@angular/core';
import { InstitutesService } from 'src/app/services/institutes.service';

@Component({
  selector: 'app-coursepageinfo',
  templateUrl: './coursepageinfo.page.html',
  styleUrls: ['./coursepageinfo.page.scss'],
})
export class CoursepageinfoPage implements OnInit {

  constructor(public institutesService: InstitutesService) { }

  ngOnInit() 
  {
    console.log("Starting to load...");
    this.institutesService.preload();
    console.log("Finished.");
  }

}
