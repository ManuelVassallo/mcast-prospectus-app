import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as xml2js from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class InstitutesService 
{
  //import HttpClient to this class
  constructor(
    public http: HttpClient
  ) { } 

  public preload()
  {
    this.http.get('/assets/data.xml', {
      headers: new HttpHeaders()
      .set('Content-Type', 'text/xml')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin','*')
      .append('Access-Control-Allow-Headers',"Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
      responseType: 'text'
    }).subscribe(
        //what happens when the connection has been successful
        (content: string) => {
            console.log(content);
        },

        //what happens if there is an error
        error =>{
          console.warn(error);
        }
    );
  }
}
