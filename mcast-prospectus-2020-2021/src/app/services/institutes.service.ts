import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as xml2js from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class InstitutesService 
{

  constructor(
    public http: HttpClient
  ) { } 

  public preload()
  {
    this.http.get('/assets/data.xml').subscribe()
  }
}
