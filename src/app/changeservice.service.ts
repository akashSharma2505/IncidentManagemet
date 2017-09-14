import { Injectable } from '@angular/core';

import  {  Http,  Response,  Headers,  RequestOptions  }  from  '@angular/http';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/catch';
import  {  Observable  }  from  'rxjs/Rx';



@Injectable()
export class ChangeserviceService {
  private  _url:  string  =  "http://apimanagersasuat.azurewebsites.net/changeList";
  
  constructor(private _http: Http) { }
  getCustomerList() {
    return  this._http.get(this._url)
      .map((resp:  Response)  =>  resp.json())
      .catch(this.handleError);
  }

  handleError(error: any) {
console.log(error);
return Observable.throw(error.json().error || 'Server Error');
}


}
