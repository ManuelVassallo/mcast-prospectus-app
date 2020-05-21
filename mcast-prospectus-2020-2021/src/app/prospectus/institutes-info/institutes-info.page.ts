import { Component, OnInit } from '@angular/core';
import { InstitutesService } from 'src/app/services/institutes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-institutes-info',
  templateUrl: './institutes-info.page.html',
  styleUrls: ['./institutes-info.page.scss'],
})
export class InstitutesInfoPage implements OnInit
{
  public institute: any = {};

  constructor(
    public route: ActivatedRoute,
    public institutesService: InstitutesService
  ) { }

  ngOnInit()
  {
    const code = this.route.snapshot.params.code;
    this.institute = this.institutesService.getInstitute(code);

    console.log(this.institute);
  }

}
