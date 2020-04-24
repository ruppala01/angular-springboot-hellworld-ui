import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { Employee } from '../model/Employee';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees : String[]

  constructor(private httpClientService:HttpClientService) { }

  ngOnInit(): void {
    this.httpClientService.getEmployees().subscribe(response =>this.handleSuccessfulResponse(response),)
  }

  handleSuccessfulResponse(response){
    this.employees=response;
  }
  handleErrorResponse(error){
    console.log(error)
  }
}
