import { Injectable } from '@angular/core';
import {Employee} from '../model/Employee'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http:HttpClient) { }
  getEmployees():Observable<any>{
    console.log("Test call..")
    return this.http.get<Employee[]>('http://localhost:8080/employees')
  }
}
