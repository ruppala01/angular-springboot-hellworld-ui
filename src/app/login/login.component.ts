import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {AuthenticationService} from '../service/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  username:String='ruppala'
  password:String;
  invalidLogin:boolean=false;
  constructor(private router:Router,private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }
  checkLogin() {
    
    if(this.authenticationService.authenticate(this.username, this.password) ){

      this.invalidLogin=false;
      this.router.navigate(['employees'])
    }else{
      this.invalidLogin=true;
    }
    
  }
}
