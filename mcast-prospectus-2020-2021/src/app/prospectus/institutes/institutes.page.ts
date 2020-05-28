import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstitutesService } from 'src/app/services/institutes.service';

@Component({
  selector: 'app-institutes',
  templateUrl: './institutes.page.html',
  styleUrls: ['./institutes.page.scss'],
})
export class InstitutesPage implements OnInit
{
  public institutes: any[] = [];

  constructor(
    private router: Router,
    public institutesService: InstitutesService
  ) { }

  ngOnInit()
  {
    this.institutes = this.institutesService.getInstitutes();
  }
}
