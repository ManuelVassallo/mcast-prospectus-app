import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstitutesService } from 'src/app/services/institutes.service';

@Component({
  selector: 'app-course-levels',
  templateUrl: './course-levels.page.html',
  styleUrls: ['./course-levels.page.scss'],
})
export class CourseLevelsPage implements OnInit
{
  public code: string = ''

  public levels: any = {};

  constructor(
    public route: ActivatedRoute,
    public institutesService: InstitutesService
  ) { }

  ngOnInit()
  {
    // when clicked on level, can transfer to:
    // localhost:4200/level-info/ias/1
    this.code = this.route.snapshot.params.code;
    this.levels = this.institutesService.getInstituteLevels(this.code);
  }

}
