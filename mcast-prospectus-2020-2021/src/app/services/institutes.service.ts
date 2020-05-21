import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
        (content:string) => {
          this._data = content;
          console.log(content);
        },
          

        // Error
        error => {
          console.error(error);
        }
      );
  }
  
  /**
   * Will retrieve one institute from the list
   * @param code The Institute code
   */
  public getInstitute(code: string): any
  {
    return this._data.find(institute => institute.code == code);
  }

  public getCourse(code: string): any
  {
    return this._data.course.find(i => i.attr.url == code);
  }

  public getCoursesByLevel(code: string, mqf: number): any[]
  {
    const institute = this.getInstitute(code);
    return institute.courses.filter(course => course.mqf == mqf);
  }

  public getInstituteLevels(code: string): any
  {
    const levels = {};
    
    for (var i = 1; i < 7; i++)
    {
      levels[i] = this.getCoursesByLevel(code, i);
    }

    return levels;
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
