import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

//interfaces
import {IEmployee } from './interfaces/IEmployee';



@Injectable()
export default class CallBackService{
  constructor(private _http:HttpClient){}
  base_url='http://dummy.restapiexample.com/api/v1/';

  getAllEmployees():Observable<IEmployee[]>{
    return this._http.get<IEmployee[]>(this.base_url+'employees');
  }

  getEmployeeById(id:number):Observable<IEmployee>{
    return this._http.get<IEmployee>(this.base_url+'employees/'+ id);
  }

  updateEmployeeById(id:number, emp:IEmployee):Observable<IEmployee>{
    return this._http.put<IEmployee>(this.base_url+'update/'+ id, JSON.stringify(emp));
  }

  createEmployee(id:number, emp:IEmployee):Observable<IEmployee>{
    return this._http.post<IEmployee>(this.base_url+'create/'+ id, JSON.stringify(emp));
  }

  deleteEmployeeById(id:number):Observable<IEmployee>{
    return this._http.delete<IEmployee>(this.base_url+'delete/'+ id);
  }
}
