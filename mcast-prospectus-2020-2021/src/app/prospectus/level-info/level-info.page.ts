import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstitutesService } from 'src/app/services/institutes.service';

@Component({
  selector: 'app-level-info',
  templateUrl: './level-info.page.html',
  styleUrls: ['./level-info.page.scss'],
})
export class LevelInfoPage implements OnInit {

  public courses: any = {};

  constructor(
    public route: ActivatedRoute,
    public institutesService: InstitutesService
  ) { }

  ngOnInit() 
  {
    const code = this.route.snapshot.params.code;
    const level = this.route.snapshot.params.level;
    this.courses = this.institutesService.getCoursesByLevel(code, level);

    console.log(this.courses);
  }

}
