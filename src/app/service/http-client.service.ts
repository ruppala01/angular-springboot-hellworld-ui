import { Injectable } from '@angular/core';
import {Employee} from '../model/Employee'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  username='';
  password='';
  constructor(private http:HttpClient) { }
  getEmployees():Observable<any>{
    console.log("Test call..");
    const headers = new HttpHeaders({Authorization:"Basic "+btoa(this.username+":"+this.password)});
    return this.http.get<Employee[]>('http://localhost:8080/employees',{headers});
  }
  deleteEmployee(employee):Observable<any>{
    console.log("")
    const headers = new HttpHeaders({Authorization:"Basic "+btoa(this.username+":"+this.password)});
    return this.http.delete('http://localhost:8080/employees/'+employee.empId,{headers});
  }

  addEmployee(employee):Observable<any>{

    const headers = new HttpHeaders({Authorization:"Basic "+btoa(this.username+":"+this.password)});
    return this.http.post('http://localhost:8080/employees',employee,{headers});
  }
  validateUser(username,password):Observable<any> {
    this.username=username;
    this.password=password;
    const headers = new HttpHeaders({Authorization:"Basic "+btoa(username+":"+password)});
    return this.http.get<User>('http://localhost:8080/employees/validateLogin',{headers});
  }
}
