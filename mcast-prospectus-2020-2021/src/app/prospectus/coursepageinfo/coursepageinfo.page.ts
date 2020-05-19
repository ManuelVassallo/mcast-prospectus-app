import { Component, OnInit } from '@angular/core';
import { InstitutesService } from 'src/app/services/institutes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coursepageinfo',
  templateUrl: './coursepageinfo.page.html',
  styleUrls: ['./coursepageinfo.page.scss'],
})
export class CoursepageinfoPage implements OnInit {

  /**
   *  The Institutes List
   */
  public institute: any = null;

  constructor(
    public route: ActivatedRoute,
    public institutesService: InstitutesService) { }

  ngOnInit() 
  {
    const code = this.route.snapshot.params.code;
    this.institute = this.institutesService.getInstitute(code);
    
    console.log(code);
  }

}
