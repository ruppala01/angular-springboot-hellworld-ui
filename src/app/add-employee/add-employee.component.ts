import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/Employee';
import { HttpClientService } from '../service/http-client.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: [
  ]
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee("","","","");

  constructor(private httpService:HttpClientService,private router:Router) { }

  ngOnInit(): void {
  }
  addEmployee(employee):any{
    return this.httpService.addEmployee(employee).subscribe(response => this.handleSuccessResponse(response),)
  }

  handleSuccessResponse(response):void{
    this.employee=response;
    alert("Employee "+this.employee.name+ " add sucessfully !! ")
    this.router.navigate(["employees"]);
  }
}
