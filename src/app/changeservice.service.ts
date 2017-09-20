import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';



@Injectable()
export class ChangeserviceService {
  private _url: string = "http://apimanagersasuat.azurewebsites.net/changeList";


  private header: Headers;



  constructor(private _http: Http) { }

  getChangeList() {
    return this._http.get(this._url)
      .map((resp: Response) => resp.json())
      .catch(this.handleError);
  }

  getChangeDetails(Id: string) {
    return this._http.get(this._url + '/' + Id)
      .map((resp: Response) =>  resp.json())
      .catch(this.handleError);
  }

  handleError(error: any) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server Error');
  }


}
