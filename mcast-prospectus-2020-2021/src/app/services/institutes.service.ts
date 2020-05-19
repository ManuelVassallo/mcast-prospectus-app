import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as xml2js from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class InstitutesService 
{

  /**
  * The data stored in this service
  */
  private _data: any = null;

  //import HttpClient to this class
  constructor(
    public http: HttpClient
  ) { } 

  
  public async preload()
  {
    await this.http.get('/assets/data.json', {
        headers: new HttpHeaders()
          .set('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method')

    })
      .toPromise()
      .then(
        // Success
        (content:string) => { this._data = content; },
          

        // Error
        error => {
          console.error(error);
        }
      );
  }

  /**
   * Interprets the xml information into json (so the app understands the data)
   * @param content The Xml data as a string.
   */
  private parseData(content: string)
  {
    xml2js.parseString(content, {
      attrkey: 'attr',
      trim: true
    }, (error, result) => {
      //check for erros first so we can stop the process if something happens
      if (error != null)
      {
        console.error(error);
        return;
      }
      //successful process goes here
      this._data = result.prospectus;
      console.log(this._data);
    });
  }
  
  /**
   * Will retrieve one institute from the list
   * @param code The Institute code
   */
  public getInstitute(code: string): any
  {
    return this._data.institute.find(i => i.attr.url == code);
  }

  public getCourse(code: string): any
  {
    return this._data.course.find(i => i.attr.url == code);
  }

  /**
   * Finds and returns the Institute name from the JSON object
   * @param institute The Institute object
   */
  public getInstituteName(institute: any, lang: string = 'en'): string 
  {
    const info = institute.info[0].name.find(name => name.attr.lang == lang);
    return info._;
  }

  public getInstitutes(): any[]
  {
    return this._data;
  }

  public getCourseCode(): any[]
  {
    return this._data;
  }


}
